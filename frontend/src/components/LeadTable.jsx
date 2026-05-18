import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  getLeadsAPI,
  deleteLeadAPI
} from "../services/AllAPI";

function LeadTable({
  search,
  status,
  date
}) {

  const [allLeads, setAllLeads] = useState([]);

  const navigate = useNavigate();




  const getAllLeads = async () => {

    const result = await getLeadsAPI();

    console.log(result);

    if (result.status === 200) {

      setAllLeads(result.data);

    }

  };




  const handleDelete = async (id) => {

    const result = await deleteLeadAPI(id);

    if (result.status === 200) {

      getAllLeads();

    }

  };




  const handleEdit = (item) => {

    navigate("/edit-lead", {
      state: item
    });

  };




  useEffect(() => {

    getAllLeads();

  }, []);





  const filteredLeads = allLeads.filter((item) => {

    const matchesSearch =

      item.location
        ?.toLowerCase()
        .includes(search.toLowerCase());




    const matchesStatus =

      status === ""
        ? true
        : item.status === status;




    const matchesDate =

      date === ""
        ? true
        : new Date(item.createdAt)
            .toISOString()
            .split("T")[0] === date;




    return (

      matchesSearch &&
      matchesStatus &&
      matchesDate

    );

  });




  return (

    <table className="w-full bg-white rounded shadow mt-6">

      <thead className="bg-yellow-100">

        <tr>

          <th className="p-3">Name</th>

          <th className="p-3">Phone</th>

          <th className="p-3">Email</th>

          <th className="p-3">Location</th>

          <th className="p-3">Status</th>

          <th className="p-3">Actions</th>

        </tr>

      </thead>





      <tbody>

        {
          filteredLeads?.length > 0 ?

            filteredLeads.map((item) => (

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
                  {item.email}
                </td>

                <td className="p-3">
                  {item.location}
                </td>

                <td className="p-3">
                  {item.status}
                </td>





                <td className="p-3 space-x-3">

                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>





                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

            :

            <tr>

              <td
                colSpan="6"
                className="text-center p-4"
              >
                No Leads Found
              </td>

            </tr>

        }

      </tbody>

    </table>

  );
}

export default LeadTable;