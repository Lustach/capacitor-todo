<template>
  <ion-app>
    <AppHeader />
    <Menu />
    <ion-router-outlet class="view" />
    <ion-fab vertical="bottom" horizontal="center" slot="fixed" id="open-custom-dialog">
      <ion-fab-button @click="takePhoto()">
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <CreateTodoModal />
    <!-- <ion-button @click="() => ionRouter.push('/test')">Go to detail</ion-button> -->
  </ion-app>
</template>

<script setup lang="ts">
import CreateTodoModal from "@/components/modals/CreateTodoModal.vue";
// import { useIonRouter } from "@ionic/vue";
import AppHeader from "@/components/app/AppHeader.vue";
import Menu from "@/components/app/Menu.vue";
// import PageOne from "@/views/PageOne.vue";
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { addOutline } from "ionicons/icons";

const takePhoto = () => {
  console.log("take photo");
};

// const ionRouter = useIonRouter();
</script>
<style lang="scss">
.view {
  margin-top: 60px;
}
.default-modal {
}
</style>
