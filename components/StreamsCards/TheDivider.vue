<script setup></script>

<template>
  <section class="division">
    <div class="division__bar"></div>
    <button>Show More</button>
    <div class="division__bar"></div>
  </section>
</template>

<style lang="scss" scoped>
.division {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 2.5em;
  margin-top: 1em;
  &__bar {
    width: 33.59em;
    height: 0.06em;
    top: 1.56em;
    border-top-width: 0.06em;
    background-color: #2f2f36;
  }
}

@media (max-width: 1800px) {
  .division {
    width: 100%;
  }
}
</style>
