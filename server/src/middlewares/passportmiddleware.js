const passport = require("passport");
const { Strategy } = require("passport-jwt");
const { SECRET } = require("../constants");
const db = require("../db");

//This function is used to get the JWT from the incoming request cookies. 
//When a user makes a request, this function checks if there is a cookie named "token" and returns its value.

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) token = req.cookies["token"];
  return token;
};

//OPtions for JWT strategy

const opts = {
  secretOrKey: SECRET,
  jwtFromRequest: cookieExtractor,
};

passport.use(
  new Strategy(opts, async ({ id }, done) => {
    try {
      const { rows } = await db.query(
        "SELECT student_id, email FROM talaba WHERE student_id = $1",
        [id]
      );
      if (!rows.length) {
        throw new Error("401 not authorized (Ruxsat berilmagan)");
      }
      let user = { id: rows[0].student_id, email: rows[0].email };

      return await done(null, user);
    } catch (error) {
      console.log(error.message);
      done(null, false);
    }
  })
);
