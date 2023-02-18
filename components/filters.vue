<template>
  <div class="filter-chips">
    <button 
      class="chip" v-for="i in options.length"
      :class="((i - 1) == selected) ? 'active' : ''"
      @click="handleClick(i - 1)"
    >
      {{ options[i - 1] }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    options: {
      required: true,
      type: Object
    },
    path: {
      required: false,
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: -1,
    }
  },
  methods: {
    handleClick(id: number) {
      id = (id == this.selected) ? -1 : id;
      this.selected = id;
      if (id == -1) this.$router.push(`/`);
      else this.$router.push(`${this.path}/?filter=${this.options[id].toLowerCase()}`);
    },
    findFilterID(str: String) {
      let filterID = -1;
      this.options.forEach((name, id) => {
        if (name.toLowerCase() === str) {
          filterID = id;
          return;
        }
      });
      return filterID;
    },
  },
  mounted() {
    this.selected = this.findFilterID(this.$route.query.filter?.toString()) ?? -1;
  }
}
</script>

<style scoped>
.filter-chips {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  overflow-x: scroll;
  scrollbar-width: none;
  transform: translateX(-1em);
}
.filter-chips::-webkit-scrollbar { 
  display: none; 
}
.chip {
  border: 2px solid var(--text);
  color: var(--text);
  font-weight: 400;
  background-color: transparent;
  font-size: 1rem;
  padding: 0.25em 0.75em;
  border-radius: 2em;
  cursor: pointer;
  transition: all .2s;
}
.chip:hover {
  border: 2px solid var(--elements);
}
.active {
  color: var(--elements);
  border: 2px solid var(--elements);
}
</style>