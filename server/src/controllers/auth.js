const db = require("../db");
const { hash } = require("bcryptjs");

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
