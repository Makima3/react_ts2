import {ICar} from "../intrerfaces/carInterface";
import {FC} from "react";
import {ISetState} from "../types/stateTypes";
import {carService} from "../services/carService";

interface IPops {
    car: ICar,
    changeTrigger: () => void,
    setCarForUpdate: ISetState<ICar>
}

export const Car: FC<IPops> = ({car, changeTrigger, setCarForUpdate}) => {

    const {id, year, price, brand} = car

    const deleteById = async () => {
        await carService.deleteById(id)
        changeTrigger()
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <button onClick={deleteById}>Delete</button>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
        </div>
    );
};

