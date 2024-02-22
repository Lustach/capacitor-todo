<template>
  <ion-page>
    <!-- <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Blank 1245</ion-title>
        </ion-toolbar>
      </ion-header> -->

    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Blank 124</ion-title>
          </ion-toolbar>
        </ion-header> -->

      <div id="container">
        {{ store }}
        <ion-button id="open-modal" expand="block">Open Modal</ion-button>
        <CategoriesModal />
        <!-- <strong>Ready to create an app?</strong>
        <p>
          Start with Ionic
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import CategoriesModal from "@/components/modals/CategoriesModal.vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { useCategoriesStore } from "@/store/categories";
const store = useCategoriesStore();
</script>

<style scoped></style>
