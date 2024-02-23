import {FC} from "react";
import {IList} from "../../interfaces";

interface IProps {
    list: IList
}

export const List: FC<IProps> = ({list}) => {
    const {id, userId, title, completed} = list

    return (
        <div>
            <div><b>Id</b>: {id}</div>
            <div><b>UserId</b>: {userId}</div>
            <div><b>Title</b>: {title}</div>
            <div><b>Completed</b>: {completed.toString()}</div>
            <hr/>
            <hr/>
        </div>
    );
};

