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
    }
  },
  watch: {
    darkTheme(newTheme: boolean) {
      let container = document.querySelector('.container');
      let curtain = document.querySelector('.curtain');
      if (container != null && curtain != null) {
        if (newTheme) {
          curtain.style.animation = "backgroundEnter .75s forwards";
          container.classList.add('dark-theme');
        } else {
          curtain.style.animation = "backgroundLeave .75s forwards";
          container.classList.remove('dark-theme');
        }
      }
    },
  }
}
</script>