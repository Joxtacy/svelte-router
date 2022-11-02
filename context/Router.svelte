<script>
import { setContext, onMount } from "svelte";
import { useState } from "./utils";

const [location, setLocation] = useState(window.location.pathname);

const handlePush = (newLocation) => {
    window.history.pushState({}, "", newLocation);
    setLocation(newLocation);
}

const handleHashChange = () => {
    setLocation(window.location.pathname);
}

onMount(() => {
    window.addEventListener("popstate", handleHashChange);

    return () => window.removeEventListener("popstate", handleHashChange);
});

setContext("router", {
    location,
    push: handlePush,
})
</script>