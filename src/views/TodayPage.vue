<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="title">
        <h1>Сегодня</h1>
        <!-- <ion-icon :icon="search" color="primary" size="medium"></ion-icon> -->
      </div>
      <div v-for="item in store.todoList" :key="item.id">
        {{ item }}
      </div>
      <ion-list>
        <ion-item-sliding v-for="item in store.todoList" :key="item.id">
          <ion-item-options side="start">
            <ion-item-option color="none">
              <ion-icon :icon="archiveOutline"></ion-icon>
            </ion-item-option>
          </ion-item-options>
          <ion-item>
            <input type="checkbox" @click="deleteItem"/>
            <ion-label
              >{{ item.name }}
              <p>{{ item.date }}</p>
            </ion-label>
            <Chip :info="item.category" />
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="none"
              ><ion-icon :icon="starOutline"></ion-icon
            ></ion-item-option>
            <ion-item-option color="none"
              ><ion-icon :icon="trashOutline"></ion-icon
            ></ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/store/counter";
import { markRaw, ref } from "vue";
import { search, trashOutline, starOutline, archiveOutline } from "ionicons/icons";
import {
  IonPage,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonItemGroup,
  IonLabel,
  IonCheckbox,
} from "@ionic/vue";

import Chip from "@/components/ui/Chip.vue";

const store = useCounterStore();
console.log(store);
const value = defineModel();
const check = (event) => {
  console.log(event.target, this);
  // event.preventDefault();
  event.stopPropagation();
};
</script>
<style scoped lang="scss">
h1 {
  margin: 0;
}
.title {
  display: flex;
}

ion-label {
  font-size: 14px !important;
  p {
    font-size: 12px;
  }
}
ion-item {
  --inner-padding-start: 10px;
  &::part(native) {
    /* max-height: 72px;
    max-width: 327px; */
    padding-left: 0;
    /* &:hover {
      background-color: rgb(253, 251, 251) !important;
      cursor: pointer;
    } */
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
