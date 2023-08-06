const db = require("../db");

exports.getUsers = async (req, res) => {
  try {
    console.log("here", db);
    const response = await db.query("select * from talaba");
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  try {
    console.log("validation passed");
  } catch (error) {
    console.log(error.message);
  }
};
