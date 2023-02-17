<template>
  <div class="news-area">
    <Article style="grid-area: 1 / 1 / 3 / 2;" :article="(articles[0] as Article)" />
    <Article style="grid-area: 3 / 1 / 4 / 2;" :article="(articles[1] as Article)" />
    <Article style="grid-area: 1 / 2 / 4 / 3;" :article="(articles[2] as Article)" />
    <Number style="grid-area: 1 / 3;" />
    <Article style="grid-area: 2 / 3 / 4 / 4;" :article="(articles[3] as Article)" />
  </div>
</template>

<script lang="ts">
declare interface Author {
  name: string,
  image: string,
  position: string|null
}

declare interface Article {
  title: string,
  body: string,
  image: string|null,
  posted: string,
  author: Author|null
}

export default {
  props: {
    articles: {
      required: true,
      type: Array,
    }
  },
}
</script>

<style scoped>
.news-area {
  display: grid;
  row-gap: 1.5em;
  column-gap: 3em;
  grid-template: auto / 1fr 2fr 1fr;
  padding: 2em 0;
  width: 100%;
}
.news-area > div:nth-of-type(3n + 2)::before {
  content: "";
  height: 1px;
  width: 100%;
  background-color: var(--text);
  position: relative;
  bottom: 0.25em;
}
</style>