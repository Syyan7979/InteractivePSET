import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

import { tempProbSets, tempCourses } from "./utils/tempFiles"
import { getCourseNameFromID } from "./services/general"

const getProblemSets = () => {
    // Change this code to grab from database instead of the tempProbSets object
    return tempProbSets
}

const getActiveCourses = () => {
    // Change this code to grab from database instead of the tempCourses list
    return tempCourses
}

const Dashboard = () => {
    let unansweredProbSets = getProblemSets().length;
    return (
        <div>
            <h2>Upcoming problem sets ({unansweredProbSets})</h2>
            <hr className="is-fullwidth has-background-gray mb-2"/>
            <table className="table is-hoverable">
                {getProblemSets()
                .filter((pset) => pset.dueDateTime > Math.floor(new Date().getTime() / 1000))
                .map((pset) => {
                    return (
                        <tr>
                            <td className="has-text-weight-bold">
                                [{getCourseNameFromID(pset.courseID)}]
                            </td>
                            <td>
                                {pset.psetTitle}
                            </td>
                            <td>
                                { pset.isCompleted ?
                                <p className="is-complete">
                                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2"/>
                                    Completed
                                </p>
                                :
                                <p className="is-deadline">
                                    <FontAwesomeIcon icon={faCircleExclamation} className="mr-2"/>
                                    Due: {new Date(pset.dueDateTime * 1000)
                                    .toLocaleDateString('en-us', {
                                        year:"numeric", month:"short", day:"numeric"
                                    })}
                                </p>
                                
                                
                                }
                            </td>
                            <td>
                                { pset.isCompleted ?
                                    <a
                                        href="/#"
                                        className="has-text-gray has-text-weight-normal is-size-7">
                                        Review
                                    </a>
                                    :
                                    <a href="/#" className="is-size-7">Answer</a>
                                }
                            </td>
                        </tr>
                    )
                })}
            </table>
            <h2>My active courses</h2>
            <hr className="is-fullwidth has-background-gray mb-2"/>
            <table className="table is-hoverable">
                {getActiveCourses().map((course) => {
                    return (
                        <tr>
                            <td className="has-text-weight-bold">
                                [{getCourseNameFromID(course)}]
                            </td>
                            <td>
                                <Link
                                    to="/grades"
                                    state={{ dashboardCourse: course }}
                                    className="is-size-7"
                                >
                                    See problem sets
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Dashboard