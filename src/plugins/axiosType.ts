import { AxiosResponse } from 'axios';
import { Todo } from "@/types/todo";

export type TodoMethods = {
    get: () => Promise<AxiosResponse<any>>;
    add: (data: Todo) => Promise<AxiosResponse<any>>;
    edit: (id: number) => Promise<AxiosResponse<any>>;
    delete: (id: number) => Promise<AxiosResponse<any>>;
};
export type CategoriesMethods = {
    get: () => Promise<AxiosResponse<any>>;
    // add: (data: Todo) => Promise<AxiosResponse<any>>;
    // edit: (id: number) => Promise<AxiosResponse<any>>;
    // delete: (id: number) => Promise<AxiosResponse<any>>;
};
export type API = {
    todo: TodoMethods;
    categories: CategoriesMethods
};
