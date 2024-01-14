const db = require("../db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants");

exports.getUsers = async (req, res) => {
  try {
    console.log("here", db);
    const response = await db.query("select student_id, email from talaba");

    return res.status(200).json({
      success: true,
      talaba: response.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    await db.query("insert into talaba(email, password) values ($1 , $2)", [
      email,
      hashedPassword,
    ]);

    return res.status(201).json({
      success: true,
      message: "Ro'yxatdan o'tildi",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  let user = req.user;
  let payload = {
    id: user.student_id,
    email: user.email,
  };
  try {
    const token = await sign(payload, SECRET);
    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Kirish amalga oshdi",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
    console.log(error.message);
  }
};

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("token", { httpOnly: true })
      .json({
        success: true,
        message: "Chiqish muvaffaqiyatli amalga oshdi",
      });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
    console.log(error.message);
  }
};
