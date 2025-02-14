import { User } from "../models/associations.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const authentificationController = {
  handleSignin: async (req, res, next) => {
    res.json({ message: "Route atteinte" });
    console.log("tote");

    try {
      const { email, password } = req.body;
      console.log(req.body);

      const findUser = await User.findOne({
        where: { email },
      });

      console.log(findUser);

      if (!findUser) {
        return next();
      }

      const checkPassword = await argon2.verify(findUser.password, password);

      if (!checkPassword) {
        return next();
      }

      console.log(checkPassword);
    } catch (error) {
      console.log(error);
    }
  },

  
};

export default authentificationController;
