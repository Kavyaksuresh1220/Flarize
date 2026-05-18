import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LeadForm from "../components/LeadForm";

function AddLead() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

     

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Add Lead
          </h1>

          <LeadForm />

        </div>

      </div>

    </div>

  );
}

export default AddLead;