import React from "react";


import AnalyticsCard from "../components/AnalyticsCard";
import RecentLeads from "../components/RecentLeads";
import Sidebar from "../components/Sidebar";

function Dashboard() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

       

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            <AnalyticsCard title="Total Leads" value="120" />

            <AnalyticsCard title="Won Leads" value="40" />

            <AnalyticsCard title="Lost Leads" value="15" />

            <AnalyticsCard title="Conversion Rate" value="33%" />

          </div>

          <RecentLeads />

        </div>

      </div>

    </div>

  );
}

export default Dashboard;