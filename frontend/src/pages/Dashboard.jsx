import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import AnalyticsCard from "../components/AnalyticsCard";
import RecentLeads from "../components/RecentLeads";

import { dashboardAPI } from "../services/AllAPI";

function Dashboard() {

  const [dashboardData, setDashboardData] = useState({});




  const getDashboard = async () => {

    const result = await dashboardAPI();

    console.log(result);

    if (result.status === 200) {

      setDashboardData(result.data);

    }

  };




  useEffect(() => {

    getDashboard();

  }, []);




  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />



      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-6">

          Dashboard

        </h1>





        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <AnalyticsCard
            title="Total Leads"
            value={dashboardData.totalLeads}
          />



          <AnalyticsCard
            title="Won Leads"
            value={dashboardData.wonLeads}
          />



          <AnalyticsCard
            title="Lost Leads"
            value={dashboardData.lostLeads}
          />



          <AnalyticsCard
            title="Conversion Rate"
            value={`${dashboardData.conversionRate}%`}
          />

        </div>





        <RecentLeads
          allLeads={dashboardData.recentLeads}
        />

      </div>

    </div>

  );
}

export default Dashboard;