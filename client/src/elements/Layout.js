import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"

import Menu from "./Menu"

const Layout = ({
    showMenu = true,
}) => {
    return (
        <Fragment>
            <div className="columns">
                <div className="column is-2">
                    {showMenu ? <Menu/> : null}
                </div>
                <div className="column content m-6">
                    <Outlet/>
                </div>
            </div>
        </Fragment>
    )
}

export default Layout