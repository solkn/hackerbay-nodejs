const { body } = require("express-validator");

/**
 *
 * @param {String} type
 * LOGIN | SIGNUP
 */
exports.validate = (type) => {
  switch (type) {
    case "LOGIN":
      return [
        body("email").isEmail().withMessage("Invalid Email"),
        body("password").not().isEmpty().withMessage("Password is required"),
      ];
    case "SIGNUP":
      return [
        body("firstName").not().isEmpty().withMessage("First Name is required"),
        body("lastName").not().isEmpty().withMessage("Last Name is required"),
        body("email").isEmail().withMessage("Invalid email address"),
        body("password").not().isEmpty().withMessage("Password is required"),
      ];
      case "UPDATE":
        return [
          param("id")
            .custom((value) => {
              return mongoose.Types.ObjectId.isValid(value);
            })
            .withMessage("Invalid user ID"),
            body("firstName").optional().not().isEmpty()
            .withMessage("firstName is required"),
            body("lastName").optional().not().isEmpty()
            .withMessage("lastName sender is required"),
            body("email").optional().not().isEmpty()
            .withMessage("email is required"),
            body("password").optional().not().isEmpty()
            .withMessage("password is required"),
          
        ];
      case "DELETE":
        return [
          param("id")
            .custom((value) => {
              return mongoose.Types.ObjectId.isValid(value);
            })
            .withMessage("Invalid user ID"),
        ];
    default:
      return [];
  }
};