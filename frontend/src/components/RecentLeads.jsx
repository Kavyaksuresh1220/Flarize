import React from "react";

function RecentLeads({ allLeads }) {

  return (

    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-2xl font-semibold mb-4">

        Recent Leads

      </h2>





      <table className="w-full">

        <thead className="bg-yellow-100">

          <tr>

            <th className="p-3">
              Name
            </th>

            <th className="p-3">
              Phone
            </th>

            <th className="p-3">
              Location
            </th>

            <th className="p-3">
              Status
            </th>

          </tr>

        </thead>





        <tbody>

          {
            allLeads?.length > 0 ?

              allLeads.map((item) => (

                <tr
                  key={item._id}
                  className="text-center border-t"
                >

                  <td className="p-3">
                    {item.fullName}
                  </td>





                  <td className="p-3">
                    {item.phone}
                  </td>





                  <td className="p-3">
                    {item.location}
                  </td>





                  <td className="p-3">
                    {item.status}
                  </td>

                </tr>

              ))

              :

              <tr>

                <td
                  colSpan="4"
                  className="text-center p-4"
                >

                  No Recent Leads

                </td>

              </tr>

          }

        </tbody>

      </table>

    </div>

  );
}

export default RecentLeads;
