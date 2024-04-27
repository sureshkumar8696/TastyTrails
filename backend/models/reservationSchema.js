import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return !/\d/.test(value); // Check if the value contains any digits
      },
      message: "First name cannot contain digits.",
    },
    minLength: [3, "First name must be of at least 3 characters."],
    maxLength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return !/\d/.test(value); // Check if the value contains any digits
      },
      message: "Last name cannot contain digits.",
    },
    minLength: [3, "Last name must be of at least 3 characters."],
    maxLength: [30, "Last name cannot exceed 30 characters."],
  },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        // Check if the date is greater than or equal to today's date
        return value >= new Date(new Date().setHours(0, 0, 0, 0));
      },
      message: "Date must be today or later.",
    },
  },
  time: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Check if the time is in the future
        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return value > currentTime;
      },
      message: "Time must be in the future.",
    },
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 digits."],
    maxLength: [10, "Phone number must contain 10 digits."],
    validate: {
      validator: function (value) {
        // Check if the value starts with a digit from 1 to 9 and contains exactly 10 digits
        return /^[1-9]\d{9}$/.test(value);
      },
      message:
        "Phone number must start with a non-zero digit and contain exactly 10 digits.",
    },
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
