import {IRes} from "../types";
import {IPosts} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const postService = {
    getById: (id: number): IRes<IPosts> => axiosService.get(urls.posts.byId(id))
}