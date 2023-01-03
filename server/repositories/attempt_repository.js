class Attempt {
    constructor(db, redis) {
        this.db = db;
        this.Redis = redis;
    };

    async createAttempt(itemID, psetID, courseID, studentID, studentFeedback, isCorrect, floatAns, submitDate) {
        try {
            let sql = `CALL create_attempt(?, ?, ?, ?, ?, ?, ?, ?)`;
            let [attempt, _] = await this.db.execute(sql,[
                itemID,
                psetID, 
                courseID, 
                studentID, 
                studentFeedback, 
                isCorrect, 
                floatAns, 
                submitDate
            ]);
            return attempt;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async deleteAttempt(attemptID) {
        try {
            let sql = `CALL delete_attempt(?)`;
            let [attempt, _] = await this.db.execute(sql, [attemptID]);
            return attempt;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async readAttemptsFromItem(itemID, studentID) {
        try {
            let sql = `CALL read_attempts_from_item(?, ?)`;
            let [attempt, _] = await this.db.execute(sql, [
                itemID,
                studentID
            ]);
            return attempt[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async attemptPatch(attemptID, itemID, psetID, courseID, studentID, studentFeedback, isCorrect, floatAns, submitDate) {
        try {
            let sql = `CALL general_attempt_patching(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            let [attempt, _] = await this.db.execute(sql,[
                attemptID,
                itemID,
                psetID, 
                courseID, 
                studentID, 
                studentFeedback, 
                isCorrect, 
                floatAns, 
                submitDate
            ]);
            return attempt;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };
}

module.exports = Attempt;