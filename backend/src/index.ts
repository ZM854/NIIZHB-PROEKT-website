import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("server is working");
});

async function startApp() {
    try {
        app.listen(3000, () => {
            console.log("Server started")
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()