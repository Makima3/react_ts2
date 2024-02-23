import {axiosService} from "./axiosService";
import {urls} from "../const";
import {IRes} from "../types";
import {IAlbums} from "../interfaces";

export const albumService = {
    getAll: (): IRes<IAlbums[]> => axiosService.get(urls.albums)
}