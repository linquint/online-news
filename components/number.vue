<template>
  <div class="daily-number">
    <span class="title">number of the day</span>
    <span class="number">$80,000</span>
    <span class="explanation">was earned at a charity auction in Paris. The money raised goes to children's hospitals.</span>
  </div>
</template>

<style scoped>
.daily-number {
  background-color: var(--elements);
  padding: 1em;
  box-sizing: border-box;
  color: var(--isabelline);
  display: flex;
  flex-direction: column;
  opacity: 0;
  justify-content: space-evenly;
}
.title {
  text-transform: uppercase;
  font-size: 0.9rem;
  display: inline-flex;
  justify-content: space-between;
}
.title::after {
  content: "";
  height: 1px;
  background-color: var(--isabelline);
  width: calc(100% - 140px);
  display: block;
  align-self: center;
  margin-right: -1em;
}
.number {
  font-size: 2.5rem;
}
.explanation {
  font-size: 0.9rem;
}
</style>