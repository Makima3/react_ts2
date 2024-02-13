import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../intrerfaces/carInterface";
import {carService} from "../services/carService";
import {FC, useEffect} from "react";
import {ISetState} from "../types/stateTypes";

interface IProps {
    changeTrigger: () => void,
    setCarForUpdate: ISetState<ICar>,
    carForUpdate: ICar
}

export const CarsForm: FC<IProps> = ({changeTrigger, carForUpdate, setCarForUpdate}) => {

    const {handleSubmit, register, reset, setValue} = useForm<ICar>()

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        changeTrigger()
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setCarForUpdate (null)
        changeTrigger()
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};
