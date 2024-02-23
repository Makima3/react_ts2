import {IRes} from "../types";
import {IPosts} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const postService = {
    getByPostId: (postId: number): IRes<IPosts> => axiosService.get(urls.posts.byPostId(postId))
}