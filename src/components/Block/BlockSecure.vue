<template>
  <q-card flat bordered class="padding_relative card bg-white">
    <div class="flew column items-center">
      <div class="flex items-center justify-between no-wrap row caption-block">
        <LockIcon class="q-mb-lg" />
        <p class="q-ml-sm text-subtitle2 text-center">
          Guaranteed <span class="text-weight-bold">Safe</span> & <span class="text-weight-bold">Secure</span> Checkout
        </p>
      </div>
      <div class="flex justify-between items-center no-wrap icons-block">
        <span class="border q-mx-sm q-mx-xs-xs flex items-center justify-center" v-for="item in elements" :key="item.name" :class="`bg-${item.color}`">
          <component :is="item.icon" />
        </span>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import LockIcon from '@/assets/svg/lock.svg';

import MasterCardIcon from '@/assets/svg/masterCard.svg';
import VisaIcon from '@/assets/svg/visa.svg';
import PaypalIcon from '@/assets/svg/PayPalLogo.svg';
import AmexIcon from '@/assets/svg/amex.svg';
import JCBIcon from '@/assets/svg/jcb.svg';
import CoinIcon from '@/assets/svg/coin.svg';

const elements = [
  {
    icon: MasterCardIcon,
    name: 'MasterCard',
    color: 'white'
  },
  {
    icon: VisaIcon,
    name: 'Visa',
    color: 'white'
  },
  {
    icon: PaypalIcon,
    name: 'PayPal',
    color: 'white'
  },
  {
    icon: AmexIcon,
    name: 'Amex',
    color: 'blue'
  },
  {
    icon: JCBIcon,
    name: 'JCB',
    color: 'white',
  },
  {
    icon: CoinIcon,
    name: 'Coin',
    color: 'white'
  },
];

</script>

<style lang="sass" scoped>
.border
  border: $border
  border-radius: 4.5px
  width: 2.5rem
  height: 1.5rem

.card
  height: 140px
  @media (min-width: 1015px)
    padding: 1.85rem !important

.caption-block
  @media (min-width: 622px)
    transform: translateY(-8px)
    margin-bottom: 0.125rem


</style>
