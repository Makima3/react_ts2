import {IRes} from "../types/IResTypes";
import {axiosService} from "./axiosService";
import {urls} from "../const/urls";
import {IComment} from "../interfaces/commentInterface";

export const commentService = {
    getAll: (): IRes<IComment[]> => axiosService.get(urls.comments),
    create: (data: IComment): IRes<IComment> => axiosService.post(urls.comments, data)
}
