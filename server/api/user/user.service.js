const pool = require("../../config/database");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports = {

  createUser: (data,hashedPassword, callBack) => {
    pool.query(
      `insert into user(user_Name, email, password) 
                values(?,?,?)`,
      [
        data.user_Name,
        data.email,
        hashedPassword,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  loginUser: async (data, callBack) => {
      const user = data.user_Name
      const password = data.password
      
      pool.query(
        `select user_Name, password from user WHERE user_Name = ?`,
        [user],
        async  (error, results, fields) => {
          //console.log("Result123", results.length)
          if (error) {
            callBack(error);
          }
          if (results.length == 0) {
            console.log("--------> User does not exist")
            return callBack(null, results);
          }else {
                    const hashedPassword = results[0].password
                    //console.log("hashedPassword",hashedPassword)
                    try {
                      //const isMatch =  bcrypt.compare(password, hashedPassword);
                      //console.log("Check", isMatch);
                      if (await bcrypt.compare(password, hashedPassword)) {
                        console.log("---------> Login Successful");

                        // return callBack(null, `${user} is logged in!`);
                        const token = jwt.sign({ user: user }, 'secret_key', { expiresIn: '1h' });
            
                        // Return the token in the callback
                        return callBack(null, token);
                      } else {
                        console.log("---------> Password Incorrect");
                        return callBack(null, "Password incorrect!");
                      }
                    } catch (error) {
                      return callBack(error);
                    }
          }
        }
          
          // return callBack(null, results);
        
      );
  }
}


