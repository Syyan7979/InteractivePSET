class User {
    constructor(db, redis, errorHandler = null) {
        this.db = db;
        this.Redis = redis;
        this.errorHandler = errorHandler;
    };

    async createUser(userName, userEmail, userPassword, userDP, firstName, lastName, userRole) {
        try {
            let sql = `CALL create_user(?, ?, ?, ?, ?, ?, ?)`;
            let [user, _] = await this.db.execute(sql, [
                userName,
                userEmail,
                userPassword,
                userDP,
                firstName,
                lastName,
                userRole
            ]);
            return user;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async deleteUser(userID) {
        try {
            let sql = `CALL delete_user(?)`;
            let [user, _] = await this.db.execute(sql, [userID]);
            return user;
        } catch (error) {
            // need to do error handling
            throw error;
        }
    };

    async patchUser(userID, userName, userEmail, userPassword, userDP, firstName, lastName, userRole) {
        try {
            let sql =  `CALL patch_user(?, ?, ?, ?, ?, ?, ?, ?)`;
            let [user, _] = await this.db.execute(sql, [
                userID, 
                userName, 
                userEmail, 
                userPassword, 
                userDP, 
                firstName, 
                lastName, 
                userRole
            ]);
            return user;   
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getUser(userID) {
        try {
            let sql = `CALL get_user(?)`;
            let [user, _] = await this.db.execute(sql, [userID]);
            return user[0][0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getAllUsers() {
        try {
            let sql = `CALL get_all_users()`;
            let [users, _] = await this.db.execute(sql);
            return users[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getStudents() {
        try {
            let sql = `CALL get_students()`;
            let [students, _] = await this.db.execute(sql);
            return students[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getTeachers() {
        try {
            let sql = `CALL get_teachers()`;
            let [teachers, _] = await this.db.execute(sql);
            return teachers[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async emailLoginValidation(userEmail, userPassword) {
        try {
            let sql = `CALL email_login_validation(?, ?)`;
            let [user, _] = await this.db.execute(sql, [
                userEmail,
                userPassword
            ]);
            return user[0].length > 0 ? user[0][0] : false;
        } catch (error) {
            // need to do error handling
            throw error;
        }
    };

    async usernameLoginValidation(userName, userPassword) {
        try {
            let sql = `CALL user_name_login_validation(?, ?)`;
            let [user, _] = await this.db.execute(sql, [
                userName,
                userPassword
            ]);
            return user[0].length > 0 ? user[0][0] : false;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };
}

module.exports = User;