const courseUrl = `http://139.59.225.245:3000/courses`;
const CourseService = {
    async createCourse(payload) {
        try {
            return await fetch(`${courseUrl}`, {
                method: 'POST',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.log(error);
        }
    },

    async enrollCourse(payload) {
        try {
            return await fetch(`${courseUrl}/enroll`, {
                method: 'POST',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.log(error);
        }
    },

    async deleteCourse(courseID) {
        try {
            return await fetch(`${courseUrl}/delete?courseID=${courseID}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.log(error);
        }
    },

    async dropCourse(courseID, studentID) {
        try {
            return await fetch(`${courseUrl}/drop?courseID=${courseID}&studentID=${studentID}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.log(error);
        }
    },

    async patchCourse(courseID, payload) {
        try {
            return await fetch(`${courseUrl}?courseID=${courseID}`, {
                method: 'PATCH',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(payload)
            })
        } catch (error) {
            console.log(error);
        }
    },

    async getCourseStudent(courseID, studentID) {
        try {
            const res = await fetch(`${courseUrl}/coursestudent?courseID=${courseID}&studentID=${studentID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    },

    async getCourseTeacher(courseID, teacherID) {
        try {
            const res = await fetch(`${courseUrl}/courseteacher?courseID=${courseID}&teacherID=${teacherID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    },

    async getAllCoursesStudent(studentID) {
        try {
            const res = await fetch(`${courseUrl}/student?studentID=${studentID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    },

    async getAllCoursesTeacher(teacherID) {
        try {
            const res = await fetch(`${courseUrl}/teacher?teacherID=${teacherID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    },

    async enrollValidation(courseID, enrollmentKey) {
        try {
            const res = await fetch(`${courseUrl}/enroll?courseID=${courseID}&enrollmentKey=${enrollmentKey}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    },

    async getStudentsInCourse(courseID) {
        try {
            const res = await fetch(`${courseUrl}?courseID=${courseID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = CourseService;