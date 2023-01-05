import React from "react"
import Select from 'react-select'

import departmentsList from "../../utils/departmentsList.json"

const TeacherProfile = () => {
    return (
        <div>
            <h2>My profile</h2>

            <label>
                Profile Image
            </label>
            <div className="box is-flex is-align-items-center mt-2 p-5">
                <figure className="image is-96x96 has-text-centered">  
                    <img
                        src="http://placekitten.com/g/96"
                        alt="Profile pic"
                        className="is-rounded"
                    />
                </figure>
                
                <div className="ml-5">
                    <button className="button">
                        Change profile picture
                    </button>
                    <p className="has-text-gray is-italic is-size-7">Maximum filesize is 8MB.</p>
                </div>
            </div>
            <div className="columns p-4">
                <div className="mr-6">
                    <label>First name</label>
                    <input className="input mt-1" type="text" placeholder="Juan"/>
                </div>

                <div>
                    <label>Last name</label>
                    <input className="input mt-1" type="text" placeholder="Dela Cruz"/>
                </div>
            </div>
            <div className="p-1">
                <label>Department</label>
                <Select
                    className="mt-2"
                    placeholder="Select a degree program..."
                    options={departmentsList}
                />
            </div>
        </div>
    )
}

export default TeacherProfile