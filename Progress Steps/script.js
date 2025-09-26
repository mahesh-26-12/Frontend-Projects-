const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const labelsContainer = document.getElementById('labels')
const message = document.getElementById('message')

let currentActive = 1

// Generate labels dynamically from data label
circles.forEach(circle => {
    const span = document.createElement('span')
    span.textContent = circle.getAttribute('data-label')
    labelsContainer.appendChild(span)
})



next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

reset.addEventListener('click',()=>{
    currentActive = 1
    update()
    message.textContent = ''

})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
        next.disabled = false
        message.textContent = ''
    } else if(currentActive === circles.length) {
        next.disabled = true
        prev.disabled = false
        message.textContent = " You have completed all the steps!"
    } else {
        prev.disabled = false
        next.disabled = false
        message.textContent = ''
    }
}