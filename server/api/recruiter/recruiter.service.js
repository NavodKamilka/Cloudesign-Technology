const pool = require("../../config/database");

module.exports = {
  
    getPositions: (id, callBack) => {
        pool.query(
          `select * from positions`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },

    editPosition: (id,position_name,applied_count, callBack) => {
        pool.query(
        `UPDATE positions SET position_name = ?, applied_count = ? WHERE id = ?`,
        [position_name, applied_count, id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },


 
};


