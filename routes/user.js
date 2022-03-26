const express = require("express");
const userController = require("../controllers/user");
const userValidation = require("../middleware/validation/user");
const { authenticate } = require("../middleware/auth");


const router = express.Router();



router.post("/signup",
             userValidation.validate("SIGNUP"),
             userController.signup
             );

router.post("/login",
             userValidation.validate("LOGIN"),
             userController.login 
             );


router.get("/",
            authenticate,
            userValidation.validate("GET"),
            userController.getAllUsers
            );             
router.get("_id",
               authenticate,
               userValidation.validate("GET"),
               userController.getUser
               );

router.get("/search",
            authenticate,
            userValidation.validate("GET"),
            userController.searchUser
            );
router.put("/update",
            authenticate,
            userController.updateUser
           );
router.patch("/patch",
           authenticate,
           userController.updateUser
          );

router.delete("/delete",
           authenticate,
           userController.updateUser
          );           
module.exports = router;
