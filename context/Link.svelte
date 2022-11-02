<script>
import { getContext } from "svelte";
export let to;

const push = getContext("router");

const handleClick = () => {
    push(to);
}
</script>

<a href={to} on:click|preventDefault={handleClick}>
    <slot></slot>
</a>