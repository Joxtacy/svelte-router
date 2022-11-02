<script>
function compilePath(path) {
    const keys = [];

    path = path.replace(/:(\w+)/g, (_, key) => {
        keys.push(key);
        return "([^\\/]+)";
    });

    const source = `^(${path})`;

    const regex = new RegExp(source, "i");
    return { regex, keys };
}

function matchRoutes(children, location) {
    const matches = [];


    return matches[0];
}
</script>