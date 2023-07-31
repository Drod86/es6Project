import './global.css';
import { grab, onClick, render } from './utils/utils.js';

// Render the Inital App Layout
import renderLayout from './views/layout.js';

// Controls
// Routing
import { router, addRoute } from './controllers/router.js';

// Add Page Routing
// Import the layout Elements
const home = '<div>THIS IS THE HOME PAGE VIEW</div>';
const about = '<div>this is the about page view</div>';
renderLayout(home);
const page = grab('.page');
addRoute('', home); // param1 = name of the page, param 2 = the pages markup
addRoute('about', about);
router(page);

// Navigation
const navHome = grab('.home');
const navAbout = grab('.about');
onClick(navHome, () => render(page, home));
onClick(navAbout, () => render(page, about));