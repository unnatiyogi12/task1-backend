import express from 'express';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    mobile_number:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    aadhar_number:{
        type: String,
        required: true, 
    },
    pan_number:{
        type: String,
        required: true, 
    },
    address:{
        type: String,
        required: true,
    }
})

export const User = mongoose.model('User', userSchema);