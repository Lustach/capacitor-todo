<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Page One</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>Page One</h1>
  </ion-content>
</template>

<script lang="ts">
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/vue";
// import PageTwo from "./PageTwo.vue";

export default {
  components: { IonHeader, IonTitle, IonToolbar, IonContent },
  data() {
    return {
    //   component: markRaw(PageTwo),
    };
  },
};
</script>
