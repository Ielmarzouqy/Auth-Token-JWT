const mongoose = require('mongoose');
const app = require('../express/app');


const connect = () =>{
    mongoose.connect(`mongodb://127.0.0.1:27017/AlloMedia`)
    .then(res => console.log(`connected, result : ${res}`))
    .catch(console.log)
}
module.exports = connect;
