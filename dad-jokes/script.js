//Get references to the DOM elements
const jokeE1 = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const copyBtn = document.getElementById('copyBtn');
const copyMsg = document.getElementById('copyMsg');

// When the "Get Another Joke" button is clicked, call generateJoke()
jokeBtn.addEventListener('click',generateJoke)


// When the "Copy Joke" button is clicked, copy the current joke
copyBtn.addEventListener('click',copyJokeToClipboard);

//Load an initial joke as soon as the page loads
generateJoke();



//Uisng async await
async function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com/',config);

    const data = await res.json();

    jokeE1.innerHTML = data.joke;
}



/**
 * copies  the current joke to clipboard
 * uses the Clipboard API
 * otherwise, falls back to textarea method
 */
async function copyJokeToClipboard(){
    //Get current joke text
    const text = jokeE1.textContent.trim();

    //If there is no joke yet, show a helpful message
    if (!text || text === '//Joke goes here'){
        copyMsg.textContent = 'There is no joke to copy yet!';
        return;
    }

    try {
        //Preferred method: use Clipboard API
        if(navigator.clipboard && navigator.clipboard.writeText){
            await navigator.clipboard.writeText(text);
    }else {
        //Fallback for older browsers: use a hidden textarea
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
    }

    // / Inform the user that the joke was copied successfully
    copyMsg.textContent = 'Joke copied to clipboard! ';
  } catch (err) {
    // Handle any errors that occur during copy
    copyMsg.textContent = 'Unable to copy the joke.';
    console.error(err);
  }
}