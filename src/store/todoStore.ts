import { defineStore } from "pinia";
import { ref, computed, inject, type Ref } from "vue";
import { useAlert } from "@/store/useAlert";
import { Todo } from "@/types/todo";

import { API } from '../plugins/axiosType';

export const useTodoStore = defineStore("todoStore", () => {
  const {setOpen} = useAlert()

  const API:API = inject("API")!;
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  // const todoList = ref([
  //   {
  //     name: "Name 1",
  //     date: format(new Date(), "yyyy-MM-dd HH:mm"),
  //     model: false,
  //     // state: '',
  //     isArchive: false,
  //     isFavorite: false,
  //     category: {
  //       name: "University",
  //       icon: "trash-outline",
  //     },
  //     id: 0,
  //   },
  //   {
  //     name: "Name 2",
  //     category: "Home",
  //     date: format(new Date(), "yyyy-MM-dd HH:mm"),
  //     model: false,
  //     // state: '',
  //     isArchive: false,
  //     isFavorite: false,
  //     id: 1,
  //   },
  //   {
  //     name: "Name 2",
  //     category: "Work",
  //     date: format(new Date(), "yyyy-MM-dd HH:mm"),
  //     model: false,
  //     // state: '',
  //     isArchive: false,
  //     isFavorite: false,
  //     id: 2,
  //   },
  // ]);
  const todoList:Ref<Todo[]> = ref([])
  const getTodoList = async ()=>{
    try{
      const result = await API.todo.get()
      todoList.value = result.data
      setOpen(true,{message: "Загрузка успешная"})
    }catch(e){
      setOpen(true,{message: "Ошибка из стора"})
    }
  }
  const deleteTodo = async(id: number)=>{
    const result = await API.todo.delete(id)
    todoList.value.splice(todoList.value.findIndex(e=>e.id===id),1)
    return result
  }
  const addTodo = async(data:Todo)=>{
    todoList.value.push(data)
    const result = await API.todo.add(data)
    return result
  }

  return { count, name, doubleCount, increment,
     todoList,getTodoList,deleteTodo, addTodo };
});
