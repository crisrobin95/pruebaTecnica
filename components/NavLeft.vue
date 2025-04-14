<script setup lang="ts"></script>

<template>
  <div class="nav">
    <SvgIconMain class="nav__icon" />
    <h1 class="nav__title">MIDTUCH</h1>
    <SvgIconPoints class="nav__points" />
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;

  &__points {
    margin-left: 0.9em;
    width: 1em;
    height: 1em;
    cursor: pointer;
  }

  &__icon {
    width: 1.75em;
    height: 1.75em;
    margin-right: 1em;
  }
  &__title {
    font-family: Roobert;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 0.97em;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;
  }
}
</style>
