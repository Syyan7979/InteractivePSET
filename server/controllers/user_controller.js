const UserController = (UsersRepository, jwt, CryptoJS) => {
    const controller = {
        async createUser(req, res) {
            try {
                const {userName, userEmail, userPassword, userDP, firstName, lastName, userRole} = req.body;
                const hashedPassword = CryptoJS.SHA256(userPassword).toString();
                const data = await UsersRepository.createUser(
                    userName, 
                    userEmail, 
                    hashedPassword, 
                    userDP, 
                    firstName, 
                    lastName, 
                    userRole
                );
                
                const newUser = await UsersRepository.usernameLoginValidation(userName, hashedPassword);
                const token = jwt.sign(newUser, process.env.JWT_SECRET, {expiresIn: "15m"});

                res.cookie('token', token);
                res.status(201).json(
                    {
                        message: 'User Created Successfully.',
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

        async deleteUser(req, res) {
            try {
                const {userID} = req.query;
                let data = await UsersRepository.deleteUser(userID);

                res.status(200).json(
                    {
                        message: 'User successfully deleted.',
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

        async patchUser(req, res) {
            try {
                const {userID} = req.query;
                const {userName, userEmail, userPassword, userDP, firstName, lastName, userRole} = req.body;
                const hashedPassword = userPassword !== null ? CryptoJS.SHA256(userPassword).toString() : null;
                const data = await UsersRepository.patchUser(
                    userID, 
                    userName, 
                    userEmail, 
                    hashedPassword, 
                    userDP, 
                    firstName, 
                    lastName, 
                    userRole
                )

                res.status(200).json(
                    {
                        message: 'User successfully patched.',
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

        async getUser(req, res) {
            try {
                const {userID} = req.query;
                const data = await UsersRepository.getUser(userID);

                res.status(200).json(
                    {
                        message: 'User retrieved successfully.',
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

        async getAllUsers(req, res) {
            try {
                const data = await UsersRepository.getAllUsers();

                res.status(200).json(
                    {
                        message: 'Users retrieved successfully.',
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

        async getStudents(req, res) {
            try {
                const data = await UsersRepository.getStudents();

                res.status(200).json(
                    {
                        message: 'Student users retrieved successfully.',
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

        async getTeachers(req, res) {
            try {
                const data = await UsersRepository.getTeachers();

                res.status(200).json(
                    {
                        message: 'Teacher users retrieved successfully.',
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

        async emailLoginValidation(req, res) {
            try {
                const {userEmail, userPassword} = req.query;
                const hashedPassword = CryptoJS.SHA256(userPassword).toString();
                let data = await UsersRepository.emailLoginValidation(userEmail, hashedPassword);
                
                if (!data) {
                    res.status(401).json(
                        {
                            message: 'Invalid credentials.'
                        }
                    )
                } else {
                    const token = jwt.sign(data, process.env.JWT_SECRET, {expiresIn: "15m"});
                    res.cookie('token', token);
                    res.status(200).json(
                        {
                            message: 'Login Successful',
                            data: data
                        }
                    );
                }
            } catch (error) {
                res.status(500).json(
                    {
                        message: error.message
                    }
                );
            };
        },

        async usernameLoginValidation(req, res) {
            try {
                const {userName, userPassword} = req.query;
                const hashedPassword = CryptoJS.SHA256(userPassword).toString();
                let data = await UsersRepository.usernameLoginValidation(userName, hashedPassword);
                
                if (!data) {
                    res.status(401).json(
                        {
                            message: 'Invalid credentials.'
                        }
                    )
                } else {
                    const token = jwt.sign(data, process.env.JWT_SECRET, {expiresIn: "15m"});
                    res.cookie('token', token);
                    res.status(200).json(
                        {
                            message: 'Login Successful',
                            data: data
                        }
                    );
                }
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

module.exports = UserController;