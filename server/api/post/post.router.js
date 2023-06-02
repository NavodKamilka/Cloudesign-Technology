const router = require("express").Router();

const {
  createPost,
  getCommentById,
  getPost,
  createComment
} = require("./post.controller");

router.get("/getPost", getPost);
router.post("/createPost",  createPost);
router.get("/:id/getComment",  getCommentById);
router.post("/createComment",  createComment);

module.exports = router;
