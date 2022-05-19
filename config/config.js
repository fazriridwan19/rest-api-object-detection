require('dotenv').config();
module.exports = {
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_DOMAIN: process.env.MONGO_DOMAIN,
    MONGO_METRIC_0: process.env.MONGO_METRIC_0,
    MONGO_METRIC_1: process.env.MONGO_METRIC_1,
    MONGO_METRIC_2: process.env.MONGO_METRIC_2,
    MONGO_DB: process.env.MONGO_DB
}