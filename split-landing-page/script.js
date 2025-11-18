//Grab the DOM elements we need for interactivity
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// Desktop hover behaviour
// When mouse enters a side, add a class to the container.
// CSS listens for .hover-left and .hover-right to animate widths.
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


//Mobile / touch behaviour
// Add click toggle so tapping a panel expands it.
// stopPropagation prevents the document click handler from immediately closing it.
left.addEventListener('click',(e) => {
    e.stopPropagation()
    container.classList.toggle('hover-left')
    container.classList.remove('hover-right')
})
right.addEventListener('click',(e) => {
    e.stopPropagation()
    container.classList.toggle('hover-right')
    container.classList.remove('hover-left')
})

//close when clicking outside
document.addEventListener('click',()=>{
    container.classList.remove('hover-left','hover-right')
})