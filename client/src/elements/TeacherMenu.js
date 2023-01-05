import React from "react"
import { NavLink } from "react-router-dom"
import { faTableColumns, faIdCard, faTable } from '@fortawesome/free-solid-svg-icons'

import Logo from "./Logo"
import MenuButton from "./MenuButton"

const TeacherMenu = () => {
    return (
        <div className="menu has-background-primary">
            <Logo color="white" teacher/>
            <ul className="menu-list">
                <MenuButton
                    label="Dashboard"
                    icon={faTableColumns}
                    link="/teacher/dashboard"
                />
                <MenuButton
                    label="Classes"
                    icon={faIdCard}
                    link="/teacher/classes"
                />
                <MenuButton
                    label="Problem Sets"
                    icon={faTable}
                    link="/teacher/problem-sets"
                />
            </ul>
            <NavLink
                to="/teacher/profile"
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
                        Department of <br /> Computer Science
                    </p>
                </div>
            </NavLink>
        </div>
    )
}

export default TeacherMenu