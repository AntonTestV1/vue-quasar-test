<template>
  <q-form ref="form">
    <span class="text-subtitle2 text-dark">Country of Origin <span class="text-red">*</span></span>
    <q-select
      :options="countries"
      label="Select your country"
      standout="bg-primary text-accent"
      class="q-mt-sm"
      v-model="data.country"
      :rules="[(val) => (val && val.length > 0) || 'Country is required']">
      <template v-slot:prepend>
        <MapIcon class="q-ml-sm" />
      </template>
    </q-select>

    <div class="flex row justify-between q-mt-md q-mb-md">
      <div class="col-xs-12 col-sm-6 q-pr-xs-none q-pr-sm">
        <span class="text-subtitle2 text-dark">First Name <span class="text-red">*</span></span>
        <q-input
          placeholder="Enter your first name"
          standout="bg-primary text-accent"
          class="q-mt-sm"
          v-model="data.firstName"
          :rules="[(val) => (val && val.length > 0) || 'Enter a valid first name']">
          <template v-slot:prepend>
            <PersonIcon class="q-ml-sm" />
          </template>
        </q-input>
      </div>

      <div class="col-xs-12 col-sm-6 q-pl-xs-none q-pl-sm q-mt-xs-md">
        <span class="text-subtitle2 text-dark q-mt-lg q-mb-md xs-col-12 col-6 ">Last Name <span class="text-red">*</span></span>
        <q-input
          placeholder="Enter your last name"
          standout="bg-primary text-accent"
          class="q-mt-sm"
          v-model="data.lastName"
          :rules="[(val) => (val && val.length > 0) || 'Enter a valid last name']">
          <template v-slot:prepend>
            <PersonIcon class="q-ml-sm" />
          </template>
        </q-input>
      </div>
    </div>

    <span class="text-subtitle2 text-dark">Address <span class="text-red">*</span></span>
    <q-input
      placeholder="Enter your address"
      standout="bg-primary text-accent"
      class="q-mt-sm"
      v-model="data.address"
      :rules="[(val) => (val && val.length > 0) || 'Enter a valid address']">
      <template v-slot:prepend>
        <AddressIcon class="q-ml-sm" />
      </template>
    </q-input>

    <div class="flex row justify-between q-mt-md">
      <div class="col-xs-12 col-sm-6 q-pr-xs-none q-pr-sm ">
        <span class="text-subtitle2 text-dark">Apartment (optional)</span>
        <q-input
          placeholder="Enter your apartment"
          standout="bg-primary text-accent"
          class="q-mt-sm"
          v-model="data.apartment">
          <template v-slot:prepend>
            <BuildingIcon class="q-ml-sm" />
          </template>
        </q-input>
      </div>

      <div class="col-xs-12 col-sm-6 q-pl-xs-none q-pl-sm q-mt-lg q-mt-xs-none">
        <span class="text-subtitle2 text-dark q-mt-lg">Suit (optional)</span>
        <q-input placeholder="Enter your suit" standout="bg-primary text-accent" class="q-mt-sm" v-model="data.suite">
          <template v-slot:prepend>
            <BuildingIcon class="q-ml-sm" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="flex row justify-between q-mt-lg">
      <div class="col-xs-12 col-sm-6 q-pr-xs-none q-pr-sm ">
        <span class="text-subtitle2 text-dark">Post Code</span>
        <q-input
          placeholder="Enter your post code"
          standout="bg-primary text-accent"
          class="q-mt-sm"
          v-model="data.zip">
          <template v-slot:prepend>
            <PostCodeIcon class="q-ml-sm" />
          </template>
        </q-input>
      </div>

      <div class="col-xs-12 col-sm-6 q-pl-xs-none q-pl-sm">
        <span class="text-subtitle2 text-dark q-mt-lg q-mb-md">City <span class="text-red">*</span></span>
        <q-select
          :options="citiesList"
          :disable="!data.country"
          label="select your city"
          standout="bg-primary text-accent"
          class="q-mt-sm"
          v-model="data.city"
          :rules="[(val) => (val && val.length > 0) || 'City is required']">
          <template v-slot:prepend>
            <CityIcon class="q-ml-sm" />
          </template>
        </q-select>
      </div>
    </div>
  </q-form>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { cities } from '../../utils/cities.js';
import { countries } from '../../utils/countries.js';
import PersonIcon from '@/assets/svg/person.svg';
import MapIcon from '@/assets/svg/map.svg';
import AddressIcon from '@/assets/svg/address.svg';
import BuildingIcon from '@/assets/svg/building.svg';
import PostCodeIcon from '@/assets/svg/post.svg';
import CityIcon from '@/assets/svg/city.svg';

const emit = defineEmits(['update:addressData']);

const data = reactive({
  firstName: '',
  lastName: '',
  country: '',
  address: '',
  apartment: '',
  suite: '',
  city: '',
  zip: '',
});
const citiesList = computed(() => {
  return cities[data.country];
});
watch(data, (val) => {
  emit('update:addressData', val);
});

const form = ref(null);
async function validate() {
  return form.value.validate();
}
defineExpose({
  validate,
});
</script>

<style scoped></style>
