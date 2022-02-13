//const { Person } = require("./person.js")
const dotenv = require('dotenv')
const connectToDatabase = require('./express/database/connect')

dotenv.config()

connectToDatabase()

require('./express/app')
//require('./modules/path')
//require('./modules/fs')
//require('./modules/http')

//const person = new Person("Fernando")
// console.log(person.sayMyName())