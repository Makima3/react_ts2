import {useEffect, useState} from "react";
import {IList} from "../../interfaces";
import {listService} from "../../services";
import {List} from "./List";

export const Lists = () => {
    const [lists, setLists] = useState<IList[]>([])

    useEffect(() => {
        listService.getAll().then(({data}) => setLists(data))
    }, [])

    return (
        <div>
            {
                lists.map(list => <List key={list.id} list={list}/>)
            }
        </div>
    );
};

