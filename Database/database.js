import mongoose from 'mongoose';

mongoose.connect('url');

// Defining Schema
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password:String,
    firstname: String,
    middlename: String,
    lastname: String
    
    
})