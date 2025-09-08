
let timer = 0;
let totalTime = 0;
let countdown = null;// to  store setInterval reference

const hoursInput = document.querySelector('#hoursInput');
const minutesInput = document.querySelector('#minutesInput');
const secondsInput = document.querySelector('#secondsInput');

const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');
const progressCircle = document.querySelector('.progress ')
const progressSvg = document.querySelector('#progressSvg')
const colonEls = document.querySelectorAll('.colon');

const circumference = 2 * Math.PI * 54; // 2pi*r

//Ensure tow-digit format always
function formatValue(val,){
    val = parseInt(val) || 0;
    if(val < 0) val = 0;
    return val < 10 ? "0" + val : String(val);
}



function updateDisplay(time) {
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time % 3600)/60);
    let seconds = time % 60;

    hoursInput.value = formatValue(hours)
    minutesInput.value = formatValue(minutes) ;
    secondsInput.value = formatValue(seconds) ;
}

function updateProgress() {
    let progress = circumference - (timer / totalTime) * circumference;
    progressCircle.style.strokeDashoffset = progress;

    //color change
    let  percent = timer /totalTime;
    let color = percent > 0.5 ? "#28a745" : percent > 0.25 ? "#e0a800":"#c82333"
    
   progressCircle.style.stroke = color;
   hoursInput.style.color = color;
   minutesInput.style.color = color;
   secondsInput.style.color = color;
   colonEls.forEach(c => c.style.color = color);
}

function startCountDown() {
    countdown = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateDisplay(timer);
            updateProgress();
        }else {
            clearInterval(countdown);
            alert("Time's up!");
           resetState();
        }
    },1000)
}

//Increment/decrement time with buttons
// function changeTime(type, value){
//     let input = type === "minutes" ? minutesInput : secondsInput;
//     let newVal = parseInt(input.value) + value;

//     input.value = formatValue(newVal)  ;
    
// }


startBtn.addEventListener('click',()=>{
    const inputHours = parseInt(hoursInput.value) || 0;
   const inputMinutes = parseInt(minutesInput.value) || 0;
   const inputSeconds = parseInt(secondsInput.value) || 0;

   totalTime = inputHours * 3600 + inputMinutes * 60 + inputSeconds;
   timer = totalTime;

   if(timer <= 0){
    alert("Please enter a valid time greater than 0.");
    return;
   }

   
   startBtn.disabled = true;
   pauseBtn.disabled = false;
   resumeBtn.disabled = true;
   resetBtn.disabled = false;
   hoursInput.disabled = true;
   minutesInput.disabled = true;
   secondsInput.disabled = true;


   progressSvg.style.display = "block"; // show circle

   updateProgress();
   startCountDown();

});

pauseBtn.addEventListener('click',()=>{
    clearInterval(countdown);
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
});

resumeBtn.addEventListener('click',()=>{
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    startCountDown();
});

resetBtn.addEventListener('click',()=>{
    clearInterval(countdown);
    resetState();
});

function resetState(){

    timer = 0;
    totalTime = 0;
    
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";

    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;



    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
    resetBtn.disabled = true; 
    progressSvg.style.display = "none"; // hide circle


    //  Reset colors back to black
    [hoursInput, minutesInput, secondsInput].forEach(inp => inp.style.color = "#000");
    colonEls.forEach(c => c.style.color = "#000");
}


   


//Apply formatting while typing
[hoursInput, minutesInput, secondsInput].forEach(input =>{
    input.addEventListener('input',()=>{
        
        let val = input.value.replace(/\D/g,"");
        if(val.length > 2){
            val = val.slice(0,2);
        }
        input.value = formatValue(val);
    })
})

//Initialize display
updateDisplay(timer);




