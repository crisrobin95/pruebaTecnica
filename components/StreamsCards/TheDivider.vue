<script setup></script>

<template>
  <section class="division">
    <div class="division__bar"></div>
    <button class="division__more">Show More <SvgIconMore /></button>
    <div class="division__bar"></div>
  </section>
</template>

<style lang="scss" scoped>
.division {
  display: flex;
  justify-content: space-evenly;
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
  &__more {
    display: flex;
    background-color: transparent;
    height: auto;
    width: 10%;
    align-items: center;
    gap: 0.5em;
  }
}

@media (max-width: 1800px) {
  .division {
    width: 100%;
  }
}
</style>
