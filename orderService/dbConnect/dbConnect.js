import mongoose from "mongoose";

function connectDb() {
    mongoose.connect('mongodb://127.0.0.1:27017/orderSchema', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error('Database connection error:', error));
}

export default connectDb;
