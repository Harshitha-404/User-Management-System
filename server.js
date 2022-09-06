const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const connectDB = require("./server/database/connection");

dotenv.config({ path: "config.env" });

//morgan helps us to log the requests in the console (middleware)
app.use(morgan("tiny"));

//mongoDb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs"); //ejs is the template engine
//app.set("views", path.resolve(__dirname),"views/ejs")
/*      if we are placing all the ejs files in another folder inside "views" folder 
we have specify the path properly as like above     */

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

const PORT = process.env.PORT || 8080;

//loading routers in router.js
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running  on http://localhost:${PORT}`);
});
