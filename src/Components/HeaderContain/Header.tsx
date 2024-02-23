import {NavLink} from "react-router-dom";
import css from './Header.module.css'

export const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'todos'}>Lists</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};
