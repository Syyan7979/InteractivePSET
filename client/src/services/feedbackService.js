const feedbackUrl = `http://159.65.143.207:5000/feedback`;
const FeedbacksService = {
    async feedbackPut(feedbackID, payload) {
        try {
            return await fetch(`${feedbackUrl}/feedback_put/${feedbackID}`, {
                method: 'PUT',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.log(error);  
        };
    },

    async feedbackPost(feedbackID, payload) {
        try {
            return await fetch(`${feedbackUrl}/feedback_post/${feedbackID}`, {
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

    async feedbackDelete(feedbackID) {
        try {
            return await fetch(`${feedbackUrl}/feedback_delete/${feedbackID}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.log(error);  
        };
    },

    async feedBackCheck(feedbackID) {
        try {
            const res = await fetch(`${feedbackUrl}/check/${feedbackID}`, {
                method: 'GET'
            });
            return await res.json();
        } catch (error) {
            console.log(error);  
        };
    }
};

module.exports = FeedbacksService;