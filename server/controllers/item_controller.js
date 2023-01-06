const ItemsController = (ItemsRepository) => {
    const controller = {
        async createItem(req, res) {
            try {
                const {psetID, courseID, itemNum, problem, postProblem, pointValue, parentID} = req.body;
                let data = await ItemsRepository.createItem(
                    psetID, 
                    courseID, 
                    itemNum, 
                    problem, 
                    postProblem, 
                    pointValue, 
                    parentID
                );

                res.status(201).json(
                    {
                        message: 'Item created successfully.',
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

        async deleteItem(req, res) {
            try {
                const {itemID} = req.query;
                let data = await ItemsRepository.deleteItem(itemID);

                res.status(200).json(
                    {
                        message: 'Item deleted successfully.',
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

        async readItemsFromPset(req, res) {
            try {
                const {psetID} = req.query;
                let data = await ItemsRepository.readItemsFromPset(psetID);

                res.status(200).json(
                    {
                        message: 'Items for pset successfully retrieved.',
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

        async itemPatching(req, res) {
            try {
                const {itemID} = req.query;
                const {psetID, courseID, itemNum, problem, postProblem, pointValue, parentID} = req.body;
                let data = await ItemsRepository.itemPatching(
                    itemID, 
                    psetID, 
                    courseID, 
                    itemNum, 
                    problem, 
                    postProblem, 
                    pointValue, 
                    parentID
                );

                res.status(200).json(
                    {
                        message: 'Item patched successfully.',
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

        async getAllItems(req, res) {
            try {
                let data = await ItemsRepository.getAllItems();

                res.status(200).json(
                    {
                        message: 'Items successfully retrieved.',
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

        async getItem(req, res) {
            try {
                const {itemID} = req.query;
                let data = await ItemsRepository.getItem(itemID);
                res.status(200).json(
                    {
                        message: `Item ${itemID} successfully retrieved.`,
                        data: data
                    }
                );
            } catch (error) {
                es.status(500).json(
                    {
                        message: error.message
                    }
                );
            }
        }
    };

    return controller;
}

module.exports = ItemsController