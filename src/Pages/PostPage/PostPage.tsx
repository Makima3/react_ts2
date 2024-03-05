import {useAppLocation} from "../../hooks";
import {Posts} from "../../Components";

export const PostPage = () => {

    const {state: {postId}} = useAppLocation<{postId: number}>()

    return (
        <div>
            <Posts postId={postId}/>
        </div>
    );
};
