const express = require('express');
const router = express.Router();
const {getTable, createTable, updateTable, deleteTable } = require('../controllers/tableControllers');


router.route('/').get(getTable).post(createTable)
// router.get('/', getTable);
// router.post('/',createTable);

router.route('/:id').put(updateTable).delete(deleteTable)
// router.put('/:id',updateTable);
// router.delete('/:id',deleteTable);


module.exports = router;