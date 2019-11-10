<script>
import { setContext } from "svelte";
import { writable } from "svelte/store";
import { routeKey } from "./contexts.js";

const routeStore = writable({
    path: "/"
});

setContext(routeKey, routeStore);

const handlePopState = () => {
    $routeStore.path = location.pathname;
}
</script>

<svelte:window on:popstate={handlePopState} />
<slot></slot>
