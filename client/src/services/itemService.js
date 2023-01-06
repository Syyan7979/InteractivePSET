const itemsUrl = `http://139.59.225.245:3000/items`;
const ItemService = {
    async createItem(payload) {
        try {
            return await fetch(`${itemsUrl}`, {
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

    async deleteItem(itemID) {
        try {
            return await fetch(`${itemsUrl}?itemID=${itemID}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.log(error);
        };
    },

    async readItemsFromPset(psetID) {
        try {
            const res = await fetch(`${itemsUrl}/pset?psetID=${psetID}`, {
                method: 'GET'
            });
            const resObj = await res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async itemPatching(itemID, payload) {
        try {
            return await fetch(`${itemsUrl}?itemID=${itemID}`, {
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

    async getAllItems() {
        try {
            const res = await fetch(`${itemsUrl}`, {
                method: 'GET'
            });
            const resObj = res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        };
    },

    async getItem(itemID) {
        try {
            const res = await fetch(`${itemsUrl}/item?itemID=${itemID}`, {
                method: 'GET'
            });
            const resObj = res.json();
            return resObj.data;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = ItemService;