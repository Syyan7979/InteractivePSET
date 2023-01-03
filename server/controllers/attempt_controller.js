const AttemptsController = (attemptsRepository) => {
    const controller = {
        async createAttempt(req, res) {
            try {
                const {itemID, psetID, courseID, studentID, studentFeedback, isCorrect, floatAns, submitDate} = req.body;
    
                const data = await attemptsRepository.createAttempt(
                    itemID, 
                    psetID, 
                    courseID, 
                    studentID, 
                    studentFeedback, 
                    isCorrect, 
                    floatAns, 
                    submitDate
                );
    
                res.status(201).json(
                    {
                        message: 'Attempt successfully created.',
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
    
        async deleteAttempt(req, res) {
            try {
               const {attemptID} = req.query;
               const data = await attemptsRepository.deleteAttempt(attemptID);
    
               res.status(200).json(
                    {
                        message: 'Attempt deleted successfully.',
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
    
        async readAttemptsFromItem(req, res) {
            try {
                const {itemID, studentID} = req.query;
                const data = await attemptsRepository.readAttemptsFromItem(
                    itemID,
                    studentID
                );
    
                res.status(200).json(
                    {
                        message: 'Attempts from item successfully retrieved.',
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
    
        async attemptPatch(req, res) {
            try {
                const {attemptID} = req.query;
                const {itemID, psetID, courseID, studentID, studentFeedback, isCorrect, floatAns, submitDate} = req.body;
                const data = await attemptsRepository.attemptPatch(
                    attemptID,
                    itemID, 
                    psetID, 
                    courseID, 
                    studentID, 
                    studentFeedback, 
                    isCorrect, 
                    floatAns, 
                    submitDate
                );
    
                res.status(200).json(
                    {
                        message: 'Attempt successfully patched.',
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
    }

    return controller;
}

module.exports = AttemptsController;