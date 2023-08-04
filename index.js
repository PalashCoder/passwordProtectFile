import express from "express";
import bodyParser from "body-parser";
import dirname from "path";
import fileURLToPath from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    var pass = req.body.password;
    if (pass === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.send("<center><h1><b><i>Unabailable Password!</i></b></h1></center>");
    }
});
app.listen(port, () => {
    console.log(`Server is online at port ${port} !`);
});