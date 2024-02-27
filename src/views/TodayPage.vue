<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="title"><Select :data="filtersData" /></div>
      <!-- <div class="title">
        <h1>Сегодня</h1>
      </div> -->
      <!-- <ion-button id="open-custom-dialog">go</ion-button> -->
      <ion-list>
        <ion-item-sliding
          v-for="item in store.todoList"
          :key="item.id"
          @click="editTodo(true)"
        >
          <ion-item-options side="start">
            <ion-item-option color="none">
              <ion-icon :icon="archiveOutline"></ion-icon>
            </ion-item-option>
          </ion-item-options>
          <ion-item>
            <input type="checkbox" @click="completeItem" />
            <ion-label
              >{{ item.name }}
              <p>{{ format(item.date, "MM/dd H:m") }}</p>
            </ion-label>
            <Chip :info="getChipInfo(item.category_id)" />
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="none"
              ><ion-icon :icon="starOutline"></ion-icon
            ></ion-item-option>
            <ion-item-option color="none" @click="deleteTodo(item.id)"
              ><ion-icon :icon="trashOutline"></ion-icon
            ></ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
    <Alert />
    <ion-modal :is-open="isOpen">
      <ion-header>
        <ion-toolbar>
          <ion-title>View Task Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="editTodo(false)">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem
          recusandae ducimus quos reprehenderit. Veniam, molestias quos, dolorum
          consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta.
        </p>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script lang="ts" setup>
import Select from "@/components/ui/Select/Select.vue";
import { format } from "date-fns";
import { useTodoStore } from "@/store/todoStore";
import { useCategoriesStore } from "@/store/categories";
import Alert from "@/components/ui/Alert/Alert.vue";
import { onMounted, ref } from "vue";
import { trashOutline, starOutline, archiveOutline } from "ionicons/icons";
import {
  IonPage,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonModal,
} from "@ionic/vue";

import Chip from "@/components/ui/Chip.vue";

const store = useTodoStore();
const categoriesStore = useCategoriesStore();
const { deleteTodo, getTodoList } = useTodoStore();
const completeItem = () => {};
const getChipInfo = (category_id: number) => {
  console.log(store, category_id);
  return categoriesStore.categoriesList.find((e) => e.id === category_id);
};

const isOpen = ref(false);
const editTodo = (showModal: boolean) => {
  isOpen.value = showModal;
};
const filtersData = ref([
  {
    id: 1,
    name: "Сегодня",
    type: "today",
  },
  {
    id: 2,
    name: "Завтра",
    type: "tomorrow",
  },
  {
    id: 3,
    name: "Вчера",
    type: "yesterday",
  },
]);

onMounted(async () => {
  await categoriesStore.getCategories();
  await getTodoList();
});
</script>
<style scoped lang="scss">
h1 {
  margin: 0;
}
.title {
  display: flex;
  width: 100%;
  max-width: 100px;
  margin: 0 20px;
}

ion-label {
  font-size: 14px !important;
  p {
    font-size: 12px;
  }
}
ion-item {
  /* cursor: pointer; */
  --inner-padding-start: 10px;
  &::part(native) {
    /* max-height: 72px;
    max-width: 327px; */
    padding-left: 0;
    &:hover {
      background-color: rgb(253, 251, 251) !important;
      cursor: pointer;
    }
  }
}
/* .list-item {
  &:hover {
    background-color: rgb(253, 251, 251) !important;
    cursor: pointer;
  }
} */
ion-item::part(native) .item-inner {
  padding-left: 20px;
}
.item-inner {
  padding: 0 10px;
}
.ion-item_wrapper {
  display: flex;
  align-items: center;
}
ion-label {
  margin-left: 12px;
}
</style>
