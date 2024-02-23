import { defineStore } from "pinia";

import { ref } from "vue";
export const useAlert = defineStore("useAlert", () => {
  const isOpen = ref(false);
  const alertData = ref();
  const setOpen = (state: boolean, data?: { message: string }) => {
    console.log(state, data);
    isOpen.value = state;
    if (data) {
      alertData.value = data;
    }
  };
  return { isOpen, setOpen, alertData };
});
