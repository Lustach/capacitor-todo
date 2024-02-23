<template>
  <ion-modal id="modal" ref="modal" trigger="open-custom-dialog">
    <div class="wrapper">
      <h2>Новая задача</h2>

      <ion-input
        label="Название"
        label-placement="floating"
        fill="solid"
        placeholder="Введите текст"
        ref="name"
        error-text="Invalid email"
        v-model="formModel.name"
        @ionInput="validate"
        @ionBlur="markTouched"
      ></ion-input>
      <ion-textarea
        style="margin-top: 20px"
        fill="solid"
        label="Описание"
        label-placement="floating"
        :counter="true"
        :maxlength="20"
        v-model="formModel.description"
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
          @click="addTodoItem"
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
import { ref, unref } from "vue";
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
import { useTodoStore } from "@/store/todoStore";
import { z } from "zod";

const todo = z.object({
  name: z.string().min(2),
  description: z.string(),
  // date: z.date(),
  // category: z.string(),
  // id: z.number(),
});

const store = useTodoStore();
const {addTodo} = store;
const dateModal = ref();
const dismiss = () => dateModal.value.$el.dismiss();
const date = ref();
const name = ref();
const formModel = ref({
  name: "",
  description: "",
  category: "work",
  date: new Date(),
  // category: {
  //   name: "Work"
  // }
});
// const nameModel = ref();
const validate = (ev) => {
  const value = ev.target.value;
  console.log(value, name.value);
  name.value.$el.classList.remove("ion-valid");
  name.value.$el.classList.remove("ion-invalid");

  if (value === "") return;

  // validateEmail(value)
  try {
    todo.parse(formModel.value);
    name.value.$el.classList.add("ion-valid");
  } catch (e) {
    name.value.$el.classList.add("ion-invalid");
  }
};

const markTouched = () => {
  name.value.$el.classList.add("ion-touched");
};

const addTodoItem = () => {
  addTodo(formModel.value)
  // store.todoList.push(formModel.value);
  name.value.$el.value = "";
  name.value.$el.classList.remove("ion-valid");
  name.value.$el.classList.remove("ion-invalid");
};
// console.log(store.todoList)
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
