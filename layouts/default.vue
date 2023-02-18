<template>
  <div class="container light-theme">
    <div class="curtain"></div>
    <slot name="nav" />
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    const nav = document.querySelectorAll('nav *:not(div)');
    const main = document.querySelectorAll('main > *');
    if (nav != null) {
      nav.forEach((item, id) => {
        item.style.animation = `appear 1s forwards ${id * 0.3}s`;
      })
    }
    if (main != null) {
      main.forEach((item, id) => {
        item.style.animation = `appear 1s forwards ${id * 0.3}s`;
      })
    }
  },
}
</script>