import {IRes} from "../types/responseType";
import {ICar} from "../intrerfaces/carInterface";
import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars.base),
    create: (data: ICar): IRes<ICar> => axiosService.post(urls.cars.base, data),
    update: (id: number, data: ICar): IRes<ICar> => axiosService.put(urls.cars.byId(id), data),
    delete: (id: number): IRes<void> => axiosService.delete(urls.cars.byId(id))
}
