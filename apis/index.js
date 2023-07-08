import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import incidentData from "./incidentData.js";

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/incident", incidentData);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
