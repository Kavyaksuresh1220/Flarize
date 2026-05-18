import React from "react";

import Sidebar from "../components/Sidebar";
import AnalyticsCard from "../components/AnalyticsCard";
import RecentLeads from "../components/RecentLeads";
import Loader from "../components/Loader";

function Dashboard() {

  const loading = false;

  if (loading) {
    return <Loader />;
  }

  return (

    <div>

      <Sidebar />

      <div>

        <h1>Dashboard</h1>

        <div>

          <AnalyticsCard
            title="Total Leads"
            value="120"
          />

          <AnalyticsCard
            title="Won Leads"
            value="40"
          />

          <AnalyticsCard
            title="Lost Leads"
            value="15"
          />

          <AnalyticsCard
            title="Conversion Rate"
            value="33%"
          />

        </div>

        <RecentLeads />

      </div>

    </div>

  );
}

export default Dashboard;