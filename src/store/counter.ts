import { defineStore } from 'pinia'
import {ref,computed,reactive} from 'vue'
import { format } from "date-fns";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
    
    const todoList = reactive([
      {
        name: 'Name 1',
        date: format(new Date(),'yyyy-MM-dd HH:mm'),
        model: false,
        // state: '',
        isArchive: false,
        isFavorite: false,
        category:{
          name: 'University',
          icon: 'trash-outline'
        },
        id: 0,
      },
      {
        name: 'Name 2',
        category: 'Home',
        date: format(new Date(),'yyyy-MM-dd HH:mm'),
        model: false,
        // state: '',
        isArchive: false,
        isFavorite: false,
        id: 1
      },
      {
        name: 'Name 2',
        category: 'Work',
        date: format(new Date(),'yyyy-MM-dd HH:mm'),
        model: false,
        // state: '',
        isArchive: false,
        isFavorite: false,
        id: 2
      },
    ])
  
    return { count, name, doubleCount, increment, todoList }
  })