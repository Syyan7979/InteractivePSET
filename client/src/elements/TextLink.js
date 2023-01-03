import React from "react";
import { Link } from "react-router-dom" 

const TextLink = ({
    label,
    path,
}) => {
    return (
        <div className="mt-3">
            <Link to={path}>
                <a href="/#">{label}</a>
            </Link>
        </div>
    )
}

export default TextLink
