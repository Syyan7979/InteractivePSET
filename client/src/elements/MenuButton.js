import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuButton = ({
    label,
    icon,
    link,
    state,
}) => {
    return (
        <NavLink
            className="menu-button py-3"
            to={link}
            state={state}
            >
            <FontAwesomeIcon className="mr-3" icon={icon} size="1x"/>
            {label}
        </NavLink>
    )
}

export default MenuButton