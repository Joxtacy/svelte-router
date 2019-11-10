<script>
import { getContext } from "svelte";
import { routeKey } from "./contexts.js";

const routeStore = getContext(routeKey);

export let to = "/";
export let replace = false;

const handleClick = (event) => {
    replace ? history.replaceState({}, "", to) : history.pushState({}, "", to);
    $routeStore.path = to;
    $routeStore.rendered = false;
}
</script>

<a href={to} on:click|preventDefault={handleClick}>
    <slot><em>Some link</em></slot>
</a>

