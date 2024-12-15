const route = (event) => {

    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href)
    handle_location();

};

const routes = {

    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/posts": "/pages/posts.html",
    "/about": "/pages/about.html"

};

const handle_location = async () => {

    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("content").innerHTML = html;

};

window.onpopstate = handle_location
window.route = route;

handle_location();
