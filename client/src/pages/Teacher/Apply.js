import React from "react"
import Select from "react-select"
import { Link } from "react-router-dom"

import Logo from "../../elements/Logo"
import departmentsList from "../../utils/departmentsList.json"

const Apply = () => {
    return (
        <div className="modal is-active">
            <div className="modal-background has-background-primary"></div>
            <div className="modal-content box login-modal has-text-centered p-6">
                <Logo color="primary" teacher/>
                <p className="has-text-gray">
                    Your request will be sent to your respective <b>department </b>
                    and the <b>StudyBuddy administrators</b>. You will receive an
                    email once your account has been approved.
                </p>
                <input className="input is-medium mb-3" type="text" placeholder="E-mail"/>
                <input className="input is-medium mb-3" type="text" placeholder="First name"/>
                <input className="input is-medium mb-3" type="text" placeholder="Last name"/>
                <Select
                    className="mb-2 has-text-left"
                    placeholder="Department"
                    options={departmentsList}
                />
                <button className="button is-light is-fullwidth is-medium mb-6">
                    Request for an account
                </button>

                 Already have an account? <Link to="/teacher/login">Log in</Link>
            </div>
        </div>
    )
}

export default Apply