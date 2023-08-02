const {Router} = require("express");
const router = Router();

router.get("/register", (req, res) => {
  return res.send("Please, register!")
})

module.exports = router;