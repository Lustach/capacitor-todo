<template>
  <ion-modal id="modal" ref="modal" trigger="open-custom-dialog">
    <div class="wrapper">
      <h2>Новая задача</h2>

      <ion-input
        :debounce="100"
        label="Название"
        label-placement="floating"
        fill="solid"
        placeholder="Введите текст"
        ref="name"
        error-text="Заполните поле"
        v-model="formModel.name"
        @ionInput="validate(name)"
        @ionBlur="markTouched('name')"
      ></ion-input>
      <ion-textarea
        :debounce="100"
        ref="description"
        error-text="Заполните поле"
        style="margin-top: 20px"
        fill="solid"
        label="Описание"
        label-placement="floating"
        :counter="true"
        :maxlength="200"
        v-model="formModel.description"
        @ionInput="validate(description)"
        @ionBlur="markTouched('description')"
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
import { ref, type Ref, toRefs, reactive  } from "vue";
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

// interface RefState {
//   name: Ref<string>;
//   description: Ref<string>;
// }


const todo = z.object({
  name: z.string().min(2).max(60),
  description: z.string().min(5).max(200),
  // date: z.date(),
  // category: z.string(),
  // id: z.number(),
});

const store = useTodoStore();
const { addTodo } = store;
const dateModal = ref();

const dismiss = () => dateModal.value.$el.dismiss();

const refState = reactive({
  name: ref(''),
  description: ref('')
})
const { name, description } = toRefs(refState);
const date = ref();
const formModel = ref({
  name: "",
  description: "",
  category_id: "",
  date: new Date(),
  // category_id:"",
});

const validate = (ref:Ref) => {
  ref.$el.classList.remove("ion-valid");
  ref.$el.classList.remove("ion-invalid");
  // const refObj = toRefs(refState)
  // refObj[key].value.$el.classList.remove("ion-valid");
  // refObj[key].value.$el.classList.remove("ion-invalid");
};

// const markTouched = (key: string) => {
//   const refObj = toRefs(refState)
//   refObj[key].value.$el.classList.add("ion-touched")
// };

const markTouched = (key: string) => {
  const refObj = toRefs(refState) as { [key: string]: Ref<any> };
  refObj[key].value.$el.classList.add("ion-touched");
};

const addTodoItem = () => {
  try {
    console.log("start validation");
    todo.parse(formModel.value);
    [name, description].forEach((element) => element.value.$el.classList.add("ion-valid"));
    // addTodo(formModel.value)
  // store.todoList.push(formModel.value);
    console.log("end validation");
  } catch (e) {
    console.error(e)
    const refObj = toRefs(refState)
    const zodObj = JSON.parse(e)
    for (const key in zodObj) {
      if (Object.prototype.hasOwnProperty.call(zodObj, key)) {
        const element = zodObj[key];
        markTouched(element.path)
        refObj[element.path].value.$el.classList.add("ion-invalid")
      }
    }
  }
};
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
