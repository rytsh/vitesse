<script lang="ts">
  import { onMount } from "svelte";

  const userLanguages = navigator.languages;

  const worlds = {
    en: "Hello, World!",
    tr: "Ah yalan dünya..",
  };

  let hi = worlds["en"];

  if (userLanguages.includes("tr")) {
    hi = worlds["tr"];
  }

  let mounted = false;

  const typewriter = (node, { speed = 200 }) => {
    const text = hi;
    const duration = text.length * speed;

    return {
      duration,
      tick: (t) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  };

  onMount(() => {
    mounted = true;
  });
</script>

<div class="middle">
  <div>
    {#if mounted}
      <span class="typewriter text-gray-800" in:typewriter />
    {/if}
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap");

  .middle {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  .typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid tomato; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    font-family: "Waiting for the Sunrise", cursive;
    font-size: 72pt;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: tomato;
    }
  }
  // .typewriter {
  //   animation: blink-caret 0.75s step-end infinite;
  //   border-right: 0.1em solid var(--red); /* The typwriter cursor */
  //   font-family: "Waiting for the Sunrise", cursive;
  //   font-size: 72pt;
  // }

  // /* The typewriter cursor effect */
  // @keyframes blink-caret {
  //   from,
  //   to {
  //     border-color: transparent;
  //   }
  //   50% {
  //     border-color: var(--red);
  //   }
  // }
</style>
