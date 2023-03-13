<template>
  <div>
    <q-card
      flat
      bordered
      class="bg-primary q-mt-md padding_relative card_warranty_container flex column justify-center">
      <div>
        <p class="text-h6 text-dark text-weight-bold q-my-sm">
          Lifetime Warranty<span class="mobile-tablet_only">🔥</span>
        </p>
        <p class="q-my-sm card_warranty text-subtitle1">
          Add a lifetime warranty & enjoy peace of mind for life with your dream collections order for just $4.99
        </p>
      </div>
      <q-btn class="q-mt-sm text-weight-medium q-px-md add-button" rounded color="dark" no-caps label="Add-$4.99" />
    </q-card>

    <q-card flat bordered class="q-my-lg q-pa-lg q-pa-xs-md">
      <span class="text-h6 text-dark text-weight-bold q-my-md">Express Checkout</span>
      <div class="flex row justify-between q-mt-sm xxs-column">
        <q-btn class="q-my-md text-weight-bold card_button" rounded color="purple"><ShopPayIcon /></q-btn>
        <q-btn class="q-my-md text-weight-bold card_button card_button__middle" rounded color="warning"
          ><PayPalIcon
        /></q-btn>
        <q-btn class="q-my-md text-weight-bold card_button" rounded color="black"><GPayIcon /></q-btn>
      </div>
    </q-card>
  </div>
</template>
<script setup>
import PayPalIcon from '@/assets/svg/PayPal.svg';
import GPayIcon from '@/assets/svg/GPay.svg';
import ShopPayIcon from '@/assets/svg/shopPay.svg';
</script>

<style lang="sass" scoped>
.card_warranty
  line-height: 1.625rem

.card_warranty_container
  @media (max-width: $breakpoint-xs-max)
    margin-top: 1rem !important
  @media (min-width: $breakpoint-sm-min) and (max-width: $breakpoint-sm-max)
    flex-direction: row
    flex-wrap: nowrap
    align-items: center
    margin-left: 0.5rem

.q-card--bordered
  border-color: #E0E7F0

.card_button
  width: 150px
  height: 50px

  &__middle
    margin: auto 0.5rem
    @media (max-width: 390px)
      margin: auto 0

.add-button
  width: 115px
  height: 36px
  @media (min-width: $breakpoint-sm-min) and (max-width: $breakpoint-sm-max)
    width: 116px
    height: 60px
    margin-left: 1rem
  @media (max-width: $breakpoint-sm-min)
    width: 150px
    height: 52px

.xxs-column
  @media (max-width: 390px)
    flex-direction: column
    //align-items: center
</style>
