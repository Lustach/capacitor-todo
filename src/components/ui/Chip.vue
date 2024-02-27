<template>
  <!-- <ion-chip>
    <ion-avatar>
      <img
        alt="Silhouette of a person's head"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
      />
    </ion-avatar>
    <ion-label>Avatar Chip</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip> -->

  <ion-chip :style="{ ...info.styles }">
    <ion-icon :icon="icons[info.icon_name]" :style="{ color: '#fff' }"></ion-icon>
    <ion-label style="color: #fff">{{ info.name }}</ion-label>
    <!-- <ion-icon :icon="close"></ion-icon> -->
  </ion-chip>
</template>

<script setup lang="ts">
import * as icons from "ionicons/icons";
import { IonChip, IonAvatar, IonLabel, IonIcon } from "@ionic/vue";
import { close, closeCircle, pin } from "ionicons/icons";
import { onMounted } from "vue";
import { useCategoriesStore } from "@/store/categories";

const store = useCategoriesStore();
defineProps<{
  info: any;
}>();
onMounted(() => {
  // store.getCategories();
  console.log(store.categoriesList);
});
</script>
<style lang="scss" scoped>
$yellow: #c9cc41;
$light-blue: #80ffff; // Светло-синий
$light-green-bg: #ccff80; // Светло-зеленый
$light-green-c: #21a300;
$light-red: #ff9680; // Светло-красный
$light-blue: #80ffff; // Светло-синий
$light-indigo: #809cff; // Светло-индиго
$light-purple: #ff80eb; // Светло-пурпурный
$light-teal: #80ffa3; // Светло-бирюзовый
$light-cyan: #80d1ff; // Светло-циан
$light-orange: #ffcc80; // Светло-оранжевый
ion-chip {
  /* --background: #{$light-green-bg}; */
  /* --color: #{$light-green-c}; */
  border-radius: 4px;
  font-size: 12px;
}
</style>
