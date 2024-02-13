import {ICar} from "../intrerfaces/carInterface";
import {FC} from "react";
import {Car} from "./Car";

interface IProps {
    cars: ICar[],
    changeTrigger: () => void
}

export const Cars: FC<IProps> = ({cars, changeTrigger}) => {
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} changeTrigger={changeTrigger}/>)
            }
        </div>
    );
};
