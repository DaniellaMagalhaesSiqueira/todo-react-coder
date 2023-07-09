const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports =  mongoose.connect('mongodb://127.0.0.1/todo')
// module.exports = mongoose.connect('localhost','todo')
// module.exports = mongoose.connect('mongodb://localhost/todo')
// mongoose.connect('mongodb://localhost/todo')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.log('Failed to connect to MongoDB:', error);
//   });
