import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LeadTable from "../components/LeadTable";
import FilterBar from "../components/FilterBar";

function Leads() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Leads
          </h1>

          <FilterBar />

          <LeadTable />

        </div>

      </div>

    </div>

  );
}

export default Leads;