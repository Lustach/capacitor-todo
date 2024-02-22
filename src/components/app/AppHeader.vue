<template>
  <!-- <ion-header collapse="condense"> -->
  <ion-toolbar>
    <header>
      <ion-back-button></ion-back-button>
      <div>
        <ion-button fill="clear" shape="round">
          <ion-icon slot="icon-only" :icon="search" color="primary"></ion-icon>
        </ion-button>
        <ion-button fill="clear" shape="round">
          <ion-icon
            slot="icon-only"
            :icon="notificationsOutline"
            color="primary"
          ></ion-icon>
        </ion-button>
      </div>
      <ion-menu-button id="menu">
        <!-- <ion-button fill="clear" shape="round"> -->
        <ion-icon :icon="menu" color="primary"></ion-icon>
        <!-- </ion-button> -->
      </ion-menu-button>
      <!-- <Menu/> -->

      <!-- <h1>{{ title }}</h1> -->
    </header>
  </ion-toolbar>
  <!-- </ion-header> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { search, notificationsOutline, menu } from "ionicons/icons";
import {
  IonMenuButton,
  IonButton,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonIcon,
  IonMenuToggle,
} from "@ionic/vue";

const title = ref("");
const links = ref([
  { id: 1, text: "Home", route: "/" },
  { id: 2, text: "About", route: "/about" },
  { id: 3, text: "Contact", route: "/contact" },
]);
</script>

<style scoped lang="scss">
header {
  background-color: #fff;
  color: #000;
  /* padding: 10px; */
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 16px;
  /* justify-content: space-between; */
  width: 100%;
}

h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
}
#menu {
  margin: auto;
  margin-right: 0;
  /* &::part(native) {
    width: 24px;
    height: 24px;
  } */
}
/* ion-icon {
  font-size: 24px;
} */
ion-button,
ion-menu-button {
  width: 40px;
  height: 40px;
  /* --background: #93e9be;
  --background-hover: #9ce0be;
  --background-activated: #88f4be;
  --background-focused: #88f4be; */

  /* --color: blue; */

  --border-radius: 50%;
  /* --border-color: #000; */
  /* --border-style: solid; */
  /* --border-width: 1px; */

  /* --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25); */

  /* --ripple-color: deeppink; */

  /* --padding-top: 10px;
  --padding-bottom: 10px; */
  &::part(native) {
    padding: 0;
  }
}
</style>
