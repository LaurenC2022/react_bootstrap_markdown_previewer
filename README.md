# Free Code Camp - Markdown Previewer solution

This is a solution to the [Build a Markdown Previewer challenge on Free Code Camp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Bootstrap
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Passing state in react to sibling components. React passes data from parent to child. Components should be stand alone and reusable. To use react in this way, I used the following code and pass pieces of state in a way that all the components are reusable.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```jsx
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

to do's

- make site more like the sample, with window resizing/ make views expand and collapse
- remove default textarea resizing option on botton right

- add renderers function and pass as atribute to Markdown. This will fix img overflow problem in markdown:

  - https://github.com/remarkjs/react-markdown/issues/174
  - https://jacobwicks.github.io/2020/06/19/rendering-markdown-and-resizing-images-with-react-markdown.html

- make better readme page

- Previewer should have a minHeight and vary in height depending on the lenght of the input text. Resizing featured mentioned above should cause scroll with overflow-auto when preview is made smaller by user

- change the image of matrix background to moving
- get .md from gitHub static file

- upload app to the internet
- submit to fcc
- add to website

- maximize learning through reading the docs for react, vite, javascript, css, bootstrap, and etc., writing documentation/ commenting code for this project, and writing blog posts

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Lauren Collins](https://www.LaurenCollins.dev)
- Free Code Camp - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
- LinkedIn - []()

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

To prepare for building this project, I took notes on React 18 Bootstrap 5, Javascript, HTML, CSS and Git. I am continiously learning to keep my skills up to date with new trends in technology while I build new projects. I appreciate the learning platforms and instructors found at the links below:

- [Frontend Masters' React 18 Course by Brian Holt](https://frontendmasters.com/courses/complete-react-v8/)
- [Plural Sight's React 18 course by Roland Guijt](https://www.pluralsight.com/courses/react-18-fundamentals)
- Udemy's Bootstrap 5 course by ...
- [Frontend Masters' Complete Intro to Web Development, v3](https://frontendmasters.com/courses/web-development-v3/) - Practice in HTML, CSS, Javascript and more
- [Git In-depth](https://frontendmasters.com/courses/git-in-depth/)
