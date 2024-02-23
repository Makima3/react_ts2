import {IRes} from "../types";
import {IComments} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const commentService = {
    getAll: (): IRes<IComments[]> => axiosService.get(urls.comments)
}