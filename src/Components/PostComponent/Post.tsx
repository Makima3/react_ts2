import {FC} from "react";
import {IPosts} from "../../interfaces";
interface IProps{
    posts: IPosts
}

export const Post:FC<IProps> = ({posts}) => {
    const {id, userId, title, body } = posts
    return (
        <div>
            <div><b>ID</b>: {id}</div>
            <div><b>UserId</b>: {userId}</div>
            <div><b>Title</b>: {title}</div>
            <div><b>Body</b>: {body}</div>
        </div>
    );
};

