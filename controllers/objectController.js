const ObjectModel = require('../models/objectModel');

module.exports = {
    getAllObjects: async (req, res, next) => {
        try {
            const objects = await ObjectModel.find();
            
            res.status(200).json({
                status: 'Success',
                result: objects.length,
                data: {
                    objects
                }
            });
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                result: 0
            });
        }
    },
    getObject: async (req, res, next) => {
        try {
            const object = await ObjectModel.findById(req.params.id);
            
            res.status(200).json({
                status: 'Success',
                result: objects.length,
                data: {
                    object
                }
            });
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                result: 0
            });
        }
    },
    addObject: async (req, res, next) => {
        try {
            const object = await ObjectModel.create(req.body);
            
            res.status(200).json({
                status: 'Success',
                message: 'Object successfully added',
                result: {
                    object
                }
            });
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                result: 0
            });
        }
    },
    updateObject: async (req, res, next) => {
        try {
            const object = await ObjectModel.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
            
            res.status(200).json({
                status: 'Success',
                message: 'Object successfully updated',
                result: {
                    object
                }
            });
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                result: 0
            });
        }
    },
    deleteObject: async (req, res, next) => {
        try {
            const object = await ObjectModel.findByIdAndDelete(req.params.id);
            
            res.status(200).json({
                status: 'Success',
                message: 'Object successfully deleted'
            });
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                result: 0
            });
        }
    },
}