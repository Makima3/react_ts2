import {FC, useEffect, useState} from "react";
import {IPosts} from "../../interfaces";
import {postService} from "../../services";
import {Post} from "./Post";

interface IProps {
    postId: number
}

export const Posts: FC<IProps> = ({postId}) => {

    const [posts, setPosts] = useState<IPosts>(null)

    useEffect(()=>{
        postService.getByPostId(postId).then(({data})=> setPosts(data))
    },[postId])

    return (
        <div>
            {
                posts && <Post posts={posts}/>
            }
        </div>
    );
};

