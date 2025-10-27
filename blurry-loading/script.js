const images = [
    'https://images.unsplash.com/photo-1601625463687-25541fb72f62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1719356441574-2093feae362c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
    'https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    'https://images.unsplash.com/photo-1567408332463-0b21dd5f95b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
];

let currentImageIndex = 0;
let load = 0
let int = null;


const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const progressFill = document.querySelector('.progress-bar-fill');

function scale(num, in_min,in_max,out_min,out_max)  {
    return ((num - in_min)*(out_max - out_min)) / (in_max - in_min) + out_min
}
 
function updateUI() {
    loadText.innerText = `${load}%`;
    progressFill.style.width = `${load}%`;
    loadText.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

function startLoading() {
    clearInterval(int);
    load = 0;
    //initial visual state
    loadText.style.opacity = 1;

    //Disable transition so the bar snaps to 0% (no visible 'drag back' animator )
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
    bg.style.filter = 'blur(30px)'
    updateUI();

    //Force reflow so the "no-transition" width 0% is applied immediately
    // eslint-diable-next-line no-unused-expressions
    progressFill.offsetWidth;

    //Restore transition for smooth growing animation
    progressFill.style.transition = 'width 0.3s ease';


    int = setInterval(() => {
        load++;
        if (load >= 100) {
            load = 100;
            updateUI();
            clearInterval(int);

           
            return;
        }
        updateUI();
    },30);
}
// const messages = ['Loading...','Almost there...','Just a moment...'];
// const loadingMessage = document.querySelector('.loading-message');






function blurring(){
    load++ 

    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    //use progressFill (defined) instead of undefined progressBar

    progressFill.style.width = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100,1,0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

    
    
    // Update loading message
    // const messageIndex = Math.floor(load / 34);
    // loadingMessage.textContent = messages[messageIndex]
    
    
    
}


function changeBackground() {
    //pick next image
    currentImageIndex = (currentImageIndex + 1) % images.length
    const url = images[currentImageIndex];

    //show loading message when starting to load new image
    document.querySelector('.loading-message').style.display = 'block';

    //preload the new image so we don't immediately show a cleared 100% state
    const img = new Image();
    img.onload = () => {
         bg.style.backgroundImage = `url(${url})`;
         // restart the loading effect after image is ready
         startLoading();

         
    
    };
    img.onerror = () => {
        // fallback: still restart loader so UI remains consistent
        console.warn('Failed to load image:', url);
        startLoading();
    }
   
    //trigger preload
    img.src = url;
}

//initial run
startLoading();

// Add event listener for background change
document.querySelector('.change-bg').addEventListener('click', changeBackground);
