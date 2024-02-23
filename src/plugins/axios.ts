import axios from 'axios';
import { API } from './axiosType';
const API: API = {
    todo:{
        get: ()=>axios.get('/todos'),
        add: (data)=>axios.post('/todos',{data: data}),
        edit: (id: number)=>axios.put(`/todos/${id}`),
        delete: (id: number)=>axios.delete(`/todos/${id}`),
    }
}

axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_HOST;
// const token = localStorage.getItem('access_token');
// if (token) {
//     axios.defaults.headers.common.Authorization = 'JWT ' + token;
// }
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.interceptors.request.use(async (request) => {
//     const authStore = useAuthStore();
//     if (authStore.loggedIn) {
//         try {
//             await authStore.inspectToken;
//         } catch (e) {
//             console.error(e);
//             await authStore.logoutUser();
//             await router.push({ name: 'login', });
//             return;
//         }
//     }
//     return request;
// });

// axios.interceptors.response.use(function (response) {
//     return response.data;
// }, function (error) {
//     if (error.response?.status === 401) {
//         localStorage.removeItem('access_token');
//         axios.defaults.headers.common.Authorization = '';
//         if (router.currentRoute.value.name !== 'login')
//             router.push({ name: 'login', });
//     }
//     return Promise.reject(error);
// });
// Vue.prototype.$http = axios;
// Object.defineProperty(Vue.prototype, '$API', { value: API, });
// },
// });
export default API;