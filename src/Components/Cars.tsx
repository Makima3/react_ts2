import {ICar} from "../intrerfaces/carInterface";
import {FC} from "react";
import {Car} from "./Car";
import {ISetState} from "../types/stateTypes";

interface IProps {
    cars: ICar[],
    changeTrigger: () => void,
    setCarForUpdate: ISetState<ICar>
}

export const Cars: FC<IProps> = ({cars, changeTrigger, setCarForUpdate}) => {
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} changeTrigger={changeTrigger}
                                     setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
};
