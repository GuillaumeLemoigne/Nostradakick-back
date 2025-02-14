import { User } from "../models/associations.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const authentificationController = {

	handleSignin: async (req, res, next) => {
		
    try {
		const { email, password } = req.body;

    //   console.log(req.body);

    	const findUser = await User.findOne({
        where: { email },
    	});

    //   console.log(findUser);

    	if (!findUser) {
		return res.status(404).json({message:"Utilisateur non trouvé"});
        // return next();
    	}
    //  Vérification que le hashage fait par argon 2 est bon
		if (!findUser.password.startsWith('$argon2')) {
        return res.status(500).json({message:'Le hachage n\'est pas au format argon2.'});
    	}

    	const checkPassword = await argon2.verify(findUser.password, password);

    	if (!checkPassword) {
		return res.status(401).json({message:"Mot de passe erroné"});
        // return next();
    	}
	
	const token = jwt.sign(req.body, process.env.JWT_SECRET, { expiresIn: '5h' });
	return res.status(200).json({ message: "Bravo tu est connecté!", token: token });


    } catch (error) {
    	console.log(error);
    }
	},
};

export default authentificationController;
