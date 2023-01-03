import React from "react"
import { NavLink } from "react-router-dom"
import { faTableColumns, faIdCard, faTable } from '@fortawesome/free-solid-svg-icons'

import Logo from "./Logo"
import MenuButton from "./MenuButton"

const Menu = () => {
    return (
        <div className="menu has-background-primary">
            <Logo color="white"/>
            <ul className="menu-list">
                <MenuButton
                    label="Dashboard"
                    icon={faTableColumns}
                    link="/dashboard"
                />
                <MenuButton
                    label="Enrollment"
                    icon={faIdCard}
                    link="/enrollment"
                />
                <MenuButton
                    label="Grades"
                    icon={faTable}
                    link="/grades"
                />
            </ul>
            <NavLink
                to="/profile"
                className="button profile-button"
            >
                <figure className="image is-48x48 mr-2">  
                    <img
                        src="http://placekitten.com/g/48"
                        alt="Profile pic"
                        className="is-rounded"
                    />
                </figure>
                <div className="has-text-left">
                    <p className="is-size-6">
                        Juan Dela Cruz
                    </p>
                    <p className="has-text-weight-normal is-size-7">
                        BS Civil Engineering
                    </p>
                </div>
            </NavLink>
        </div>
    )
}

export default Menu