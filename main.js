const express = require("express");
const app = express();
const port = 3000;

app.get("/",
    (
        req,
        res
    ) => {
        res.send("HELLLOOO");
    }
)

app.listen(
    port,
    () => {
        console.log("The app has started to run")
    }
)