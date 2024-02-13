import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../intrerfaces/carInterface";
import {carService} from "../services/carService";
import {FC} from "react";

interface IProps {
    changeTrigger: () => void
}

export const CarsForm: FC<IProps> = ({changeTrigger}) => {
    const {handleSubmit, register, reset} = useForm<ICar>()

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        changeTrigger()
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <button>Save</button>
        </form>
    );
};
