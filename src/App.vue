<template>
  <q-layout class="flex row justify-center" view="hHh LpR fFf">
    <q-header class="flex items-center justify-center row bg-dark header">
      <HeaderLogo />
    </q-header>
    <q-page-container>
      <FlowStepper />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style lang="sass" scoped>
.header
  height: 58px
</style>
