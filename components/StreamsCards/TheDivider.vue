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
  width: 1220rem;
  height: 40rem;

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
</style>
