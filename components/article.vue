<template>
  <div class="article">
    <div class="article-image">
      <img v-if="article.image != null" :src="article.image">
    </div>
    <span class="title">{{ article.title }}</span>
    <span class="content">
      {{ article.body }}
      <span class="time-ago">{{ postedTimeAgo() }}</span>
    </span>
    <div v-if="article.author != null" class="author">
      <img :src="article.author.image">
      <div>
        <span>{{ article.author.name }}</span>
        <span>{{ article.author.position }}</span>
      </div>
    </div>
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
    article: {
      required: true,
      type: Object as () => Article,
    }
  },
  methods: {
    postedTimeAgo() {
      let seconds = Math.round((new Date().getTime() - new Date(this.article.posted).getTime()) / 1000);
      if (seconds > (60 * 60 * 24)) return `${Math.floor(seconds / (60 * 60 * 24))}d ago`;
      if (seconds > (60 * 60)) return `${Math.floor(seconds / (60 * 60))}h ago`;
      if (seconds > 60) return `${Math.floor(seconds / 60)}min ago`;
      return `${seconds}s ago`;
    }
  }
}
</script>

<style scoped>
.article {
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  opacity: 0;
}
.article-image {
  position: relative;
  overflow: hidden;
}
.article-image img {
  object-fit: contain;
  max-width: 100%;
  transform: scale(125%);
}
.title {
  font-size: 1.25rem;
}
.content {
  font-size: 0.8rem;
}
.author {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}
.author > div {
  display: flex;
  flex-direction: column;
  align-self: center;
}
.author > div span:first-of-type {
  font-size: 1rem;
  color: var(--text);
}
.author > div span:last-of-type {
  font-size: 0.8em;
  color: #777;
}
.author img {
  display: table-cell;
  width: 3em;
  height: 3em;
  border-radius: 3em;
  object-fit: cover;
}
.time-ago {
  color: #777;
  font-weight: 600;
}
</style>