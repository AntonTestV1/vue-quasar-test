<template>
  <div class="flex column justify-center q-py-md q-px-md container_main">
    <img src="src/assets/png/sneakerBig.png" />

    <q-card flat bordered class="flex items-center justify-center column q-my-lg q-py-lg">
      <div class="flex row justify-center q-mb-lg items-center">
        <span class="text-h6">Price:</span>
        <span class="q-mx-md price">{{ currency }}{{ price }}</span>
        <span class="text-h6 bg-primary q-py-sm q-px-lg rounded-borders">-{{ discount }}%</span>
      </div>
      <div class="flex row justify-center items-center bg-primary quantity_container q-py-md">
        <span class="text-h6 q-mr-lg">Quantity:</span>
        <q-btn flat class="button_quantity">
          <q-icon name="remove" />
        </q-btn>
        <span class="text-h6 text-weight-medium q-mx-lg">{{ quantity }}</span>
        <q-btn flat class="button_quantity">
          <q-icon name="add" />
        </q-btn>
      </div>
    </q-card>

    <p class="q-mt-sm q-mb-xl q-mb-md-lg">
      Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.
      <br />
      <br />
      Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci malesuada. Lorem sit sagittis
      vitae nulla id. Mauris ipsum sed sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem. Nullam
      ornare molestie nam id gravida volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In
      massa porttitor urna quis volutpat at.
    </p>

    <div class="flex row items-center justify-between xs-column no-wrap">
      <BlockSecure class="secure" /> <BlockSupport class="q-mt-md q-mt-sm-none support" />
    </div>

    <q-btn
      @click="$emit('submit')"
      class="q-mt-xl text-weight-bold submit-button q-mx-auto button_rounded-2xl button_mobile"
      rounded
      no-caps
      color="dark"
      label="Yes, I want ">
      <template #default>
        <ArrowRightIcon class="q-ml-md arrow-right" />
      </template>
    </q-btn>

    <span class="q-mt-lg q-mx-auto text-subtitle1 text-weight-bold">No, Thanks</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ArrowRightIcon from '@/assets/svg/arrow_right.svg';

const emit = defineEmits(['submit']);

const currency = ref('$');
const price = ref(50);
const quantity = ref(1);
const discount = ref(80);
</script>

<style lang="sass" scoped>
img
  width: 100%
  height: auto

p
  font-size: 1rem
  line-height: 1.75rem

.container_main
  width: 790px
  max-width: 100vw
  @media (max-width: $breakpoint-md-max)
    padding: 1rem

.button_quantity
  width: 2.5rem
  height: 2.5rem
  padding: 0
  border-radius: $generic-border-radius !important
  background-color: white !important
  padding: 0 1.25rem !important

.submit-button
  width: 280px
  height: 76px
  font-size: 1.5rem
  font-weight: 600

.price
  font-size: 1.875rem
  font-weight: 600

.quantity_container
  width: 70%
  min-width: min(311px, 100%)
  border-radius: $generic-border-radius !important

.xs-column
  flex-direction: column
  @media (min-width: $breakpoint-xs-max)
    flex-direction: row !important

.secure
  flex: 4 2 auto
  margin-right: 5%
  @media (max-width: $breakpoint-xs-max)
    width: 100%
    margin-right: 0

.support
  flex: 3 1 auto
  @media (max-width: $breakpoint-xs-max)
    width: 100%
    margin-top: 1.5rem !important
</style>
