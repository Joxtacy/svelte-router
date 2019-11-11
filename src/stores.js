import { writable } from "svelte/store";

export default writable({
    path: window.location.pathname,
    rendered: false
});

