# Quiz App

A simple and interactive quiz application built using **HTML,CSS and Javascript**.
It allows users to answer questions one by one, view their score and feedback,and restart the quiz.

## Project Summary

#### Project Structure 
- **index.html** -> Structure of the quiz (questions,answers,result).
- **style.css** -> Styling (layout,colors,font,centering,highlights).
- **script.js** -> Quiz logic(questions,navigation,scoring).

### HTML Key Elements
- `<div id="quiz-container">` -> Holds the quiz UI.
- `<h2 id="question"></h2>` -> Displays current question.
- `<div id="answer-buttons"></div>` -> Holds answer options.
- `<button id="next">Next</button>` -> Navigates to next question.
- `<button id="submit">Submit</button>` -> Submits the quiz at the end.
- `<div id="result">` -> Displays score & feedback.
- `<button id="restart">Restart Quiz</button>` -> Restarts the quiz.

### CSS Key Features
- `.quiz-container` -> Styles quiz layout.
- `.correct` -> Higlights correct answers in **green**.
- `.wrong` -> Higlights wrong answers in **red**.
- `#result` -> Bold,centered result display.


### Javascript Logic
1. **Questions Array** -> Stores quiz data.
2. **Display Question** -> Renders question & answers dynamically.
3. **Answer Selection** -> Marks correct/incorrect & enables next.
4. **Next Button** -> Moves to next question or shows submit.
5. **Submit Button** -> Shows score + feedback.
6. **Restart Button** -> Resets quiz for replay.

### User Flow
1. Start quiz -> First question shown.
2. Select answer -> Next enabled.
3. Continue -> Last question -> Submit.
4. Submit -> score & feedback displayed.
5. Restart -> Play again from beginning. 
