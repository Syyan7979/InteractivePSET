import React from "react"

const Enrollment = () => {
    return (
        <div className="enrollment-container is-flex is-justify-content-center is-align-items-center">
            <div className="enrollment-box">
                <h2>Enrollment</h2>
                <p>Enter the class code provided by your professor to enroll to a new class:</p>
                <input className="input is-medium mb-3" type="input" placeholder="Class code"/>
                <button className="button is-light is-fullwidth is-medium">
                    Confirm
                </button>
            </div>
    </div>
        
    )
}

export default Enrollment