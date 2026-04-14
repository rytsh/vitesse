<script lang="ts">
  import { storeNavbar } from '@/lib/store/store.svelte';
  import { addToast } from '@/lib/store/toast.svelte';

  storeNavbar.title = 'Main';
</script>

<div class="p-4">
  <div class="flex flex-col gap-3">
    <span class="text-lg font-medium underline underline-offset-4 decoration-gray-500">Toast demo</span>
    <div class="flex gap-2">
      <button
        class="toast-btn bg-sky-100 text-sky-800 border-sky-200 hover:bg-sky-200"
        onclick={() => addToast('This is an info message', 'info')}
      >
        Info
      </button>
      <button
        class="toast-btn bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200"
        onclick={() => addToast('This is a warning message', 'warn')}
      >
        Warn
      </button>
      <button
        class="toast-btn bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-200"
        onclick={() => addToast('This is an alert message', 'alert')}
      >
        Alert
      </button>
    </div>
    <button
      class="toast-btn bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
      onclick={() => addToast('This one stays until dismissed', 'info', 0)}
    >
      Persistent toast
    </button>
  </div>
</div>

<style>
  @reference "tailwindcss";

  .toast-btn {
    @apply px-3 py-1.5 text-sm border rounded cursor-pointer;
  }
</style>
