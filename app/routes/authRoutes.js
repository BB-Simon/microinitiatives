const router = require("express").Router();
const signupValidator = require("../validator/auth/signupValidator");
const loginValidator = require("../validator/auth/loginValidator");
const forgetPasswordValidator = require("../validator/auth/forgetPasswordValidator");
const resetPasswordValidator = require("../validator/auth/resetPasswordValidator");
const changePasswordValidator = require("../validator/auth/changePasswordValidator");
const {
  signupController,
  activateAccountController,
  loginController,
  forgetPasswordController,
  resetPasswordController,
  changePasswordController,
  editUser,
  getLoggedinUser,
  getPublicProfileUser,
} = require("../controllers/authController");

const isAuthenticated = require("../middlewares/authenticate");
const upload = require("../middlewares/uploadMiddleware");

router.post("/signup", signupValidator, signupController);
router.post("/activate-account", activateAccountController);
router.post("/login", loginValidator, loginController);
router.post(
  "/forget-password",
  forgetPasswordValidator,
  forgetPasswordController
);
router.post("/reset-password", resetPasswordValidator, resetPasswordController);
router.post(
  "/change-password",
  isAuthenticated,
  changePasswordValidator,
  changePasswordController
);
router.put("/edit-user", isAuthenticated, upload.single("avatar"), editUser);
router.get("/get-loggedin-user", isAuthenticated, getLoggedinUser);
router.get(
  "/get-public-profile-user/:userId",
  isAuthenticated,
  getPublicProfileUser
);

module.exports = router;