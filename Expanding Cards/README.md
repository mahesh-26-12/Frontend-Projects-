Expanding Cards Project

An interactive Expanding Cards UI component built with HTML,CSS and Javascript.
Click or use arrow keys to expand a panel,reveal details,and create a smooth animation effect.

*Features
-> Expanding Panels - Smooth animation using flexbox.
-> Click + Hover Interactions - Click to expand,hover for a subtle zoom effect.
-> Keyboard Navigation - Use <- -> arrow keys to move between panels.
-> Info Overlay - Each panel displays a title and description when expanded.
-> Responsive Design - Works on desktop,tablet, and mobile(panels stack vertically).
-> Smooth Transitions- Text slides in with a delay for a polished look.


Project Structure

Expanding Cards/
|----index.html    # Main HTML file
|----style.css     # Styling (flexbox, transitions,responsiveness)
|----script.js     # Interactivity (click + keyboard navigation)
|----README.md     # Documentation

How It Works
* By default, the first panel is expanded.
* Clicking on another panel collapses the rest and expands the clicked one.
* Use the Arrow Keys:
    * (->) moves to next panel.
    * (<-) moves to previous panel.
* On mobile,panels stack vertically, and the active one grows taller.

Technologies Used
* HTML5 - Structure of the page
* CSS3 - Flexbox,transitions,responsive design
* Javascript - Event listeners, class toggling, keyboard navigation

Future Improvements
* Auto-play (slideshow mode).
* Background music when switching panels.
* Dark/Light theme toggle.
* Replace with user-uploaded images dynamically.