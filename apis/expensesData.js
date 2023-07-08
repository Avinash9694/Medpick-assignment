import express from "express";
const router = express.Router();

const expensesData = [
  { id: 1, week: "45000 Services Charges", incidents: "45000" },

  { id: 2, week: "30000 Spares", incidents: "30000" },

  { id: 3, week: "10000 AMC", incidents: "10000" },

  { id: 4, week: "15000 CMC", incidents: "15000" },
];

router.get("/", (req, res) => {
  res.json(expensesData);
});

export default router;
