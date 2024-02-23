import {FC} from "react";
import {IAlbums} from "../../interfaces";
interface IProps{
    album: IAlbums
}
export const Album:FC<IProps> = ({album}) => {
    const {id, userId, title} = album
    return (
        <div>
            <div><b>Id</b>: {id}</div>
            <div><b>UserId</b>: {userId}</div>
            <div><b>Title</b>: {title}</div>
            <hr/>
            <hr/>
        </div>
    );
};

