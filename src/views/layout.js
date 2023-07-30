import header from './components/header.js';

const renderLayout = (homePage) => {
  const BODY = document.querySelector('body');
  const app = `
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    ${header(1, 'This better work!')}
    <div class="page">
    ${homePage}
    </div>`;
  BODY.innerHTML = app;
};

export default renderLayout;