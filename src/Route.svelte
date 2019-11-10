<script>
import { getContext } from "svelte";
import { routeKey } from "./contexts.js";

const routeStore = getContext(routeKey);

export let path = "/";
export let exact = false;
export let component = undefined;

const matchPath = (pathname, options) => {
    const { exact, path } = options;

    if ($routeStore.rendered) {
        return;
    }

    if (!path) {
        $routeStore.rendered = true;
        return {
            path,
            url: pathname,
            isExact: true
        };
    }

    const match = new RegExp(`^${path}`).exec(pathname);

    if (!match) {
        return;
    }

    const url = match[0];
    const isExact = url === pathname;

    if (exact && !isExact) {
        return;
    }

    $routeStore.rendered = true;
    return {
        path,
        url,
        isExact
    };
};

$: match = matchPath($routeStore.path, { exact, path });
</script>

{#if match}
    {#if component}
        <svelte:component this={component}/>
    {:else}
        <slot></slot>
    {/if}
{/if}
