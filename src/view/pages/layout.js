
const renderLayout = (homePage) => {
  const BODY = document.querySelector('body');
  const app = `
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    <div class="page">
    ${homePage}
    </div>`
  BODY.innerHTML = app;
}

export default renderLayout;