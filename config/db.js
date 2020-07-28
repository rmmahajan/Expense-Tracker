const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://manvi:manvi@expensetracker.rjgt0.mongodb.net/ExpenseTracker?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;