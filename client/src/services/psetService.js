const psetsUrl = `http://139.59.225.245:3000/psets`;
const PsetService = {
    async createPset(payload) {
        try {
            return await fetch(`${psetsUrl}`, {
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

    async deletePset(psetID) {
        try {
            return await fetch(`${psetsUrl}?psetID=${psetID}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.log(error);
        };
    },

    async patchPset(psetID, payload) {
        try {
            return await fetch(`${psetsUrl}?psetID=${psetID}`, {
                method: 'PATCH',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(payload)
            })
        } catch (error) {
            console.log(error);
        };
    },

    async getCoursePset(courseID) {
        try {
            const res = await fetch(`${psetsUrl}/course?courseID=${courseID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async getStudentPset(studentID) {
        try {
            const res = await fetch(`${psetsUrl}/student?studentID=${studentID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async getAllPsets() {
        try {
            const res = await fetch(`${psetsUrl}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    },

    async getPset(psetID) {
        try {
            const res = await fetch(`${psetsUrl}/pset?psetID=${psetID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = PsetService;