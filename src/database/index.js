import mongoose from 'mongoose'

const connectToDB = async() =>{
    try {
        await mongoose.connect('mongodb+srv://referrer-system:top-soap123@cluster0.cxatgxt.mongodb.net/test')
        console.log('conneted to MongoDB')
    } catch (error) {
        console.log("NOT CONNECTED TO DATABASE")
        console.log(error)
    }
}
export default connectToDB
// UZrtvC9SI3HgSWWH