export const getCourseNameFromID = (courseID) => {
    // Change this code to grab course name from database using courseID
    if (courseID === 1) return "M21 WFU"
    else if (courseID === 2) return "ENGG150"
}

export const getProbSetsFromCourseID = (courseID, psets) => {
    return psets.filter((pset) => pset.courseID === courseID)
}

// Returns total correct points / total points
export const getAverageGrades = (courseID, psets) => {
    let selectedPsets = psets.filter((pset) => pset.courseID === courseID && pset.isCompleted)
    const totalPoints = 
        selectedPsets.reduce((acc, pset) => acc + pset.pointsTotal, 0)
    const totalCorrectPoints = 
        selectedPsets.reduce((acc, pset) => acc + pset.pointsCorrect, 0)
    return ((totalCorrectPoints/totalPoints)*100).toFixed(2);
}