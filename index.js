const express = require('express');
const mongoose = require('mongoose');
const { MONGO_PASSWORD, MONGO_USER, MONGO_METRIC_0, MONGO_METRIC_1, MONGO_METRIC_2, MONGO_DB } = require('./config/config');
const objectRouter = require('./routes/objectRoute');

const app = express();

const connectWithRetry = () => {

    // const mongoUrl = 'mongodb://localhost:27017/proj-kp'
    const mongoUrl = 'mongodb+srv://fazri:123@fr-001.qxwjp.mongodb.net/proj-kp?retryWrites=true&w=majority'
    mongoose
        .connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Connect to database"))
        .catch((e) => {
            console.log(e);
            setTimeout(connectWithRetry, 5000);
        });
}

connectWithRetry()

app.use(express.json());

app.use('/api/v1/objects', objectRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening to server'));