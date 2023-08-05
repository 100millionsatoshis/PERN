const { check } = require("express-validator");
const db = require("../db");
//password
const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage(
    "Kalit so'z kamida 6 ta ko'pi bilan 15 ta ishoradan iboradan bo'lishi kerak."
  );
//email
const email = check("email")
  .isEmail()
  .withMessage("Iltimos emailni to'g'ri kiriting.");
//check if email exists
const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query("SELECT * FROM talaba WHERE email = $1", [
    value,
  ]);
  if (rows.length) {
    throw new Error("Ushbu email allaqachon ro'yxatdan o'tgan.");
  }
});

module.exports = {
  registerValidation: [email, password, emailExists],
};
