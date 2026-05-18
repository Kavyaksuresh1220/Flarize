import React from "react";

function LeadTable() {

  return (

    <table className="w-full bg-white rounded shadow mt-6">

      <thead className="bg-yellow-100">

        <tr>

          <th className="p-3">Name</th>

          <th className="p-3">Email</th>

          <th className="p-3">Location</th>

          <th className="p-3">Status</th>

        </tr>

      </thead>

      <tbody>

        <tr className="text-center border-t">

          <td className="p-3">Rajesh</td>

          <td className="p-3">rajesh@gmail.com</td>

          <td className="p-3">Kochi</td>

          <td className="p-3">New Lead</td>

        </tr>

      </tbody>

    </table>

  );
}

export default LeadTable;