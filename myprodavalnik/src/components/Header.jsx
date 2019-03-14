import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <nav className="navbar-menu">
                <NavLink to="/" activeClassName="active" aria-current="page">My Prodavalnik</NavLink>
                <NavLink to="/posts/all" activeClassName="active">Всички обяви</NavLink>
                {localStorage.name
                    ?
                    <NavLink to={`/posts/my/${localStorage.userId}`} activeClassName="active">Мойте обяви</NavLink>
                    : null}
                {!localStorage.name
                    ? <NavLink to="/register">Регистрация</NavLink>
                    :
                    <NavLink to="/logout" onClick={props.logout}>Изход</NavLink>
                }
                {!localStorage.name
                    ? <NavLink to="/login">Вход</NavLink>
                    : <NavLink to={`/posts/my/${localStorage.userId}`}>Добре дошъл {localStorage.name}!</NavLink>}
            </nav>
        </header>
    )
}

export default Header