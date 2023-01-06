import React from "react"
import classNames from "classnames"

const Logo = ({ color, teacher=false }) => {
    return (
        <p className={classNames(
            "logo is-flex is-flex-direction-column",
            {
                "has-text-white": color === "white",
                "has-text-dark": color === "dark",
                "has-text-primary": color === "primary",
            }
        )}>
            <span>StudyBuddy</span>
            { teacher && <span className="is-size-7">for Teachers</span> }
        </p>
    )
}

export default Logo