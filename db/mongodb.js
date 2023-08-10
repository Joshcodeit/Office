// import mongoose from 'mongoose';

// const connectDB = handler => async (req, res) => {
//     console.log(process.env.MONGODB_URI);
//     if (mongoose.connections[0].readyState) {
//         // Use current db connection
//         return handler(req, res);
//     }
//     // Use new db connection
//     await mongoose.connect(
//         `${process.env.DB_HOST}/${process.env.DB_NAME}`
//         ,
//         {
//             auth: {
//                 username: process.env.DB_USERNAME,
//                 password: process.env.DB_PASSWORD,
//             },
//             authSource: "admin",
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//         },
//         {
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true,
//             useNewUrlParser: true
//         });
//     return handler(req, res);
// };

// export default connectDB;




















const mongoAddress =  process.env.MONGO_URI

const mongoose = require("mongoose");
const connection = mongoose.createConnection(
    mongoAddress
);




export default connection;