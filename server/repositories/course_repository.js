class Course {
    
    constructor(db, redis, errorHandler = null) {
        this.db = db;
        this.Redis = redis;
        this.errorHandler = errorHandler;
    }

    async createCourse(courseName, courseDesc, enrollmentKey, teacherID ) {
        try {
            let sql = `CALL create_course(?, ?, ?, ?)`;
            let [course, _] = await this.db.execute(sql, [
                courseName,
                courseDesc,
                enrollmentKey,
                teacherID,
            ]);
            return course;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async enrollCourse(courseID, studentID){
        try {
            let sql = `CALL enroll_course(?, ?)`;
            let [course, _] = await this.db.execute(sql, [
                courseID, 
                studentID
            ]);
            return course;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async deleteCourse(courseID){
        try {
            let sql = `CALL delete_course(?)`;
            let [course, _] = await this.db.execute(sql, [courseID]);
            return course;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async dropCourse(courseID, studentID){
        try {
            let sql = `CALL drop_course(?, ?)`;
            let [course, _] = await this.db.execute(sql, [
                courseID, 
                studentID
            ]);
            return course;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async patchCourse(courseID, courseName, courseDesc, enrollmentKey, teacherID){
        try {
            let sql = `CALL patch_course(?, ?, ?, ?, ?)`;
            let [course, _] = await this.db.execute(sql, [
                courseID, 
                courseName,
                courseDesc,
                enrollmentKey,
                teacherID
            ]);
            return course;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getCourseStudent(courseID, studentID){
        try {
            let sql = `CALL get_course_student(?, ?)`;
            let [course, _] = await this.db.execute(sql, [
                courseID, 
                studentID
            ]);
            return course[0][0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getCourseTeacher(courseID, teacherID){
        try {
            let sql = `CALL get_course_teacher(?, ?)`;
            let [course, _] = await this.db.execute(sql, [
                courseID, 
                teacherID
            ]);
            return course[0][0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getAllCoursesStudent(studentID){
        try {
            let sql = `CALL get_all_courses_student(?)`;
            let [courses, _] = await this.db.execute(sql, [studentID]);
            return courses[0];
        } catch (error) {ß
            // need to do error handling
            throw error;
        };
    };

    async getAllCoursesTeacher(teacherID){
        try {
            let sql = `CALL get_all_courses_teacher(?)`;
            let [courses, _] = await this.db.execute(sql, [teacherID]);
            return courses[0];
        } catch (error) {ß
            // need to do error handling
            throw error;
        };
    };

    async enrollValidation(courseID, enrollmentKey){
        try {
            let sql = `CALL enroll_validation(?, ?)`;
            let [course, _] = await this.db.execute(sql, [
                courseID, 
                enrollmentKey
            ]);
            return course[0][0].match_exists > 0 ? true : false
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getStudentsInCourse(courseID){
        try {
            let sql = `CALL get_students_in_course(?)`;
            let [course, _] = await this.db.execute(sql, [courseID]);
            return course[0][0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };
};

module.exports = Course;