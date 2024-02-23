import {useAppLocation} from "../../hooks";
import {Posts} from "../../Components";

export const PostPage = () => {

    const {state: postId} = useAppLocation<any>()

    return (
        <div>
            <Posts postId={postId}/>
        </div>
    );
};
