Here I have included a recent project I worked on to create a Chrome extension.
It consists of two files: a manifest.json file,
which is the first file Chrome reads when loading an extension,
and a content.js file,
which is the center of my project and contains javascript code.
Here is the explanation how the code works:
Project Overview:
We created a Chrome extension that adds a button to every webpage, allowing users to toggle a dynamic background color effect.
Key Components:

content.js: The main script that runs on web pages.
manifest.json: The configuration file for the extension.


Functionality:

A golden button is added to the top-right corner of every webpage.
Clicking the button toggles a shimmering blue background effect.
The effect alternates between the original page color and the blue effect every 2 seconds.


Technical Highlights:

DOM manipulation to inject the button into web pages.
Use of setInterval for timed color changes.
Dynamic CSS manipulation for the shimmering effect.
Event listeners for user interaction.


User Experience:

The button is designed to be noticeable (golden color, bold black text) yet non-intrusive.
Users have control to start and stop the effect at will.


Learning Outcomes:

JavaScript programming for browser extensions.
Understanding of Chrome extension architecture.
Basics of animation using JavaScript.
Importance of user control in design.


Development Process:

Started with a basic color-changing function.
Evolved to include a dynamic, shimmering effect.
Refined the user interface for better user experience.



This project demonstrates how a relatively simple concept can be turned into an engaging browser extension, combining visual appeal with practical JavaScript and browser API usage.
