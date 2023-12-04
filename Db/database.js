const mongoose = require('mongoose');
const URL = 'mongodb+srv://siva1234:siva1234@bloggingsite.ku3ehjl.mongodb.net/blogging_site'

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
        process.exit()
    }
}
database();

