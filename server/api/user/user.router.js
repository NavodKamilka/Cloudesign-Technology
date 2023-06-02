const router = require("express").Router();

const {
  createUser,
  loginUser,
} = require("./user.controller");

// router.get("/getPost", getPost);
router.post("/createUser",  createUser);
router.post("/loginUser",  loginUser);
// router.get("/:id/getComment",  getCommentById);
// router.post("/createComment",  createComment);

module.exports = router;