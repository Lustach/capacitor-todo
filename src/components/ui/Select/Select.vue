<template>
  <!-- label="Floating label"
        label-placement="floating" -->
  <ion-select
    aria-label="Дата"
    placeholder="Выберите дату"
    :compareWith="compareWith"
    @ionChange="handleChange($event)"
  >
    <ion-select-option v-for="item in data" :value="item" :key="item.id">{{
      item.name
    }}</ion-select-option>
  </ion-select>
</template>

<script setup lang="ts">
import { IonSelect, IonSelectOption } from "@ionic/vue";
type Data = {
  data: {
    id: number;
    name: string;
    type: string;
  };
};
defineProps<Data>();
const compareWith = (o1, o2) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};
const handleChange = (ev) => {
  console.log("Current value:", JSON.stringify(ev.detail.value));
};
</script>
<style scoped>
ion-select {
}
</style>
