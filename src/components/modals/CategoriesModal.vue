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
        <ion-button
          fill="clear"
          :style="{ ...item.styles }"
          @click="selectCategory(item)"
        >
          <ion-icon
            slot="icon-only"
            :icon="icons[item.icon_name]"
            :style="{ color: item.styles.color || 'white' }"
          ></ion-icon>
        </ion-button>
        <p class="categories-item_name">{{ item.name }}</p>
      </div>
      <div style="margin-left: 28px" class="categories-item">
        <ion-button fill="clear" id="open-create-category-modal">
          <ion-icon slot="icon-only" :icon="icons['add']" color="primary"></ion-icon>
        </ion-button>
        <p class="categories-item_name">Создать</p>
      </div>
      <AddCategoryModal />
      <!-- <div class="categories-item" id="btn-add">
        <ion-button fill="clear" size="small" style="width: auto">
          <div class="categories-item_block">
            <ion-icon slot="icon-only" :src="icons['add']" color="primary"></ion-icon>
          </div>
        </ion-button>

        <p class="categories-item_name">Создать</p>
      </div> -->
      <ion-toast
        :is-open="isOpen"
        :message="'Выбрана категория: ' + selectedCategory"
        :duration="5000"
        @didDismiss="isOpen = false"
        class="category-toast"
      ></ion-toast>
    </div>
  </ion-modal>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as icons from "ionicons/icons";
import { useCategoriesStore } from "@/store/categories";
import AddCategoryModal from "./AddCategoryModal.vue";
import {
  createAnimation,
  IonButtons,
  IonButton,
  IonModal,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonToast,
} from "@ionic/vue";

const isOpen = ref(false);
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

const selectedCategory = ref("");
const selectCategory = (item) => {
  selectedCategory.value = item.name;
  console.log(item);
  dismiss();
  isOpen.value = true;
};

const store = useCategoriesStore();
onMounted(() => {
  store.getCategories();
});
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
ion-toast.category-toast {
  --background: #f4f4fa;
  --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
  --color: #4b4a50;
}

ion-toast.category-toast::part(message) {
  font-style: italic;
}

ion-toast.category-toast::part(button) {
  border-left: 1px solid #d2d2d2;
  color: #030207;
  font-size: 15px;
}
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
    ion-button {
      border-radius: 6px;
    }
    ion-icon {
      &:hover {
        /* background-color: brightness(120%) !important; */
      }
    }
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
