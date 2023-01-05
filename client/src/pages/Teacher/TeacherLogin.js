import React from "react"
import { Link } from "react-router-dom"

import Logo from "../../elements/Logo"
import TextLink from "../../elements/TextLink"

const Login = () => {
    return (
        <div className="modal is-active">
            <div className="modal-background has-background-primary"></div>
            <div className="modal-content box login-modal has-text-centered p-6">
                 <Logo color="primary" teacher/>
                 <input className="input is-medium mb-3" type="text" placeholder="E-mail"/>
                 <input className="input is-medium mb-3" type="password" placeholder="Password"/>
                 <Link to="/teacher/dashboard" style={{textDecoration: "none"}}>
                    <button className="button is-light is-fullwidth is-medium">
                        Login
                    </button>
                 </Link>
                 <TextLink
                    label="Forgot password?"
                    path="/"
                 />

                 <hr className="has-background-light-gray"/>
                 Don’t have an account? <Link to="/teacher/apply">Apply for one</Link>
            </div>
        </div>
    )
}

export default Login