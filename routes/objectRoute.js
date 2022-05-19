const express = require('express');
const { getAllObjects, addObject, getObject, updateObject, deleteObject } = require('../controllers/objectController');

const router = express.Router()

router
    .get('/', getAllObjects)
    .post('/', addObject)
    .get('/:id', getObject)
    .patch('/:id', updateObject)
    .delete('/:id', deleteObject);

module.exports = router;