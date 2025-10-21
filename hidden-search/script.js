// Select DOM elements
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('.clear-btn');

// Toggle the search open/close when clicking the search button
btn.addEventListener('click', () => {
    // If closing, use fade-out animation
    if (search.classList.contains('active')) {
        // Start fade-out animation
        search.classList.remove('active');
        search.classList.add('fade-out');

        // Smoothly fade out the clear button first
        clearBtn.style.opacity = '0';
        clearBtn.style.transition = 'opacity 0.3s ease';
        clearBtn.style.pointerEvents = 'none';

        // Remove fade-out after animation completes
        setTimeout(() => {
            input.value = '';
            search.classList.remove('fade-out');
            search.classList.remove('has-text');
        }, 400);
    } else {
        // When opening
        search.classList.add('active');
        input.focus(); // focus the input automatically

        // ✅ Fix: if input already has text, show clear button again
        if (input.value.trim() !== '') {
            search.classList.add('has-text');
            clearBtn.style.opacity = '1';
            clearBtn.style.pointerEvents = 'all';
        }
    }
});

// Detect typing and toggle clear button 
input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        search.classList.add('has-text');
        clearBtn.style.opacity = '1';
        clearBtn.style.pointerEvents = 'all';
    } else {
        search.classList.remove('has-text');
        clearBtn.style.opacity = '0';
        clearBtn.style.pointerEvents = 'none';
    }
});

// Press Enter → simulate fake search
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = input.value.trim();
        if (query) {
            alert(`Searching for: "${query}"`);
        } else {
            alert('Please type something to search!');
        }
    }
});

// Clear the input when clicking the clear button
clearBtn.addEventListener('click', () => {
    input.value = '';
    search.classList.remove('has-text');
    clearBtn.style.opacity = '0';
    clearBtn.style.pointerEvents = 'none';
    input.focus();
});

// Click outside → trigger fade-out close animation
document.addEventListener('click', (e) => {
    if (!search.contains(e.target)) {
        if (search.classList.contains('active')) {
            search.classList.remove('active');
            search.classList.add('fade-out');

            setTimeout(() => {
                input.value = '';
                search.classList.remove('fade-out');
                search.classList.remove('has-text');
                clearBtn.style.opacity = '0';
                clearBtn.style.pointerEvents = 'none';
            }, 400);
        }
    }
});
