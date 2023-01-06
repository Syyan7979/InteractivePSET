import React, { Fragment } from "react"
import { Outlet, useLocation } from "react-router-dom"

import Menu from "./Menu"
import TeacherMenu from "./TeacherMenu"

const Layout = ({
    showMenu = true,
}) => {
    const location = useLocation();
    const module = location.pathname.split("/")[1]

    return (
        <Fragment>
            <div className="columns">
                <div className="column is-2">
                    {module === "teacher" ?
                        showMenu && <TeacherMenu /> :
                        showMenu && <Menu />
                    }
                </div>
                <div className="column content m-6">
                    <Outlet/>
                </div>
            </div>
        </Fragment>
    )
}

export default Layout