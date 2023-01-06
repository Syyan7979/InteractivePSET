var express = require('express');
var router = express.Router();

const ItemsRepository = require('../repositories/item_repository');
const db = require('../middleware/mysql_data_access');
const Redis = require('../middleware/redis_cache');
const controller = require('../controllers/item_controller')(new ItemsRepository(db, Redis));

/* GET home page. */
router.post('', controller.createItem);

router.delete('', controller.deleteItem);

router.get('/pset', controller.readItemsFromPset);

router.patch('', controller.itemPatching);

router.get('', controller.getAllItems);

router.get('/item', controller.getItem);

module.exports = router;