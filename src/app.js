import './global.css';
// Import the layout Elements
import renderLayout from './views/layout.js';

// Add Page Routing
import { router, addRoute } from './controllers/router.js';

const home = '<div>THIS IS THE HOME PAGE VIEW</div>';
const about = '<div>this is the about page view</div>';

// Render the Inital App Layout
renderLayout(home);

addRoute('', home); // param1 = name of the page, param 2 = the pages markup
addRoute('about', about);
router();

// Controls

// Grab Elements
const navHome = document.querySelector('.home');
const navAbout = document.querySelector('.about');
const page = document.querySelector('.page');

// Add Listeners
navHome.addEventListener('click', () => { page.innerHTML = home; });
navAbout.addEventListener('click', () => { page.innerHTML = about; });
