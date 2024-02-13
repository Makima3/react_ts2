import {IComment} from "../interfaces/commentInterface";
import {FC} from "react";
import {Comment} from "./Comment";

interface IProps {
    comments: IComment[]
}

export const Comments: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};
