<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        {{ store }}
        <ion-button id="open-modal" expand="block">Open Modal</ion-button>
        <CategoriesModal />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import CategoriesModal from "@/components/modals/CategoriesModal.vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useCategoriesStore } from "@/store/categories";
const store = useCategoriesStore();
</script>

<style scoped></style>
