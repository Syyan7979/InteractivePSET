const attemptsUrl = `http://139.59.225.245/attempts`;
const AttemptService = {
    async createAttempt(payload) {
        try {
            return await fetch(`${attemptsUrl}`, {
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

    async deleteAttempt(attemptID) {
        try {
            return await fetch(`${attemptsUrl}?attemptID=${attemptID}`, {
                method: "DELETE"
            });   
        } catch (error) {
            console.log(error);
        }
    },

    async readAttemptsFromItem(itemID, studentID) {
        try {
            const res = await fetch(`${attemptsUrl}/item?itemID=${itemID}&studentID=${studentID}`, {
                method: "GET"
            });

            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    },

    async attemptPatch(attemptID, payload) {
        try {
            return await fetch(`${attemptsUrl}?attemptID=${attemptID}`, {
                method: 'PATCH',
                headers: {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify(payload)
            });
        } catch (error) {
            console.log(error);
        }
    },

    async getAttempt(attemptID) {
        try {
            const res = await fetch(`${attemptsUrl}/attempt?attemptID=${attemptID}`, {
                method: "GET"
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = AttemptService;