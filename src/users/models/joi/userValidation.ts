import Joi from "joi";
import UserInterface from "../../interfaces/UserInterface";

const userValidation = (user: UserInterface) => {
  const schema = Joi.object({
    _id: Joi.string().allow(""),
    username: Joi.string().min(2).max(256).trim().required(),
    email: Joi.string()
      .trim()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({ message: 'user "mail" mast be a valid mail' })
      .required(),
    password: Joi.string()
      .trim()
      .ruleset.regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
      )
      .rule({
        message:
          'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
      })
      .required(),
    isAdmin: Joi.boolean().allow(""),
  });
  return schema.validate(user);
};

export default userValidation;
