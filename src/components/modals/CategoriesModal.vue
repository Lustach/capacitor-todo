<template>
  <ion-modal
    ref="modal"
    trigger="open-categories-modal"
    :enter-animation="enterAnimation"
    :leave-animation="leaveAnimation"
  >
    <ion-toolbar>
      <ion-title>Выберите категорию</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismiss()">
          <ion-icon slot="icon-only" :src="icons['close']" color="primary"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <div class="categories-wrapper">
      <div
        class="categories-item"
        v-for="(item, i) in store.categoriesList"
        :key="item.id"
        :style="{
          marginRight:
            (i !== 0 && i % 2 == 0) || store.categoriesList.length - 1 === i
              ? '0'
              : '28px',
        }"
      >
        <div class="categories-item_block" :style="{ ...item.styles }">
          <ion-icon :src="icons[item.iconName]" color="primary"></ion-icon>
        </div>
        <p class="categories-item_name">{{ item.name }}</p>
      </div>
      <div class="categories-item" id="btn-add">
        <ion-button fill="clear" size="small" style="width: auto">
          <div class="categories-item_block">
            <ion-icon slot="icon-only" :src="icons['add']" color="primary"></ion-icon>
          </div>
        </ion-button>

        <p class="categories-item_name">Создать</p>
      </div>
    </div>
    <!-- <ion-toolbar>
      <ion-button fill="clear" style="margin: 0 0 0 auto; padding-left: 20px"
        >Добавить категорию</ion-button
      >
    </ion-toolbar> -->
    <!-- <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
          </ion-avatar>
          <ion-label>
            <h2>Connor Smith</h2>
            <p>Sales Rep</p>
          </ion-label>
        </ion-item>
      </ion-list> -->
  </ion-modal>
</template>

<script lang="ts" setup>
import * as icons from "ionicons/icons";
import {
  createAnimation,
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonItem,
  IonList,
  IonAvatar,
  IonImg,
  IonLabel,
} from "@ionic/vue";
import { ref } from "vue";
import { useCategoriesStore } from "@/store/categories";

const modal = ref();

const dismiss = () => modal.value.$el.dismiss();

const enterAnimation = (baseEl: HTMLElement) => {
  const root = baseEl.shadowRoot;

  const backdropAnimation = createAnimation()
    .addElement(root.querySelector("ion-backdrop"))
    .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

  const wrapperAnimation = createAnimation()
    .addElement(root.querySelector(".modal-wrapper"))
    .keyframes([
      { offset: 0, opacity: "0", transform: "scale(0)" },
      { offset: 1, opacity: "0.99", transform: "scale(1)" },
    ]);

  return createAnimation()
    .addElement(baseEl)
    .easing("ease-out")
    .duration(500)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

const leaveAnimation = (baseEl) => {
  return enterAnimation(baseEl).direction("reverse");
};
const store = useCategoriesStore();

// function importIcon(name: string) {
//   const icons = import(`ionicons/icons`);
//   icons.then((module) => {
//     // console.log(module);
//     return module[name];
//   });
// }
// const categoriesList = ref([])
</script>

<style lang="scss" scoped>
ion-modal#example-modal {
  --width: 100%;
  --min-width: 250px;
  --max-width: 400px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  padding: 0 10px;
}

ion-modal#example-modal .wrapper {
  margin: 0px 20px 20px;
  /* margin-bottom: 10px; */
}
.categories {
  &-wrapper {
    max-width: 328px;
    padding: 18px;
    display: flex;
    /* gap: 49px; */
    flex-wrap: wrap;
    margin: 0 auto;
  }
  &-item {
    min-height: 90px;
    height: 100%;
    width: 64px;
    /* margin-right: 49px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    &_block {
      width: 64px;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      // background: #809cff;
    }
    &_name {
      margin: 6px 0;
      /* margin-bottom: 0; */
    }
  }
}
#btn-add {
  margin-left: 28px;
  margin-right: 0;
  ion-button {
    width: 64px !important;
    height: 64px;
    margin: 0;
  }
}
</style>
