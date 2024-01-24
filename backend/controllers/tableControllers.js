const asyncHandler = require('express-async-handler')

const getTable = asyncHandler( async (req,res) => {
    res.status(200).json({message:"get table from controller"});
});

const createTable = asyncHandler( async (req, res) => {
    /* 400 is mention error */

    /* below is normal error */
    // if (!req.body.text) {
    //     res.status(400).json({ errMsg: "Empty text message"});
    // }

    /** use express error mechanisam, then(postman res is html but we need json so ->) use midlware */
    if (!req.body.text) {
        res.status(400);
        throw new Error('pls enter text field');
    }
    res.status(200).json({message:"create table from controller"});
});

const updateTable = asyncHandler( async (req,res) => {
    res.status(200).json({message: `update table from controller ${req.params.id}`});
});

const deleteTable = asyncHandler( async (req,res) => {
    res.status(200).json({message: `delete table from controller ${req.params.id}`});
});

module.exports = {
    getTable,
    createTable,
    updateTable,
    deleteTable,
}