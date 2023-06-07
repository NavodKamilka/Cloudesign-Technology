const {
  getPositions,
  editPosition,
} = require("./recruiter.service");

const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';


module.exports = {
  
  getPositions: (req, res) => {
    try {
      const token = req.headers.authorization;

      const decodedToken = jwt.verify(token, secretKey);
      const userId = decodedToken.user_Id;
      //console.log("USerID",decodedToken)

      getPositions(userId, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        success: 0,
        message: 'Invalid token'
      });
    }
  },

  editPosition: (req, res) => {
    try {
      const token = req.headers.authorization;

      const decodedToken = jwt.verify(token, secretKey);
      const userId = decodedToken.user_Id;
      //console.log("USerID",decodedToken)

      const positionId = req.body.id;
      const position_name = req.body.position_name;
      const applied_count = req.body.applied_count;

      // console.log("sdhgsh",positionId,position_name,applied_count)

      editPosition(positionId,position_name,applied_count, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        success: 0,
        message: 'Invalid token'
      });
    }
  },

 
  
};


  