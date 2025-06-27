import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength: [3,"Whoa there! A first name needs at least 3 characters,even superheroes have more than 2!"],
        maxLength: [30,"Easy there, Shakespeare! First name can't be that long, keep it under 30 characters!"],
    },lastName:{
        type:String,
        required: true,
        minLength: [3,"Whoa there! A Last name needs at least 3 characters,even superheroes have more than 2!"],
        maxLength: [30,"Easy there, Shakespeare! Last name can't be that long, keep it under 30 characters!"],
    },
    email:{
        type:String,
        required: true,
        validate: [validator.isEmail,"Looks like your email forgot how to be an email. Give it another shot!!"],

    },
    phone:{
        type: String,
        required:true,
        minLength: [10,"Phone numbers aren't hide-and-seek, we need all 10 digits to call you!"],
        maxLength: [10,"Phone numbers aren't hide-and-seek, we need all 10 digits to call you!"],
    },
    time:{
        type: String,
        required: true,
    },date:{
        type: String,
        required: true,
    }
});

export const Reservation = mongoose.model("Reservation",reservationSchema);