const {
    createUser,
    loginUser
  } = require("./user.service");
  const bcrypt = require("bcrypt")
  
  
  module.exports = {

    createUser: async (req, res) => {
      const hashedPassword = await bcrypt.hash(req.body.password,10);
      //console.log("Password",hashedPassword)
      const body = req.body;
      createUser(body , hashedPassword , (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },

    loginUser:  (req, res) => {
      const body = req.body;
      loginUser(body , (err, results) => {
        //console.log("Result",results)
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
          
        });
      });
    },
    
  };
  