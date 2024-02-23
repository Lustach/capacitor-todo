<template>
  <ion-alert
    :is-open="store.isOpen"
    header="Alert!"
    :message="store.alertData?.message || 'message'"
    :buttons="alertButtons"
    @didDismiss="logResult($event)"
  ></ion-alert>
</template>

<script lang="ts" setup>
import { IonAlert } from "@ionic/vue";
import { useAlert } from "@/store/useAlert";
const store = useAlert();
const alertButtons = [
  {
    text: "Cancel",
    role: "cancel",
    handler: () => {
      console.log("Alert canceled");
      store.setOpen(false);
    },
  },
  {
    text: "OK",
    role: "confirm",
    handler: () => {
      console.log("Alert confirmed");
      store.setOpen(false);
    },
  },
];

const logResult = (ev: CustomEvent) => {
  console.log(`Dismissed with role: ${ev.detail.role}`);
};
</script>
