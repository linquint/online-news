<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />

    <template #nav>
      <nav>
        <div>
          <Icon name="gg:menu-left" size="1.5em" color="var(--text)" />
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/latest">Latest News</NuxtLink>
          <NuxtLink to="/reviews">Reviews</NuxtLink>
        </div>
        
        <div>
          <NuxtLink to="/contact">Contact Us</NuxtLink>
          <input type="checkbox" v-model="darkTheme" />
        </div>
      </nav>
    </template>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  data() {
    return {
      darkTheme: false,
      route: this.$route.name,
    }
  },
  watch: {
    darkTheme(newTheme: boolean) {
      let container = document.querySelector('.container');
      if (container != null) {
        if (newTheme) {
          container.classList.remove('light-theme');
          container.classList.add('dark-theme');
        } else {
          container.classList.remove('dark-theme');
          container.classList.add('light-theme');
        }
      }
    },
  },
}
</script>

<style>
nav {
  display: flex;
  flex: row nowrap;
  justify-content: space-between;
  padding: 1em 0;
  width: clamp(256px, 90%, 1440px);
  margin: auto;
}
nav div {
  display: inherit;
  align-items: center;
  gap: 1.5em;
}
nav a {
  text-decoration: none;
  color: var(--text);
  font-weight: 400;
  font-size: 0.8rem;
  transition: all .2s;
}
nav a.router-link-active {
  color: var(--elements);
}
nav input[type=checkbox] {
  appearance: none;
  background-color: var(--text);
  cursor: pointer;
  width: 3em;
  height: 2em;
  border-radius: 1.5em;
}
nav input[type=checkbox]::before {
  display: block;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--text-invert);
  content: "";
  position: relative;
  top: 0.5em;
  left: 0.5em;
  width: calc(1em);
  height: calc(1em);
  transition: all .2s;
}
nav input[type=checkbox]:checked::before {
  transform: translateX(1em);
}
</style>