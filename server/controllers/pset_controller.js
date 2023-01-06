const PsetService = (PsetsRepository) => {
    const controller = {
        async createPset(req, res) {
            try {
                const {courseID, psetTitle, psetDesc, dueDateTime, publish, floatTolerance} = req.body;
                let data = await PsetsRepository.createPset(
                    courseID, 
                    psetTitle, 
                    psetDesc, 
                    dueDateTime, 
                    publish, 
                    floatTolerance
                );

                res.status(201).json(
                    {
                        message: 'Pset created successfully.',
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

        async deletePset(req, res) {
            try {
                const {psetID} = req.query;
                let data = await PsetsRepository.deletePset(psetID);

                res.status(200).json(
                    {
                        message: 'Pset deleted successfully.',
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

        async patchPset(req, res) {
            try {
                const {psetID} = req.query;
                const {courseID, psetTitle, psetDesc, dueDateTime, publish, floatTolerance} = req.body;
                let data = await PsetsRepository.patchPset(
                    psetID,
                    courseID, 
                    psetTitle, 
                    psetDesc, 
                    dueDateTime, 
                    publish, 
                    floatTolerance
                );

                res.status(200).json(
                    {
                        message: 'Pset patched successfully.',
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

        async getCoursePset(req, res) {
            try {
                const {courseID} = req.query;
                let data = await PsetsRepository.getCoursePset(courseID);

                res.status(200).json(
                    {
                        message: 'Course psets successfully retrieved.',
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

        async getStudentPset(req, res) {
            try {
                const {studentID} = req.query;
                let data = await PsetsRepository.getStudentPset(studentID);

                res.status(200).json(
                    {
                        message: 'Student psets successfully retrieved.',
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

        async getAllPsets(req, res) {
            try {
                let data = await PsetsRepository.getAllPsets();

                res.status(200).json(
                    {
                        message: 'Psets successfully retrieved.',
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

        async getPset(req, res) {
            try {
                const {psetID} = req.query;
                let data = await PsetsRepository.getPset(psetID);

                res.status(200).json(
                    {
                        message: `Pset ${psetID} successfully retrieved.`,
                        data: data
                    }
                )
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            }
        }
    };

    return controller;
};

module.exports = PsetService;