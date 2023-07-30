'use strict';
import './global.css';
// Import the layout Elements
import renderLayout from './view/pages/layout';
const home = `<div>THIS IS THE HOME PAGE VIEW</div>`
const about = `<div>this is the about page view</div>`

// Render the App
renderLayout(home);

// Grab Elements
const navHome = document.querySelector('.home');
const navAbout = document.querySelector('.about');
const page = document.querySelector('.page');

// Add Listeners
navHome.addEventListener('click', () => page.innerHTML = home);
navAbout.addEventListener('click', () => page.innerHTML = about);

// Add Page Routing
import {router, addRoute} from './controller/routes';
addRoute('', home);
addRoute('about', about);
router(page);
