const panels = document.querySelectorAll('.panel')
let activeIndex = 0;

//Click to expand
panels.forEach((panel,index) => {
    panel.addEventListener('click',() => {
        setActivePanel(index);
    })
})


//Function to activate a panel
function setActivePanel(index) {
    panels.forEach(panel =>  panel.classList.remove('active'));
    panels[index].classList.add('active');
    activeIndex = index;
}

//Keyboard navigation
document.addEventListener('keydown',(e) => {
    if (e.key === 'ArrowRight'){
        activeIndex = (activeIndex + 1) % panels.length;
        setActivePanel(activeIndex);
    } else if (e.key === 'ArrowLeft'){
        activeIndex = (activeIndex - 1) % panels.length;
        setActivePanel(activeIndex);
    }
})

//Initialize first panel
setActivePanel(0);