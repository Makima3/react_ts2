import {useEffect, useState} from "react";
import {IComments} from "../../interfaces";
import {commentService} from "../../services";
import {Comment} from "./Comment";

export const Comments = () => {

    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

