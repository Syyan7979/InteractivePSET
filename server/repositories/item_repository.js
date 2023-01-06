class Item {
    constructor(db, redis, errorHandler = null) {
        this.db = db;
        this.Redis = redis;
        this.errorHandler = errorHandler;
    };

    async createItem(psetID, courseID, itemNum, problem, postProblem, pointValue, parentID) {
        try {
            let sql = `CALL create_item(?, ?, ?, ?, ?, ?, ?)`;
            let [item, _] = await this.db.execute(sql, [
                psetID,
                courseID,
                itemNum,
                problem,
                postProblem,
                pointValue,
                parentID
            ]);
            return item;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async deleteItem(itemID) {
        try {
            let sql = `CALL delete_item(?)`;
            let [item, _] = await this.db.execute(sql, [itemID]);
            return item;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async readItemsFromPset(psetID) {
        try {
            let sql = `CALL read_items_from_pset(?)`;
            let [item, _] = await this.db.execute(sql, [psetID]);
            return item[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async itemPatching(itemID, psetID, courseID, itemNum, problem, postProblem, pointValue, parentID) {
        try {
            let sql = `CALL general_item_patching(?, ?, ?, ?, ?, ?, ?, ?)`;
            let [item, _] = await this.db.execute(sql, [
                itemID,
                psetID,
                courseID,
                itemNum,
                problem,
                postProblem,
                pointValue,
                parentID
            ]);
            return item;
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getAllItems() {
        try {
            let sql = `CALL get_all_items()`;
            let [item, _] = await this.db.execute(sql);
            return item[0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };

    async getItem(itemID) {
        try {
            let sql = `CALL get_item(?)`;
            let [item, _] = await this.db.execute(sql, [itemID]);
            return item[0][0];
        } catch (error) {
            // need to do error handling
            throw error;
        };
    };
};

module.exports = Item;