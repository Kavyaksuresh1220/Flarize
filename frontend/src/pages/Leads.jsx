import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LeadTable from "../components/LeadTable";
import FilterBar from "../components/FilterBar";

function Leads() {

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [date, setDate] = useState("");



  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />



      <div className="flex-1">

        <Navbar />



        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">

            Leads

          </h1>



          <FilterBar
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            date={date}
            setDate={setDate}
          />



          <LeadTable
            search={search}
            status={status}
            date={date}
          />

        </div>

      </div>

    </div>

  );
}

export default Leads;