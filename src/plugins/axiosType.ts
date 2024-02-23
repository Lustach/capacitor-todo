import { AxiosResponse } from 'axios';
import { Todo } from "@/types/todo";

export type ApiMethods = {
    get: () => Promise<AxiosResponse<any>>;
    add: (data: Todo) => Promise<AxiosResponse<any>>;
    edit: (id: number) => Promise<AxiosResponse<any>>;
    delete: (id: number) => Promise<AxiosResponse<any>>;
};

export type API = {
    todo: ApiMethods;
};
