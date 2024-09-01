import express from "express";
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
require("dotenv").config();
let app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () =>{
    console.log("running server at port:", port);
})