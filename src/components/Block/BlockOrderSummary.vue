<template>
  <q-card flat bordered class="q-mb-lg padding_relative">
    <span class="block q-mx-auto text-subtitle1 text-dark q-py-sm q-mb-xl text-center heading_border"
      >Order Summary #26450</span
    >
    <div v-for="i in 3" class="flex row no-wrap q-my-lg items-center">
      <img :src="`src/assets/png/sneakers${i}.png`" class="summary__image" />
      <div class="flex column q-mx-md">
        <span class="text-weight-medium text-subtitle1">Nike sneakers</span>
        <span>x1</span>
      </div>
      <span class="q-ml-auto text-weight-medium text-subtitle1">${{ price.toFixed(2) }}</span>
    </div>

    <template v-if="!hideDiscount">
      <div class="bg-white q-pa-sm q-mb-lg flex row justify-between items-center discount-block desktop_only">
        <span class="text-subtitle2 q-mx-md font-weight-normal text-disabled">Discount code</span>
        <q-btn class="text-weight-bold button" rounded color="dark" label="Apply" />
      </div>

      <div class="q-mb-lg flex row justify-between items-center mobile-tablet_only xss-column">
        <div class="q-px-sm bg-white discount-block__mobile flex items-center q-mr-lg">
          <span class="text-subtitle1 q-mx-md font-weight-normal text-disabled">Discount code</span>
        </div>
        <q-btn class="text-weight-bold button" rounded color="dark" label="Apply" />
      </div>
    </template>

    <div class="flex row justify-between q-mb-md text-subtitle1">
      <span>Subtotal</span>
      <span>{{ (price * 3).toFixed(2) }}</span>
    </div>
    <div class="flex row justify-between q-mb-md text-subtitle1">
      <span>Shipping</span>
      <span>Free</span>
    </div>
    <q-separator />
    <div class="flex row justify-between q-mt-lg text-subtitle1 text-weight-medium">
      <span>Total</span>
      <span>{{ (price * 3).toFixed(2) }}</span>
    </div>
  </q-card>
</template>

<script setup>
const props = defineProps({
  hideDiscount: {
    type: Boolean,
    default: false,
  },
});

const price = 120.9;
</script>

<style lang="sass" scoped>
.heading_border
  border: $border
  border-radius: $generic-border-radius
  //width

.summary__image
  width: 4.375rem
  height: 4.375rem

.discount-block
  border-radius: $generic-border-radius !important
  &__mobile
    @extend .discount-block
    height: 52px
    width: auto
    flex-grow: 2
    @media (max-width: 390px)
      margin-right: 0 !important
      width: 100% !important

.button
  padding: 0.875rem 2.5rem
  width: 120px
  border-radius: $generic-border-radius
  @media (min-width: $breakpoint-sm-min) and (max-width: $breakpoint-sm-max)
    width: 160px
    flex-grow: 0
  @media (max-width: 390px)
    margin-top: 0.5rem

.xss-column
  @media (max-width: 390px)
    flex-direction: column !important
    align-items: start
</style>
