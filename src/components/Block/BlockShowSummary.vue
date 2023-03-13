<template>
  <div class="flex row items-center bordered justify-between q-px-lg q-mt-lg">
    <div class="flex items-center">
      <img src="src/assets/png/cart.png" class="q-mr-md cart" />
      <span @click="showSummary = !showSummary" class="items-center text-subtitle1 flex"
        >{{ showSummary ? 'Hide' : 'Show' }} order summary
        <div class="flex q-ml-xs icon_action_container">
          <ExpandIcon class="q-ml-sm" :class="{ reverse: showSummary }" />
        </div>
      </span>
    </div>
    <span class="text-weight-bold text-subtitle1">€138.00</span>
  </div>
</template>

<script setup>
import { useVModel } from '@vueuse/core';
import CartIcon from '@/assets/svg/cart.svg';
import ExpandIcon from '@/assets/svg/expand.svg';

const props = defineProps({
  showSummary: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:showSummary']);

const showSummary = useVModel(props, 'showSummary', emit);
</script>

<style lang="sass" scoped>
.bordered
  border: $border
  border-radius: $generic-border-radius
  height: 58px

.cart
  width: 20px
  height: auto

.icon_action_container
  cursor: pointer
</style>
