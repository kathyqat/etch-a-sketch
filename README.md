# etch-a-sketch

This project is for building a browser version of an Etch-A-Sketch. From The Odin Project's (TOP) [Full Stack Development](https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project) course.

Codepen link: https://codepen.io/kathyqat/pen/qBOWzLV

I'm confused as to why TOP stressed that this is a difficult project, when all of the concepts have been seen in previous assigned work. The previous Rock Paper Scissors project showed how to add JS interactivity to buttons and how to work with window prompts. The assigned JS Drum Kit challenge demonstrated how to iterate through elements and attach event listeners and edit classes. I especially found JS Drum Kit to be more difficult than this Etch-A-Sketch.

Thoughts during process: 
1. I was going to remove the class 'hover' for each div, but I thought it would be cleaner code if I didn't keep re-assigning the squares nodelist.
2. I left in the original code to simply draw with black, to show that I did achieve the basic project expectation.
3. I'm very glad that filter: brightness() exists, because otherwise I would have to convert rgb() to hsl() (background-color values are given in rgb() upon inspection). That has some math and conditionals involved, which I'm too lazy to deal with right now.

The first two comments are from my code review with the awesome Kostia Arlouski. It's extremely helpful for me to know standard coding practices, clarification, and how my code is in comparison to other students.