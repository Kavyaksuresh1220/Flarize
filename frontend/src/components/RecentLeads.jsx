import React from "react";

function RecentLeads() {

  return (

    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-2xl font-bold mb-4">
        Recent Leads
      </h2>

      <table className="w-full">

        <thead>

          <tr>

            <th>Name</th>

            <th>Location</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr className="text-center">

            <td>Priya</td>

            <td>Thrissur</td>

            <td>Won</td>

          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default RecentLeads;