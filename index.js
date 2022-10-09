const express = require('express');
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();


app.use(bodyParser.json());
app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("RESTful API"));
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

app.listen(5000, () => console.log(`Server listening on port: http://localhost:5000`));
