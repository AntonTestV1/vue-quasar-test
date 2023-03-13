<template>
  <div>
    <p class="text-h5 text-dark text-weight-bold q-mb-lg q-mt-lg">Shipping Address</p>
    <FormAddress @update:addressData="setAddress" ref="address" />
  </div>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['update:address']);

function setAddress(data) {
  emit('update:address', data);
}

const address = ref(null);
async function validate() {
  return address.value.validate();
}
defineExpose({
  validate,
})
</script>
