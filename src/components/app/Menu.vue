<template>
  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Меню шапка</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item
          v-for="(item, id) in menu"
          :key="id"
          @click="() => ionRouter.push(item.to)"
        >
          <!-- <ion-icon aria-hidden="true" :icon="airplane" slot="start"></ion-icon> -->
          <ion-label>{{ item.name }}</ion-label>
        </ion-item>
      </ion-list>
      <p>
        <!-- <ion-nav-link router-direction="forward" :component="item.component">{{
          item.name
        }}</ion-nav-link> -->
      </p>
      <!-- <ion-nav-link router-direction="forward" :component="component">
        <ion-button>Go to Page Two</ion-button>
      </ion-nav-link> -->
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <AppHeader />
    <!-- <ion-header>
      <ion-toolbar>
        <ion-icon :icon="search" color="primary" size="medium"></ion-icon>
        <ion-icon :icon="notificationsOutline" color="primary" size="medium"></ion-icon>
        <ion-buttons slot="end">

        </ion-buttons>
      </ion-toolbar>
    </ion-header> -->
    <!-- <ion-content class="ion-padding">
      Tap the button in the toolbar to open the menu.
    </ion-content> -->
  </ion-page>
</template>

<script lang="ts" setup>
import { useIonRouter } from "@ionic/vue";
import { markRaw, ref } from "vue";
import { search, notificationsOutline, menu } from "ionicons/icons";
import AppHeader from "@/components/app/AppHeader.vue";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonHeader,
  IonMenu,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import TestPage from "@/views/TestPage.vue";
import TodayPage from "@/views/TodayPage.vue";
import PageOne from "@/views/PageOne.vue";
const ionRouter = useIonRouter();

const menu = ref([
  { to: "/today", name: "Сегодня", component: () => markRaw(PageOne) },
  //   { to: "/today", name: "Входящие" },
  //   { to: "/today", name: "Предстоящие" },
  { to: "/test", name: "Тест", component: () => markRaw(PageOne) },
  { to: "/categories", name: "Категории" },

]);
// const component = markRaw(PageTwo);
</script>
<style lang="scss" scoped>
ion-icon {
  font-size: 24px;
}
</style>
