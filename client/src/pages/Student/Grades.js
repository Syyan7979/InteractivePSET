import React, { useState, useEffect } from "react"
import Select from "react-select"
import { useLocation } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

import { tempCourses, tempProbSets } from "./utils/tempFiles"
import {
    getCourseNameFromID,
    getProbSetsFromCourseID,
    getAverageGrades
} from "./services/general"

// Temporary student course list
const getCourses = () => {
    // NOTE: change this to grab from database, currently accepts lists
    const courseListOptions = []
    tempCourses.map((course) => 
        courseListOptions.push({
            value: course,
            label: getCourseNameFromID(course)
        })
    )
    return courseListOptions
}

const Grades = () => {
    const [selectedCourse, setSelectedCourse] = useState(null)
    const location = useLocation()
    const { dashboardCourse } = location.state || null

    useEffect(() => {
        if (dashboardCourse)  setSelectedCourse({
            value: dashboardCourse,
            label: getCourseNameFromID(dashboardCourse)
            })
    }, [])

    return (
        <div>
            <h2>Grades</h2>
            <div className="p-1">
                <label>Select a course to view</label>
                <Select
                    className="mt-2"
                    placeholder="Select a course..."
                    options={getCourses()}
                    defaultValue={selectedCourse}
                    value={selectedCourse}
                    onChange={setSelectedCourse}
                />
            </div>
            
            <h3>Problem sets</h3>
            <hr className="is-fullwidth has-background-gray mb-2"/>
            <table className="table is-hoverable">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Grade</th>
                        <th>Due date</th>
                        <th></th>
                    </tr>
                </thead>
                {selectedCourse ?
                    getProbSetsFromCourseID(selectedCourse?.value, tempProbSets).map((pset) => {
                        return (
                            <tr>
                                <td>
                                    { pset.isCompleted ? 
                                        <FontAwesomeIcon icon={faCheckCircle} className="is-complete mr-2" />
                                        : <FontAwesomeIcon icon={faCircleExclamation} className="is-deadline mr-2" />
                                    }
                                    <span className="has-text-weight-bold">
                                        {pset.psetTitle}
                                    </span>
                                </td>
                                <td>
                                    {pset.isCompleted ?
                                        <span>
                                            {pset.pointsCorrect} / {pset.pointsTotal}{" "}
                                            ({((pset.pointsCorrect / pset.pointsTotal) * 100).toFixed(2)}%)
                                        </span>
                                        :
                                        <span className="has-text-danger is-italic">
                                            Not completed yet
                                        </span>
                                    }
                                    
                                </td>
                                <td>
                                    {new Date(pset.dueDateTime * 1000)
                                    .toLocaleDateString('en-us', {
                                        year:"numeric", month:"short", day:"numeric"
                                    })}
                                </td>
                                <td>
                                    { pset.isCompleted ?
                                        <a href="/#" className="is-size-7">
                                            Review
                                        </a>
                                        :
                                        <span className="is-size-7 has-text-gray">
                                            Review
                                        </span>
                                    }
                                    
                                </td>
                            </tr>
                        )
                    })
                : null}
            </table>

            {selectedCourse && 
                <table className="table is-bordered">
                    <td className="has-text-weight-bold">
                        Current average
                    </td>
                    <td>
                        {getAverageGrades(selectedCourse?.value, tempProbSets)}%
                    </td>
                </table>
            }
            
        </div>
    )
}

export default Grades