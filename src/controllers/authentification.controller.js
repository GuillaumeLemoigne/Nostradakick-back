import emailValidator from 'email-validator';
import PasswordValidator from 'password-validator';
import { User } from '../models/associations.js';
import argon2 from 'argon2';

const schema = new PasswordValidator();

schema
    .is().min(8) // Doit faire minimum 8 caractères
    .is().max(64) // Doit faire 64 caractères maximum
    .has().uppercase() // Doit contenir au moins une majuscule
    .has().lowercase() // Doit contenir au moins une minuscule
    .has().digits(1) // Doit contenir au moins un chiffre
    .has().symbols(1); // Doit contenir au moins un symbole

    // Test de valiation:
    console.log(schema.validate('validPASS123!'));


const authentificationController = {
    handleSignupSubmissionForm: async (req, res) => {
        try {

            res.redirect("/signin");
        } catch {

        }
    },

    handleSigninSubmissionForm: async (req, res) => {
        try {

            res.redirect("/api/predicition");

        } catch {
            
        }
    }
};

export default authentificationController;