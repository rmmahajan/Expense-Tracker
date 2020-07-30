const Transacrion = require('../models/Transaction');
const Transaction = require('../models/Transaction');



// get all transactions
// get api/v1/transactions
//public
exports.getTransactions = async (req,res,next) => {

    try{
        const transactions = await Transacrion.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    }
    catch(error){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }

}


// add transactions
// post api/v1/transactions
// public
exports.addTransactions = async (req,res,next) => {

    try {

        const { text, amount } = req.body;
    
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });
        
    } catch (error) {

        if(error.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });

        }else{
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
        
    }

}



// delete transactions
// delete api/v1/transactions
// public
exports.deleteTransactions = async (req,res,next) => {

    res.send('Get transactions');

}