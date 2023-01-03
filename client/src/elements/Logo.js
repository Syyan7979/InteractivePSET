import React from "react"
import classNames from "classnames"

const Logo = ({ color }) => {
    return (
        <p className={classNames("logo",
            {
                "has-text-white": color === "white",
                "has-text-dark": color === "dark",
                "has-text-primary": color === "primary",
            }
        )}>
            StudyBuddy
        </p>
    )
}

export default Logo