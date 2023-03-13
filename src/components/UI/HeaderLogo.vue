<template>
  <div class="container_">
    <HeaderLogo />
  </div>
</template>

<script setup>
import HeaderLogo from '@/assets/svg/header_logo.svg';
</script>

<style lang="sass" scoped>
.container_
  width: 1200px
  @media (max-width: 1248px)
    width: 100vw
    padding: 0 1.5rem
</style>
