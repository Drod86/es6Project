const pageContainer = document.querySelector('.page');

const routes = {};

const addRoute = (path, page) => { routes[path] = page; };

const router = () => {
  window.addEventListener('popstate', () => {
    const pageName = window.location.hash.substring(1);
    pageContainer.innerHTML = routes[pageName];
  });
};

export { router, addRoute, routes };