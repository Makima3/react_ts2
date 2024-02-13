import {ICar} from "../intrerfaces/carInterface";
import {FC} from "react";
interface IProps{
    cars:ICar[]
}
export const Cars:FC<IProps> = ({cars}) => {
    return (
        <div>
            {}
        </div>
    );
};
