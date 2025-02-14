import {User} from "../models/associations.js";
import argon2 from 'argon2';
import jwt from "jsonwebtoken";

const authentificationController = {
    handleSignupSubmissionForm: async (req, res) => {
        try {

            res.redirect("/signin");
        } catch {

        }
    },

    handleSignin: async (req, res) => {
        try {

            res.redirect("/api/predicition");

        } catch {

        }
    }
};

export default authentificationController;