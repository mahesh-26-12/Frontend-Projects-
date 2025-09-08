#  Countdown Timer

A simple, interactive Countdown Timer built with HTML, CSS, and JavaScript.  
It allows users to set hours, minutes, and seconds, then start, pause, resume, and reset the timer with a circular progress indicator.

---

##  Features
-  User can input hours, minutes, and seconds (always two-digit formatted).
-  Circular progress bar with color changes:
 
-  Start,  Pause,  Resume, and  Reset buttons.
-  Input values are automatically formatted (max 2 digits, no invalid numbers).
-  Alerts the user when the countdown reaches zero.


---

##  Project Structure
Countdown-Timer
│── index.html # Main HTML structure
│── style.css # Styling for timer and controls
│── script.js # Countdown logic and progress animation
│── README.md # Project documentation

## How It Works 
1.Enter hours, minutes and seconds in the input fields.
2.Click Start to begin the countdown.
3.The circular progress bar animates as the time decreases.
4.Use:
- Pause -> Stops the timer temporarily.
-Resume -> Continues from where you paused.
- Reset -> Clears and resets the timer back to `00:00:00`.
5.When time reaches zero, an alert message is shown and the timer resets. 