import {ref,provide} from 'vue'
export function useAlert(){
  const isOpen = ref(false);
  const message = ref('Message')
  const setOpen = (state: boolean, data?: {message: string}) => {
    console.log(state,data)
    isOpen.value = state;
    if(data){
      message.value = data.message;
    }
  };
  provide("alert", {
    isOpen,
    setOpen,
    message,
  });
  return{ isOpen,setOpen, message};
}