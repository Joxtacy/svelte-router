<script>
import routeStore from "./stores.js";

const handlePopState = () => {
    $routeStore.path = location.pathname;
    $routeStore.rendered = false;
}
</script>

<svelte:window on:popstate={handlePopState} />
<slot></slot>
