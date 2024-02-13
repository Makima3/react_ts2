import {FC} from "react";
import {IComment} from "../interfaces/commentInterface";

interface IProps {
    comment: IComment
}

export const Comment: FC<IProps> = ({comment}) => {
    const {id, postId, name, email, body} = comment

    return (
        <div>
            <div>Id:{id}</div>
            <div>PostId:{postId}</div>
            <div>Name:{name}</div>
            <div>Email:{email}</div>
            <div>Body:{body}</div>
        </div>
    );
};
