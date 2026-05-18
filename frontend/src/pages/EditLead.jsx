import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { updateLeadAPI } from "../services/AllAPI";

function EditLead() {

  const location = useLocation();

  const navigate = useNavigate();

  const leadData = location.state;





  const [editLead, setEditLead] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    status: "",
  });





  useEffect(() => {

    if (leadData) {

      setEditLead(leadData);

    }

  }, [leadData]);





  const handleUpdate = async (e) => {

    e.preventDefault();

    const result = await updateLeadAPI(
      editLead._id,
      editLead
    );

    console.log(result);

    if (result.status === 200) {

      alert("Lead Updated Successfully");

      navigate("/leads");

    }

  };





  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Edit Lead
          </h1>





          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded shadow space-y-4"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded"
              value={editLead.fullName}
              onChange={(e) =>
                setEditLead({
                  ...editLead,
                  fullName: e.target.value,
                })
              }
            />





            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
              value={editLead.phone}
              onChange={(e) =>
                setEditLead({
                  ...editLead,
                  phone: e.target.value,
                })
              }
            />





            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
              value={editLead.email}
              onChange={(e) =>
                setEditLead({
                  ...editLead,
                  email: e.target.value,
                })
              }
            />





            <input
              type="text"
              placeholder="Location"
              className="w-full border p-3 rounded"
              value={editLead.location}
              onChange={(e) =>
                setEditLead({
                  ...editLead,
                  location: e.target.value,
                })
              }
            />





            <select
              className="w-full border p-3 rounded"
              value={editLead.status}
              onChange={(e) =>
                setEditLead({
                  ...editLead,
                  status: e.target.value,
                })
              }
            >

              <option value="">
                Select Status
              </option>

              <option value="Residential">
                Residential
              </option>

              <option value="Commercial">
                Commercial
              </option>

              <option value="Industrial">
                Industrial
              </option>

            </select>





            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded"
            >

              Update Lead

            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default EditLead;