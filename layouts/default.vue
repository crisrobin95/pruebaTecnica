<script setup lang="ts"></script>

<template>
  <nav class="menu">
    <NavLeft />
    <NavCenter />
    <NavRigth />
  </nav>
  <slot></slot>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  background-color: var(--c-blackNavy);
  height: 2em;
  justify-content: space-between;
  align-items: center;
  padding: 1.3em;
}
</style>
