import mongoose from 'mongoose';
import connection from '../mongodb';

var registration = new mongoose.Schema({
    situation: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    licenseNo: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    otherInfo: {
        type: String,
        required: true
    },
    personalDetails: {
        lastName: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    }
});

// mongoose.models = {};

var Reg = connection.model('Roadcare', registration);

export default Reg;