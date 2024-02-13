import {ISetState} from "../types/setStateTypes";
import {IComment} from "../interfaces/commentInterface";
import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {commentService} from "../services/commentService";

interface IProps {
    setComments: ISetState<IComment[]>
}

export const CommentForm: FC<IProps> = ({setComments}) => {

    const {handleSubmit, register, reset} = useForm<IComment>()

    const save: SubmitHandler<IComment> = async (comment) =>{
        const {data} =  await commentService.create(comment)
        setComments (prevState => [...prevState, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'name'} {...register('name')} />
            <input type='text' placeholder={'email'} {...register('email')} />
            <input type='text' placeholder={'body'} {...register('body')} />
            <button>Save</button>
        </form>
    );
};

