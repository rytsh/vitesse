<script lang="ts">
  import { onMount } from "svelte";
  // import type { ComponentType } from "svelte";
  type RouteComponent = typeof MainPage;
  import Router from "svelte-spa-router";

  import { storeNavbar } from "@/store/store";
  import { addToast } from "@/store/toast";

  import Sidebar from "@/components/Sidebar.svelte";
  import Navbar from "@/components/Navbar.svelte";
  import Toast from "./components/Toast.svelte";

  import MainPage from "@/pages/Main.svelte";
  import TestPage from "@/pages/Test.svelte";
  import NotFound from "./pages/NotFound.svelte";

  let layout: HTMLElement;
  let mounted = false;

  const routes = new Map<string | RegExp, RouteComponent>();
  routes.set("/test", TestPage);
  routes.set("/", MainPage);
  routes.set("/*", NotFound);

  onMount(async () => {
    mounted = true;
  });
</script>

<Toast />

<div
  bind:this={layout}
  class={[
    "grid grid-flow-col h-full w-full relative overflow-y-auto bg-slate-100",
    $storeNavbar.sideBarOpen ? "grid-cols-[8rem]" : "grid-cols-[0]",
  ]}
>
  {#if !mounted}
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"
      ></div>
    </div>
  {:else}
    <Sidebar />
    <div class="h-full w-full grid grid-rows-[1.75rem]">
      <Navbar />
      <Router {routes} />
    </div>
  {/if}
</div>
