<script lang="ts">
  import { removeToast, storeToast } from '@/lib/store/toast.svelte';
  import { Info, TriangleAlert, CircleAlert, X } from 'lucide-svelte';

  const close = (id: number) => {
    removeToast(id);
  };

  const icons = { info: Info, warn: TriangleAlert, alert: CircleAlert };

  const customSlide = (_: HTMLElement, { duration }: { duration: number }) => {
    return {
      duration,
      css: (t: number) => `opacity: ${t}; transform: translateY(${(1 - t) * -8}px)`
    };
  };
</script>

<div class="fixed bottom-0 right-0 z-50 flex flex-col gap-1.5 w-80 p-2">
  {#each storeToast as toast (toast.id)}
    {@const Icon = icons[toast.type]}
    <div
      class={[
        'toast-item',
        toast.type,
      ]}
      transition:customSlide={{ duration: 150 }}
    >
      <Icon size={15} strokeWidth={2} />
      <span class="flex-1 truncate">{toast.message}</span>
      <button
        class="close-btn"
        onclick={() => close(toast.id)}
      >
        <X size={13} strokeWidth={2} />
      </button>
    </div>
  {/each}
</div>

<style>
  @reference "tailwindcss";

  .toast-item {
    @apply flex items-center gap-2 px-2.5 py-2 text-xs border rounded;
  }

  .close-btn {
    @apply flex-shrink-0 opacity-40 hover:opacity-100 cursor-pointer;
  }

  .info {
    @apply bg-sky-50 text-sky-800 border-sky-200;
  }

  .warn {
    @apply bg-amber-50 text-amber-800 border-amber-200;
  }

  .alert {
    @apply bg-rose-50 text-rose-800 border-rose-200;
  }
</style>
