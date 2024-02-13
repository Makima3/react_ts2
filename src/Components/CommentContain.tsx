import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {useEffect, useState} from "react";
import {IComment} from "../interfaces/commentInterface";
import {commentService} from "../services/commentService";

export const CommentContain = () => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <hr/>
            <Comments comments={comments}/>

        </div>
    );
};

