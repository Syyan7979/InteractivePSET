const CourseController = (CourseRepository) => {
    const controller = {
        async createCourse(req, res) {
            try {
                const {courseName, courseDesc, enrollmentKey, teacherID} = req.body;
                let data = await CourseRepository.createCourse(
                    courseName,
                    courseDesc,
                    enrollmentKey,
                    teacherID
                );

                res.status(201).json(
                    {
                        message: 'Course created successfully.',
                        data: data
                    }
                )
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async enrollCourse(req, res) {
            try {
                const {courseID, studentID} = req.body;
                let data = await CourseRepository.enrollCourse(
                    courseID,
                    studentID
                )

                res.status(200).json(
                    {
                        message: 'Enrolled to course successfully.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async deleteCourse(req, res) {
            try {
                const {courseID} = req.query;
                let data = await CourseRepository.deleteCourse(courseID);
                
                res.status(200).json(
                    {
                        message: 'Course deleted successfully.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async dropCourse(req, res) {
            try {
                const {courseID, studentID} = req.query;
                let data = await CourseRepository.dropCourse(
                    courseID,
                    studentID
                );

                res.status(200).json(
                    {
                        message: 'Course dropped successfully.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async patchCourse(req, res) {
            try {
                const {courseID} = req.query;
                const {courseName, courseDesc, enrollmentKey, teacherID} = req.body;
                let data = await CourseRepository.patchCourse(
                    courseID, 
                    courseName, 
                    courseDesc, 
                    enrollmentKey, 
                    teacherID
                );

                res.status(200).json(
                    {
                        message: 'Course patched successfully.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async getCourseStudent(req, res) {
            try {
                const {courseID, studentID} = req.query;
                let data = await CourseRepository.getCourseStudent(
                    courseID,
                    studentID
                );

                res.status(200).json(
                    {
                        message: 'Course of student successfully retrieved.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async getCourseTeacher(req, res) {
            try {
                const {courseID, teacherID} = req.query;
                console.log(req.query)
                let data = await CourseRepository.getCourseTeacher(
                    courseID,
                    teacherID
                );

                res.status(200).json(
                    {
                        message: 'Course of teacher successfully retrieved.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async getAllCoursesStudent(req, res) {
            try {
                const {studentID} = req.query;
                let data = await CourseRepository.getAllCoursesStudent(studentID);

                res.status(200).json(
                    {
                        message: 'Courses of student successfully retrieved.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async getAllCoursesTeacher(req, res) {
            try {
                const {teacherID} = req.query;
                let data = await CourseRepository.getAllCoursesTeacher(teacherID);

                res.status(200).json(
                    {
                        message: 'Courses of teacher successfully retrieved.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async enrollValidation(req, res) {
            try {
                const {courseID, enrollmentKey} = req.query;
                let data = await CourseRepository.enrollValidation(
                    courseID, 
                    enrollmentKey
                );

                res.status(200).json(
                    {
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async getStudentsInCourse(req, res) {
            try {
                const {courseID} = req.query;
                let data = await CourseRepository.getStudentsInCourse(courseID);

                res.status(200).json(
                    {
                        message: 'Students of a particular course successfully retrieved.',
                        data: data
                    }
                );
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        }
    };

    return controller;
};

module.exports = CourseController;