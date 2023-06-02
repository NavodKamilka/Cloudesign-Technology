const pool = require("../../config/database");

module.exports = {
  createPost: (data, callBack) => {
    pool.query(
      `insert into post(post_title, post_description) 
                values(?,?)`,
      [
        data.post_title,
        data.post_description
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getCommentById: (id, callBack) => {
    pool.query(
      `select comment_des from comment WHERE post_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPost: callBack => {
    pool.query(
      `select * from post`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  createComment: (data, callBack) => {
    pool.query(
      `insert into comment(comment_des,post_id) 
                values(?,?)`,
      [
        data.comment_des,
        data.post_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  
};
