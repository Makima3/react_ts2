import {useEffect, useState} from "react";
import {IAlbums} from "../../interfaces";
import {albumService} from "../../services";
import {Album} from "./Album";

export const Albums = () => {

    const [albums, setAlbums] = useState<IAlbums[]>([])

    useEffect(() => {
        albumService.getAll().then(({data}) => setAlbums(data))
    }, [])
    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

