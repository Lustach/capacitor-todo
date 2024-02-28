import { defineStore } from 'pinia'
import { ref, inject, type Ref } from 'vue'
import { API } from '../plugins/axiosType';

import { type Category } from "@/types/categories";

export const useCategoriesStore = defineStore('categories', () => {
    const API:API = inject("API")!;
    // const yellow = '#c9cc41';
    // const lightBlue = '#80ffff'; // Светло-синий
    // const lightGreenBg = '#ccff80'; // Светло-зеленый
    // const lightGreenC = '#21a300';
    // const lightRed = '#ff9680'; // Светло-красный
    // const lightIndigo = '#809cff'; // Светло-индиго
    // const lightPurple = '#ff80eb'; // Светло-пурпурный
    // const lightTeal = '#80ffa3'; // Светло-бирюзовый
    // const lightCyan = '#80d1ff'; // Светло-циан
    // const lightOrange = '#ffcc80'; // Светло-оранжевый
    
    const categoriesList :Ref<Category[]> = ref([
        // {
        //     name: 'Работа',
        //     id: 0,
        //     styles: {backgroundColor: yellow},
        //     iconName: 'starOutline'
        // },
        // {
        //     name: 'Спорт',
        //     id: 1,
        //     styles: {backgroundColor: lightBlue},
        //     iconName: 'star'
        // },
        // {
        //     name: 'Магазин',
        //     id: 2,
        //     styles: {backgroundColor: lightGreenBg},
        //     iconName: 'star'
        // },
        // {
        //     name: 'Чтение',
        //     id: 3,
        //     styles: {backgroundColor: lightRed},
        //     iconName: 'star'
        // },
        // {
        //     name: 'Кино',
        //     id: 4,
        //     styles: {backgroundColor: lightIndigo},
        //     iconName: 'star'
        // },
        
    ])
    const getCategories = async ()=>{
      if(categoriesList.value.length) return
        try{
          const result = await API.categories.get()
          categoriesList.value = result.data
        }catch(e){
            console.log(e)
        }
    }
    const addCategory = async(data:Category)=>{
      const result = await API.categories.add(data)
      return result
    }
    return { categoriesList,getCategories,addCategory }
})