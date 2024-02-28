<template>
  <ion-modal id="modal" ref="modal" trigger="open-create-category-modal">
    <ion-toolbar>
      <ion-title>Новая категория</ion-title>
      <ion-buttons slot="end">
        <!-- <ion-button @click="dismiss()">
          <ion-icon slot="icon-only" :src="icons['close']" color="primary"></ion-icon>
        </ion-button> -->
      </ion-buttons>
    </ion-toolbar>
    <div class="wrapper">
      <ColorPicker v-model:pureColor="colorModel" />
      <ion-input
        style="margin: 10px 0"
        label="Название категории"
        label-placement="floating"
        fill="outline"
        placeholder="Введите текст"
        ref="category"
        error-text="Заполните поле"
        v-model="categoryName"
      ></ion-input>
      <div style="display: flex; align-items: center">
        <ion-input
          label="Название иконки (ion icons)"
          label-placement="floating"
          fill="outline"
          placeholder="Введите текст"
          ref="icon"
          error-text="Заполните поле"
          v-model="iconName"
        ></ion-input>
        <ion-icon
          style="margin: 0 0 10px 20px"
          :icon="icons[iconName]"
          color="primary"
        ></ion-icon>
      </div>
      <div class="buttons-container ion-margin-top">
        <ion-button fill="clear" shape="round" size="small" @click="dismiss">
          Отмена
        </ion-button>
        <ion-button fill="clear" shape="round" size="small" @click="createCategory">
          Создать
        </ion-button>
      </div>
    </div>
  </ion-modal>
</template>

<script lang="ts" setup>
import * as icons from "ionicons/icons";
import { ref } from "vue";
import ColorPicker from "@/components/ui/ColorPicker/ColorPicker.vue";
import {
  IonButton,
  IonModal,
  IonInput,
  IonIcon,
  IonDatetime,
  IonTextarea,
} from "@ionic/vue";
import { useCategoriesStore } from "@/store/categories";

const store = useCategoriesStore();

const colorModel = ref('');
const categoryName = ref('')
const iconName = ref("starOutline");

const modal = ref();
const dismiss = () => modal.value.$el.dismiss();

const createCategory = ()=>{
  const data = {
    name: categoryName.value,
    styles: JSON.stringify({backgroundColor: colorModel.value}),
    icon_name: iconName.value,
  }
  dismiss();
  store.addCategory(data)
}
</script>
<style scoped>
ion-modal#modal {
  --width: 100%;
  --min-width: 250px;
  --max-width: 400px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  padding: 0 10px;
}

ion-modal#modal h1 {
  margin: 20px 20px 10px 20px;
}

ion-modal#modal ion-icon {
  /* margin-right: 6px; */

  width: 20px;
  height: 20px;

  padding: 4px 0;

  color: #aaaaaa;
}

ion-modal#modal .wrapper {
  margin: 0px 20px 20px;
  /* margin-bottom: 10px; */
}
</style>
