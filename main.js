const express = require("express");
const app = express();
const port = 3000;

app.get("/",
    (
        req,
        res
    ) => {
        res.send("HELLLOOO");
        console.log("someone logged in here");
    }
)

app.listen(
    port,
    () => {
        console.log("The app has started to run")
    }
)