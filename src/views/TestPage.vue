<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-button id="open-action-sheet">Open</ion-button>
      <ion-button id="open-action-sheet" @click="$router.go(-1)">Back</ion-button>
      <ion-action-sheet
        trigger="open-action-sheet"
        header="Actions"
        :buttons="actionSheetButtons"
      ></ion-action-sheet>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonActionSheet, IonButton, IonContent } from "@ionic/vue";

const actionSheetButtons = [
  {
    text: "Delete",
    role: "destructive",
    data: {
      action: "delete",
    },
  },
  {
    text: "Share",
    data: {
      action: "share",
    },
  },
  {
    text: "Cancel",
    role: "cancel",
    data: {
      action: "cancel",
    },
  },
];
</script>
