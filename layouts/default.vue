<script setup lang="ts"></script>

<template>
  <nav class="menu">
    <NavLeft />
    <NavCenter />
    <NavRigth />
  </nav>
  <aside class="recomended">
    <RecomendedStreams />
    <slot></slot>
  </aside>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  background-color: var(--c-blackNavy);
  height: 2em;
  width: 99vw;
  justify-content: space-between;
  align-items: center;
  padding: 1.3em;
}
.recomended {
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
}
</style>
