const express = require("express");

const {
  getLeads,
  addLead,
  updateLead,
  deleteLead,
  dashboardData
} = require("../controller/controller");

const router = express.Router();

router.get("/getLeads", getLeads);

router.post("/api/leads", addLead);

router.put("/api/updateLead/:id", updateLead);

router.delete("/api/deleteLead/:id", deleteLead);

router.get("/api/dashboard", dashboardData);

module.exports = router;