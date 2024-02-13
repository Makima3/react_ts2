import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";
import {useState} from "react";
import {ICar} from "../intrerfaces/carInterface";

export const CarsContain = () => {
    const [cars, setCars]= useState<ICar[]>([])


    return (
        <div>
            <CarsForm/>
            <hr/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

