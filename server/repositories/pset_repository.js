class Pset {
    constructor(db, redis, errorHandler = null) {
        this.db = db;
        this.Redis = redis;
        this.errorHandler = errorHandler;
    };

    async createPset(courseID, psetTitle, psetDesc, dueDateTime, publish, floatTolerance) {
        try {
            let sql = `CALL create_pset(?, ?, ?, ?, ?, ?)`;
            let [pset, _] = await this.db.execute(sql, [
                courseID,
                psetTitle,
                psetDesc,
                dueDateTime,
                publish,
                floatTolerance
            ]);
            return pset;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async deletePset(psetID) {
        try {
            let sql = `CALL delete_pset(?)`;
            let [pset, _] = await this.db.execute(sql, [psetID]);
            return pset;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async patchPset(psetID, courseID, psetTitle, psetDesc, dueDateTime, publish, floatTolerance) {
        try {
            let sql = `CALL patch_pset(?, ?, ?, ?, ?, ?, ?)`;
            let [pset, _] = await this.db.execute(sql, [
                psetID,
                courseID,
                psetTitle,
                psetDesc,
                dueDateTime,
                publish,
                floatTolerance
            ]);
            return pset;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getCoursePset(courseID) {
        try {
            let sql = `CALL get_course_pset(?)`;
            let [pset, _] = await this.db.execute(sql, [courseID]);
            return pset[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getStudentPset(studentID) {
        try {
            let sql = `CALL get_student_pset(?)`;
            let [pset, _] = await this.db.execute(sql, [studentID]);
            return pset[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getAllPsets() {
        try {
            let sql = `CALL get_all_psets()`;
            let [pset, _] = await this.db.execute(sql);
            return pset[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getPset(psetID) {
        try {
            let sql = `CALL get_pset(?)`;
            let [pset, _] = await this.db.execute(sql, [psetID]);
            return pset[0][0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };
};

module.exports = Pset;