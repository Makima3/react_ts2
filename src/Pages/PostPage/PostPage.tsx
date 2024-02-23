import {useLocation} from "react-router-dom";

export const PostPage = () => {

    const {state} = useLocation()
    return (
        <div>
            posts
        </div>
    );
};
