import {IComments} from "../../interfaces";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

interface IProps {
    comment: IComments
}
export const Comment:FC<IProps> = ({comment}) => {

    const {id, name, postId, email, body} = comment

    const navigate = useNavigate()
        return (
            <div>
                <div><b>Id</b>: {id}</div>
                <div><b>PostId</b>: {postId}</div>
                <div><b>Email</b>: {email}</div>
                <div><b>name</b>: {name}</div>
                <div><b>Body</b>: {body}</div>
                <button onClick={()=> navigate('posts', {state: {postId}})}>To post</button>
                <hr/>
                <hr/>
            </div>
        );
    };
