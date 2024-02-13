import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";
import {useEffect, useState} from "react";
import {ICar} from "../intrerfaces/carInterface";
import {carService} from "../services/carService";

export const CarsContain = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])

    const changeTrigger = () =>{
        setTrigger(prevState => !prevState)
    }

    return (
        <div>
            <CarsForm changeTrigger={changeTrigger}/>
            <hr/>
            <hr/>
            <Cars cars={cars} changeTrigger={changeTrigger}/>
        </div>
    );
};

