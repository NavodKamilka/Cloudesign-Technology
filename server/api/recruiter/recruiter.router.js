const router = require("express").Router();

const {
//   createPost,
//   getCommentById,
  getPositions,
  editPosition,
//   createComment
} = require("./recruiter.controller");

router.get("/getPositions", getPositions);
router.post("/editPosition",  editPosition);
// router.get("/:id/getComment",  getCommentById);
// router.post("/createComment",  createComment);

module.exports = router;
