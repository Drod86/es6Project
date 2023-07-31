import { grab, render } from '../utils/utils.js';
import header from './components/header.js';

const renderLayout = (homePage) => {
  const BODY = grab('body');
  const app = `
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    ${header(3, 'This template is set up to use ES6 modules and scss in css modules format  to use a component focused approach to build a static web app for github pages. Microverse student linter configurations are in place.')}
    <div class="page">
    ${homePage}
    </div>`;
  render(BODY, app);
};

export default renderLayout;