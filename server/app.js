require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const postRouter = require("./api/post/post.router");
const userRouter = require("./api/user/user.router");

const app = express();
app.use(express.json());

app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use("/api/post", postRouter);
app.use("/api/user", userRouter);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
