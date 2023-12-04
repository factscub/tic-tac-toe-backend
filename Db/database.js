const mongoose = require('mongoose');
const URL = 'mongodb+srv://bethasiva7780:bethasiva7780@cluster0.yyo2dch.mongodb.net'

async function database() {

    mongoose.set('strictQuery', true);
    try {
         mongoose.connect(URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: true, //make this also true
        })
        console.log('Database connected successful. ');

    } catch (error) {
        console.log(error);
        // process.exit(1)
    }
}
database();

