<template>
  <Title>Reviews</Title>
  <main>
    <h1>Reviews</h1>
  </main>
</template>

<script lang="ts">
export default {
  mounted() {
    const objects = document.querySelectorAll('main > *');
    if (objects != null) {
      objects.forEach((item, id) => {
        item.style.animation = `appear 1s forwards ${id * 0.3}s`;
      })
    }
  },
}
</script>