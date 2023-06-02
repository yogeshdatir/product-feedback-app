# Frontend Mentor - Product feedback app solution

This is a solution to the [Product feedback app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete product feedback requests
- Receive form validations when trying to create/edit feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a product feedback request
- Upvote product feedback requests
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Links

- Solution URL: [Gitub repo](https://github.com/yogeshdatir/product-feedback-app)
- Live Site URL: [Demo on netlify](https://product-feedback-app-yd.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Context API](https://react.dev/learn/passing-data-deeply-with-context) - One of the React APIs for data sharing among components
- [Emotion](https://emotion.sh/docs/introduction) - For styles
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Node](https://nodejs.org/en) - Backend environment
- [ExpressJS](https://expressjs.com/) - Web framework for Node


### What I learned

1. There is no way to prevent a component that uses a portion of Context value from re-rendering, even if the used piece of data hasn’t changed, even with useMemo hook.
2. Trying to avoid rerenders caused by context state updates makes the codebase complex exponentially over the time.
3. You can always refactor a small project to start using Redux later. There is no point in over-engineering a project that doesn’t need to be.
4. Context and Redux are not alternative to each other. They can be used together.
5. When to use redux:  
    a. The app is complex and components in the app are interconnected through shared states, changing the shared states frequently.  
    b. Redux can help you manage your application's state in a predictable and efficient way. So if state changes are complex and essential as they are almost all the time, redux should be considered seriously.  
    c. The app has a medium-to-large codebase with several React developers working on it.  
6. Nested component rendering

### Continued development

- See hover states for all interactive elements on the page
- Receive form validations when trying to create/edit feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- I would be using this project to practise reafactoring a project to start using Redux.
- Upvote feature needs to be added.
- Possible ways to omptimize context renders. 
- Add proper loaders.

### Useful resources

- [usehooks-ts](https://usehooks-ts.com/react-hook/use-on-click-outside) - Useful hooks for re-use
- [Linting, husky, prettier setup doc](https://github.com/yogeshdatir/product-feedback-app/blob/main/docs/Eslint-airbnb%20setup.md) 
