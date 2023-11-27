const mongoose = require('mongoose')

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/Citas_Doctor';
mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    //useCreateIndex: true,
    useNewUrlParser: true,
    //useFindAndModify: false
})

    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err))