<script lang="ts">
  import { storeNavbar } from "@/store/store";
  import update from "immutability-helper";

  storeNavbar.update((v) => update(v, { title: { $set: "Test" } }));
</script>

<h1>Test</h1>
