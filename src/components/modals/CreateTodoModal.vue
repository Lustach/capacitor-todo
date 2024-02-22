<template>
  <ion-modal id="modal" ref="modal" trigger="open-custom-dialog">
    <div class="wrapper">
      <h2>Новая задача</h2>

      <ion-input
        label="Название"
        label-placement="floating"
        fill="solid"
        placeholder="Введите текст"
      ></ion-input>
      <ion-textarea
        style="margin-top: 20px"
        fill="solid"
        label="Описание"
        label-placement="floating"
        :counter="true"
        :maxlength="20"
      ></ion-textarea>
      <!-- <ion-item> -->
      <div class="actions-container">
        <ion-button fill="clear" shape="round" size="small" id="open-date-dialog">
          <ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
        </ion-button>
        <ion-button fill="clear" shape="round" size="small" id="open-categories-modal">
          <ion-icon slot="icon-only" :icon="pricetagOutline"></ion-icon>
        </ion-button>
        <ion-button fill="clear" shape="round" size="small">
          <ion-icon slot="icon-only" :icon="flagOutline"></ion-icon>
        </ion-button>
        <ion-button
          fill="clear"
          shape="round"
          size="small"
          style="margin: auto; margin-right: 0"
        >
          <ion-icon slot="icon-only" :icon="sendOutline"></ion-icon>
        </ion-button>
      </div>
      <ion-modal id="modal" ref="dateModal" trigger="open-date-dialog">
        <div class="date_wrapper">
          {{ date }}
          <ion-datetime v-model="date"></ion-datetime>
          <div class="buttons-container">
            <ion-button fill="clear" shape="round" size="small" @click="dismiss">
              Отмена
            </ion-button>
            <ion-button fill="clear" shape="round" size="small" @click="dismiss">
              Далее
            </ion-button>
          </div>
        </div>
      </ion-modal>
      <CategoriesModal id="modal" />
    </div>
  </ion-modal>
</template>

<script lang="ts" setup>
import CategoriesModal from "@/components/modals/CategoriesModal.vue";
import {
  IonButton,
  IonModal,
  IonInput,
  IonIcon,
  IonDatetime,
  IonTextarea,
} from "@ionic/vue";
import { timeOutline, pricetagOutline, flagOutline, sendOutline } from "ionicons/icons";
import { ref } from "vue";

const dateModal = ref();

const dismiss = () => dateModal.value.$el.dismiss();

const date = ref();
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
.actions-container {
  margin-top: 10px;
  display: flex;
}
.date_wrapper {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.buttons-container {
  display: flex;
  justify-content: flex-end;
}
</style>
