import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav className="nav">
                <NavLink to="/">Мейн</NavLink>
                <NavLink to="/video">Концерты</NavLink>
                <NavLink to="/posts">Посты</NavLink>
            </nav>
        </header>
    )
}