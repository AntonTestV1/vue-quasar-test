<template>
  <div class="flex column">
    <p class="text-h5 text-dark text-weight-bold q-my-sm q-mt-lg">Billing Address</p>
    <p class="text-accent">Specify the address for your payment option</p>
    <q-radio
      v-model="sameAsShipping"
      val="true"
      label="Same as shipping address"
      color="dark"
      @update:model-value="setAddress(false)" />
    <q-radio v-model="sameAsShipping" val="false" label="Use a different billing address" color="dark" class="q-mb-lg" />

    <FormAddress v-if="sameAsShipping === 'false'" @update:addressData="setAddress" ref="address" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sameAsShipping = ref('true');

const emit = defineEmits(['update:address']);
function setAddress(data) {
  emit('update:address', data);
}

const address = ref(null);
async function validate() {
  if (sameAsShipping.value === 'true') {
    return true;
  }
  return address.value.validate();
}
defineExpose({
  validate,
});
</script>

<style scoped lang="sass">
.q-radio
  margin-left: -0.6rem
</style>
