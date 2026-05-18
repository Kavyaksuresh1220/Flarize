const express = require("express");

const {
  getLeads,
  addLead,
  updateLead,
  deleteLead,
} = require("../controller/controller");

const router = express.Router();

router.get("/getLeads", getLeads);

router.post("/api/leads", addLead);

router.put("/api/updateLead/:id", updateLead);

router.delete("/api/deleteLead/:id", deleteLead);

module.exports = router;