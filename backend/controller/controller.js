const Lead = require("../model/model");



exports.getLeads = async (req, res) => {

  try {

    const leads = await Lead.find();

    res.status(200).json(leads);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};





exports.addLead = async (req, res) => {

  console.log("Inside Add Lead Method");

  console.log(req.body);

  const {
    fullName,
    phone,
    email,
    location,
    status
  } = req.body;

  try {

    const newLead = new Lead({
      fullName,
      phone,
      email,
      location,
      status
    });

    await newLead.save();

    res.status(200).json({
      message: "Lead Added Successfully",
      newLead
    });

  } catch (err) {

    res.status(500).json({
      message: "Server Error",
      err
    });

  }

};





exports.updateLead = async (req, res) => {

  try {

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedLead);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};





exports.deleteLead = async (req, res) => {

  try {

    await Lead.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Lead deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

exports.dashboardData = async (req, res) => {

  try {

    const allLeads = await Lead.find();




    const totalLeads = allLeads.length;




    const wonLeads = allLeads.filter(
      (item) => item.status === "Residential"
    ).length;





    const lostLeads = allLeads.filter(
      (item) => item.status === "Industrial"
    ).length;





    const conversionRate = totalLeads > 0
      ? ((wonLeads / totalLeads) * 100).toFixed(1)
      : 0;





    const recentLeads = await Lead.find()
      .sort({ createdAt: -1 })
      .limit(5);





    res.status(200).json({

      totalLeads,

      wonLeads,

      lostLeads,

      conversionRate,

      recentLeads,

    });

  }

  catch (err) {

    res.status(500).json({

      message: "Server Error",

      err

    });

  }

};