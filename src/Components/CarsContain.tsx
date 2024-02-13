import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";
import {useEffect, useState} from "react";
import {ICar} from "../intrerfaces/carInterface";
import {carService} from "../services/carService";

export const CarsContain = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger, carForUpdate])

    const changeTrigger = () => {
        setTrigger(prevState => !prevState)
    }

    return (
        <div>
            <CarsForm changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <hr/>
            <Cars cars={cars} changeTrigger={changeTrigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

