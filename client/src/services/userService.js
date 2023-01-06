const usersUrl = `http://139.59.225.245:3000/users`;
const UserService = {
    async createUser(payload) {
        try {
            return await fetch(`${usersUrl}`, {
                method: 'POST',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.log(error);
        };
    },

    async deleteUser(userID) {
        try {
            return await fetch(`${usersUrl}?userID=${userID}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.log(error);
        };
    },

    async patchUser(userID, payload) {
        try {
            return await fetch(`${usersUrl}?userID=${userID}`, {
                method: 'PATCH',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.log(error);
        };
    },

    async getUser(userID) {
        try {
            const res = await fetch(`${usersUrl}/user?userID=${userID}`, {
                method: 'GET'
            });
            const resObj = res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async getAllUsers() {
        try {
            const res = await fetch(`${usersUrl}`, {
                method: 'GET'
            });
            const resObj = res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async getStudents() {
        try {
            const res = await fetch(`${usersUrl}/students`, {
                method: 'GET'
            });
            const resObj = res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async getTeachers() {
        try {
            const res = await fetch(`${usersUrl}/teachers`, {
                method: 'GET'
            });
            const resObj = res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async emailLoginValidation(userEmail, userPassword) {
        try {
            const res = await fetch(`${usersUrl}/email?userEmail=${userEmail}&userPassword=${userPassword}`, {
                method: 'GET'
            });
            const resObj = res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async usernameLoginValidation(userName, userPassword) {
        try {
            const res = await fetch(`${usersUrl}/username?userName=${userName}&userPassword=${userPassword}`, {
                method: 'GET'
            });
            const resObj = res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async userLogOut() {

    }
};

module.exports = UserService;