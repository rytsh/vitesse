<script>
import Router from "svelte-spa-router";
import Home from "./components/Home.svelte";

const routes = {
  "/": Home,
};

</script>

<Router routes="{routes}" />
