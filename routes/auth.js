const Router = require("express");
const router = new Router();

const { check } = require("express-validator");

const role = require("../middleware/role");

const { registration, login, getUsers } = require("../controllers/auth");

router.post(
  "/registration",
  [
    check("username", "Username cannot be empty").notEmpty(),
    check(
      "password",
      "Password cannot be less than 4 and more then 10 characters"
    ).isLength({ min: 4, max: 10 }),
  ],
  registration
);
router.post("/login", login);
router.get("/users", role(["ADMIN"]), getUsers);

module.exports = router;
