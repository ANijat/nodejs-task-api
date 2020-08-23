const mongoose = require('mongoose')



mongoose.connect('mongodb://192.168.15.137:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



