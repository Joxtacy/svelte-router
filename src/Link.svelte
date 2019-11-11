<script>
import { getContext } from "svelte";
import { routeKey } from "./contexts.js";

const routeStore = getContext(routeKey);

export let to = "/";
export let replace = false;

const handleClick = (event) => {
    if ($routeStore.path !== to) {
        replace ? history.replaceState({path: to}, "", to) : history.pushState({path: to}, "", to);
    }
    $routeStore.path = to;
    $routeStore.rendered = false;
}
</script>

<a href={to} on:click|preventDefault={handleClick}>
    <slot><em>Some link</em></slot>
</a>

<style>
a {
    color: inherit;
    text-decoration: none;
}
a:visited {
    color: inherit;
}
</style>
