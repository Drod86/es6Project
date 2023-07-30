'use strict';
import heading from "./components/heading.js";
console.log('Hello world!');
const BODY = document.querySelector('body');
// const heading = document.createElement('h1');
BODY.innerHTML = heading(1,'I Hope this works');
BODY.appendChild(heading);