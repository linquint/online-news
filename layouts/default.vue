<template>
  <div class="container light-theme">
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

<style>
:root {
  --isabelline: #f9f4ec;
  --bright-gray: #eaeaea;
  --electric-brown: #b0695c;
  --charleston-green: #2a2a2a;
  --electric-brown-pastel: rgba(200,165,158,1);
}
.dark-theme {
  --text: var(--bright-gray);
  --text-invert: var(--charleston-green);
  --elements: var(--electric-brown);
  --background: linear-gradient(60deg, rgba(80,62,56,1) 0%, rgba(42,42,42,1) 20%, rgba(42,42,42,1) 75%, rgba(80,62,56,1) 100%);
  --background-compatible: var(--charleston-green);
}
.light-theme {
  --text: var(--charleston-green);
  --text-invert: var(--bright-gray);
  --elements: var(--electric-brown);
  --background: linear-gradient(60deg, rgba(215,180,173,1) 0%, rgba(249,244,236,1) 20%, rgba(249,244,236,1) 60%, rgba(215,180,173,1) 100%);
  --background-compatible: var(--isabelline);
}
.container {
  background: var(--background-compatible);
  background: var(--background);
  min-height: 100vh;
}
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  transition: all .2s;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
main {
  width: clamp(256px, 90%, 1440px);
  margin: 0 auto;
  color: var(--text);
}
nav *:not(div) {
  opacity: 0;
}
main > *:not(.news-area) {
  opacity: 0;
}
h1 {
  font-weight: 400;
  font-size: 2.5rem;
}
@keyframes appear {
  to { opacity: 100%; }
}
</style>