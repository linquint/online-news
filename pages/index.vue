<template>
  <Title>Home</Title>
  <main>
    <h1>Home</h1>
    <Filters :options="filterOptions" />
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
      articles: [] as Article[],
      firstTime: true,
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
      if (this.firstTime) {
        document.querySelectorAll('.news-area > *')?.forEach((item, id) => {
          item.style.animation = `appear 1s forwards ${id * 0.3 + this.delay}s`;
        });
        document.querySelectorAll('.article-image img')?.forEach((item, id) => {
          item.style.animation = `imageZoomOut 1s forwards ${id * 0.3 + this.delay + 0.25}s`;
        });
        this.firstTime = false;
      } else {
        document.querySelectorAll('.news-area > *, .article-image img')?.forEach((item, id) => {
          this.replayAnimation(item);
        });
      }
    },
    replayAnimation(el: any) {
      el.getAnimations()?.forEach((animation) => {
        animation.cancel();
        animation.play();
      })
    },
  },
  mounted() {
    this.$watch('$route', () => {
      this.delay = 0;
      this.fetchNews(this.$route.query.filter?.toString() ?? "news");
    })

    this.delay = 0.6;
    this.fetchNews();
    document.querySelectorAll('main > *:not(.news-area)')?.forEach((item, id) => {
      item.style.animation = `appear 1s forwards ${id * 0.3}s`;
    })
  },
}
</script>
