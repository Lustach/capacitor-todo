import { defineStore } from 'pinia'
import { ref } from 'vue'
import { addOutline } from "ionicons/icons";

export const useCategoriesStore = defineStore('categories', () => {
    const yellow = '#c9cc41';
    const lightBlue = '#80ffff'; // Светло-синий
    const lightGreenBg = '#ccff80'; // Светло-зеленый
    const lightGreenC = '#21a300';
    const lightRed = '#ff9680'; // Светло-красный
    const lightIndigo = '#809cff'; // Светло-индиго
    const lightPurple = '#ff80eb'; // Светло-пурпурный
    const lightTeal = '#80ffa3'; // Светло-бирюзовый
    const lightCyan = '#80d1ff'; // Светло-циан
    const lightOrange = '#ffcc80'; // Светло-оранжевый
    
    const categoriesList = ref([
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
  
    return { categoriesList }
  })