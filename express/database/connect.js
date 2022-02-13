const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWD}@learnnode.ow1z1.mongodb.net/database?retryWrites=true&w=majority`, (err) => {
        if (err) {
           return console.log(err)
        }

        return console.log('Connected to database')
    })
}

module.exports = connectToDatabase