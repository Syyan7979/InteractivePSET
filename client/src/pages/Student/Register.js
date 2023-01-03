import React from "react"
import { Link } from "react-router-dom"

import Logo from "../../elements/Logo"

const Register = () => {
    return (
        <div className="modal is-active">
            <div className="modal-background has-background-primary"></div>
            <div className="modal-content box login-modal has-text-centered p-6">
                <Logo color="primary"/>
                <input className="input is-medium mb-3" type="text" placeholder="E-mail"/>
                <input className="input is-medium mb-3" type="password" placeholder="Password"/>
                <input className="input is-medium mb-3" type="password" placeholder="Confirm Password"/>
                <button className="button is-light is-fullwidth is-medium mb-6">
                    Create an account
                </button>

                 Already have an account? <Link to="/login">Log in</Link>
            </div>
        </div>
    )
}

export default Register