import {IRes} from "../types";
import {IList} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const listService = {
    getAll: (): IRes<IList[]> => axiosService.get(urls.todos)
}