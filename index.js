const express = require('express');
const mongoose = require('mongoose');
const { MONGO_PASSWORD, MONGO_USER, MONGO_METRIC_0, MONGO_METRIC_1, MONGO_METRIC_2, MONGO_DB } = require('./config/config');
const objectRouter = require('./routes/objectRoute');

const app = express();

const connectWithRetry = () => {
    const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_METRIC_0},${MONGO_METRIC_1},${MONGO_METRIC_2}/${MONGO_DB}?replicaSet=atlas-10erm1-shard-0&ssl=true&authSource=admin`;
    mongoose
        .connect(mongoUrl)
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