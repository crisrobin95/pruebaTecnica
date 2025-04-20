<script setup lang="ts"></script>
<template>
  <article class="type">
    <span class="type__game">Games <SvgIconGame class="type__icon" /></span>
    <span class="type__micro">IRL <SvgIconMicro class="type__icon" /></span>
    <span class="type__music">Music & Djs <SvgIconMusic /></span>
    <span class="type__creative">Creative <SvgIconCreative /></span>
    <span class="type__esports">Esport <SvgIconPrice /></span>
  </article>
</template>

<style lang="scss" scoped>
.type {
  display: flex;
  width: 100%;
  height: 3.9375rem;
  justify-content: space-between;
  padding: 0.2em;
  margin-top: 1em;

  &__game {
    @include styleBoxes;
  }
  &__icon {
    @include imgBoxes;
  }

  &__micro {
    @include styleBoxes;
  }
  &__music {
    @include styleBoxes;
  }

  &__creative {
    @include styleBoxes;
  }
  &__esports {
    @include styleBoxes;
  }
}
</style>
