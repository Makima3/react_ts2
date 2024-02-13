import {IRes} from "../types/IResType";
import {ICar} from "../intrerfaces/carInterface";
import {axiosService} from "./axiosService";
import {urls} from "../const/urls";

export const carService ={
    getAll:(): IRes<ICar[]> => axiosService.get(urls.cars)

}