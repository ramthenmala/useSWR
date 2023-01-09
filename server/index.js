import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { recentInvestment } from "./data/recentinvestment.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/recentinvestment', (req, res, next) => {
    res.send(recentInvestment)
});

app.listen(9001, () => {
    console.log('app listening on 9001');
})