const routes = {};

const addRoute = (path, page) => routes[path] = page;

const router = (node) => {
  window.addEventListener('popstate', () => {
    let pageName = window.location.hash.substring(1)
    node.innerHTML = routes[pageName];
    }
  )
}

export {router, addRoute, routes};