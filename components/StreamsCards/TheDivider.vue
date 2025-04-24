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
  width: 100%;
  height: 2.5rem;
  gap: 0.625rem;

  &__bar {
    display: flex;
    width: 100%;
    height: 0.0625rem;
    top: 1.5625rem;
    border-top-width: 0.0625rem;
    background-color: #2f2f36;
  }
  &__more {
    display: flex;
    justify-content: space-between;
    width: 25%;
    align-items: center;
    height: 1.25rem;
    padding-right: 0.625rem;
    padding-left: 0.625rem;
    gap: 0.3125rem;
    top: 0.9375rem;
    left: 34.3631rem;
    background: transparent;
    font-family: Inter;
    font-weight: 600;
    font-size: 0.8125rem;
    line-height: 1.2188rem;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
