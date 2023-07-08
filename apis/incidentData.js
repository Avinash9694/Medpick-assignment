import express from "express";
const router = express.Router();

const incidentData = [
  { id: 0, week: "", incidents: "" },
  { id: 1, week: "Week 1", incidents: "12" },
  { id: 6, week: "", incidents: "" },
  { id: 2, week: "Week 2", incidents: "28" },
  { id: 7, week: "", incidents: "" },
  { id: 3, week: "Week 3", incidents: "6" },
  { id: 8, week: "", incidents: "" },
  { id: 4, week: "Week 4", incidents: "17" },
  { id: 9, week: "", incidents: "" },
  { id: 5, week: "Week 5", incidents: "23" },
  { id: 10, week: "", incidents: "" },
];

router.get("/", (req, res) => {
  res.json(incidentData);
});

export default router;
