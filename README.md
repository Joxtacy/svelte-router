# svelte-router

This is a very simple router for single page applications written in Svelte.

## Install
```bash
npm install @joxtacy/svelte-router
```

## Usage

Below is a short example on how to use the router.
```js
<script>
import { Link, Route, Router } from "@joxtacy/svelte-router";
</script>

<Router>
    <Link to={"/"}>
        <h2>Home</h2>
    </Link>
    <Link to={"/foo"}>
        <h2>foo</h2>
    </Link>
    <Route exact path={"/"}>
        <h2>This is home</h2>
    </Route>
    <Route path={"/foo"}>
        <h2>Bar</h2>
    </Route>
</Router>
```

## API

### Router
This component provides context based routing for the `Link` and `Route` component and must be used to wrap those components. It does not take any properties. 

### Route
This component is used to render a component or some markup when its path matches the url. It takes a prop called `path` which is the path that when matched the `Route` will render. 

| Prop      | Required | Default     | Description |
| --------- |:--------:|:-----------:| ----------- |
| path      | no       | `"/"`       |             |
| exact     | no       | `false`     |             |
| component | no       | `undefined` |             |

#### Examples

With general markup:
```js
<Route path={"/some-path"}>
    <!-- Markup goes here -->
</Route>
```

With a Svelte component:
```js
<script>
import SvelteComponent from "./svelte-component.svelte";
</script>

<Route path={"/some-path"} component={SvelteComponent}/>
```

### Link
This component is used to change the url. It takes one prop called `to` and is a relative path to your `window.location.origin`.

| Prop      | Required | Default     | Description                                   |
| --------- |:--------:|:-----------:| --------------------------------------------- |
| to        | no       | `"/"`       | The path relative to `window.location.origin` |

#### Example
```js
<Link to={"/some-path"}>
    <!-- Markup goes here -->
</Link>
```
