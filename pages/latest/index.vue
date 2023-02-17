<template>
  <Title>Latest News</Title>
  <main>
    <h1>Latest News</h1>
    <Filters :options="filterOptions" path="/latest" />
    <span v-if="articles.length == 0">0 articles.</span>
    <Articles v-else :articles="articles" />
  </main>
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
  data() {
    return {
      filterOptions: ["Politics", "Business", "Tech", "Arts", "Science", "Health", "Sports"],
      delay: 0,
      articles: [] as Article[]
    }
  },
  methods: {
    async fetchNews(category: String = "news") {
      await fetch(`/categories/${category}.json`).then(async (res) => {
        if (res.ok) {
          let data: Article[] = await res.json();
          this.articles = data;
        }
      }).finally(() => {
        this.applyAnimation();
      });
    },
    applyAnimation() {
      const objects = document.querySelectorAll('.news-area > *');
      if (objects != null) {
        objects.forEach((item, id) => {
          item.style.animation = `appear 1s forwards ${id * 0.3 + this.delay}s`;
        })
      }
    },
  },
  mounted() {
    this.$watch('$route', () => {
      console.log(this.$route.query);
      let filter: string = this.$route.query.filter?.toString() ?? "news";
      this.delay = 0;
      this.fetchNews(filter);
    })

    this.delay = 0.6;
    this.fetchNews();
    const objects = document.querySelectorAll('main > *:not(.news-area)');
    if (objects != null) {
      objects.forEach((item, id) => {
        item.style.animation = `appear 1s forwards ${id * 0.3}s`;
      })
    }
  },
}
</script>