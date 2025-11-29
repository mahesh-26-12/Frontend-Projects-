// Select all labels inside .form-control
const labels = document.querySelectorAll('.form-control label')


// Create wave animation by splitting letters
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

// Show/Hide password functionality
const passwordField = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');

toggleBtn.addEventListener('click',() => {

    //Toggle password visibility 
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.textContent = '🙈'; // change icon 
    } else {
        passwordField.type = 'password';
        toggleBtn.textContent = '👁'; // change icon
    }
});