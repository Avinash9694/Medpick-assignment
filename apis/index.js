import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import incidentData from "./incidentData.js";
import expensesData from "./expensesData.js";
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/incident", incidentData);
app.use("/api/expenses", expensesData);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
