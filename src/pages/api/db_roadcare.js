import connectDB from "../../../db/mongodb"
import Reg from "../../../db/models/roadcare"


/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/


const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}


export default function handler(req, res) {

  try {

    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }

    const body = req.body

    // console.log(body);

    var registration = new Reg({
      situation: body?.situation || " ",
      vehicleType: body?.vehicleType || " ",
      issue: body?.issue || " ",
      licenseNo: body?.licenseNo || " ",
      location: body?.location || " ",
      otherInfo: body?.otherInfo || " ",
      personalDetails: {
        lastName: body?.contactDetails?.lastName || " ",
        firstName: body?.contactDetails?.firstName || " ",
        phone: body?.contactDetails?.phone || " ",
      }
    });
    // Create new user
    var usercreated = registration.save();
    return res.status(200).send("registration created");
  } catch (error) {
    console.log(error);
  }

}


