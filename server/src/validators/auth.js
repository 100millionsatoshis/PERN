const { check } = require("express-validator");
const db = require("../db");
const { compare } = require("bcryptjs");
//password
const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage(
    "Kalit so'z kamida 6 ta ko'pi bilan 15 ta ishoradan iboradan bo'lishi kerak."
  );
//email
const email = check("email")
  .isEmail()
  .withMessage("Iltimos emailni to'g'ri kiriting.")
  .custom(async (emailValue, { req }) => {
    console.log("Email value in request:", req.body);
  });
//check if email exists
const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query("SELECT * FROM talaba WHERE email = $1", [
    value,
  ]);
  if (rows.length) {
    throw new Error("Ushbu email allaqachon ro'yxatdan o'tgan.");
  }
});

//login validation
const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * FROM talaba WHERE email = $1", [value]);
  if (!user.rows.length) {
    throw new Error("Ushbu email xali ro'yxatdan o'tmagan");
  }
  const validPassword = await compare(req.body.password, user.rows[0].password);

  if (!validPassword) {
    throw new Error("Kalitso'z (parol) notug'ri");
  }
  req.user = user.rows[0];
});

module.exports = {
  registerValidation: [email, password, emailExists],
  loginValidation: [loginFieldsCheck],
};
