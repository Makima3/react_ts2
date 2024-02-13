import {ICar} from "../intrerfaces/carInterface";
import {FC} from "react";

interface IPops {
    car: ICar
    changeTrigger: () => void
}

export const Car: FC<IPops> = ({car, changeTrigger}) => {

    const {id, year, price, brand} = car

    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <button>Delete</button>
            <button>Update</button>
        </div>
    );
};

