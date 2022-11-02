import routeStore from "./stores.js";

export const navigateTo = (to, replace) => {
    if ($routeStore.path !== to) {
        replace ? history.replaceState({path: to}, "", to) : history.pushState({path: to}, "", to);
    }
    $routeStore.path = to;
    $routeStore.rendered = false;
}

