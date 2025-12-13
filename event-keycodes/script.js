// Grab DOM elements we'll update
const display = document.getElementById('display') || document.querySelector('#display');
const historyList = document.getElementById('historyList');
const clearBtn = document.getElementById('clearHistory');
const copyBtn = document.getElementById('copyHistory');

//keep a simple FIFO key history
const MAX_HISTORY = 50; // maximum item to keep
const history = [];

/**
 * Render the main display cards for the last pressed key
 * @param {keyboardEvent} e
 */
function renderDisplay(e) {
    //Normalize the visible "key" name for the space key
    const visibleKey = e.key === ' ' ? 'Space' : e.key;

    //Show which modifiers were pressed
    const modifiers = [];
    if (e.shiftKey) modifiers.push('Shift');
    if (e.ctrlKey) modifiers.push('Ctrl');
    if (e.altKey) modifiers.push('Alt');
    if (e.metaKey) modifiers.push('Meta');

    //Build inner HTML for three cards
    display.innerHTML = `
        <div class="key">
        ${escapeHtml(String(visibleKey))}
        <small>event.key</small>
        </div>


        <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
        </div>

        <div class="key">
        ${escapeHtml(String(e.code))}
        <small>event.code</small>
        </div>

        <div class="key">
        ${modifiers.length ? modifiers.join(' + ') : '-'}
        <small>Modifiers</small>
        </div>
        `;

}

/**
 * Add entry to the history and update UI
 * @param {keyboardEvent} e
 */
function pushHistory(e) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const visibleKey = e.key === ' ' ? 'Space' : e.key;
    const entry = {
        key: String(visibleKey),
        keyCode: e.keyCode,
        code: String(e.code),
        modifiers: [e.shiftKey ? 'Shift' : '', e.ctrlKey ? 'Ctrl' : '', e.altKey ? 'Alt' : '',e.metaKey ? 'Meta' : '']
            .filter(Boolean).join(' +'),
            at: time
    };

    history.unshift(entry); // newest first
    if(history.length > MAX_HISTORY) history.pop();
    renderHistory();
}

/**
 * Render the history list DOM
 */
function renderHistory() {
    if(!historyList) return;
    historyList.innerHTML = history.map(h => `
        <li>
        <div><strong>${escapeHtml(h.key)}</strong> -<span class="meta">${escapeHtml(h.code)} - ${h.keyCode}</span></div>
        <div class="meta">${h.modifiers || 'no modifiers'} . ${h.at}</div>
        </li>
        `).join('');
}

/**
 * Utility: escape HTML to avoid injecting unexpected characters
 */
function escapeHtml(str){
    return str.replace(/[&<>"'`"]/g, s =>({ 
        '&': '&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;'
    })[s]);
}

//Clear history UI and data
clearBtn?.addEventListener('click', () => {
    history.length = 0;
    renderHistory();
});

//Copy history as plain text to clipboard
copyBtn?.addEventListener('click',async () => {
    if(!history.length) return;
    const text = history.map(h => `${h.at} - ${h.key} (${h.code}) ${h.keyCode} ${h.modifiers ? '['+h.modifiers+']' : ''}`).join('\n');
    try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copied!';
        setTimeout(()=> copyBtn.textContent = 'Copy', 1200);
    }catch(err){
        console.warn('Copy failed', err);
    }
});


//Global keydown listener
window.addEventListener('keydown',(event)=> {
    //Prevent default for some keys to avoid page scrolling on Spacebar when necessary
    if(event.code === 'Space') event.preventDefault();

    renderDisplay(event); // update the big cards
    pushHistory(event); // store and render history

});

//Initial render for accessibility
renderHistory();

//

