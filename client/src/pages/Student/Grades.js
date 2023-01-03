import React from "react"
import Select from "react-select"

// Temporary student course list
const courses = ["ENGG150", "M21 WFU", "P72 THX", "CS31"]

const getCourses = (courses) => {
    // NOTE: change this to grab from database, currently accepts lists
    const courseListOptions = []
    courses.map((course) => 
        courseListOptions.push({value: course, label: course})
    )

    return courseListOptions
}

const Grades = () => {
    return (
        <div>
            <h2>Grades</h2>
            <div className="p-1">
                <label>Select a course to view</label>
                <Select
                    className="mt-2"
                    placeholder="Select a course..."
                    options={getCourses(courses)}
                />
            </div>
            
            <h3>Problem sets</h3>
        </div>
    )
}

export default Grades