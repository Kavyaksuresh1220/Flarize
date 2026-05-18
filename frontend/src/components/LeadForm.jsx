import React, { useState } from "react";

import { addLeadAPI } from "../services/allAPI";

function LeadForm() {

  const [leadData, setLeadData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    status: "",
  });




  const handleAddLead = async (e) => {

    e.preventDefault();

    console.log(leadData);

    try {

      const result = await addLeadAPI(leadData);

      console.log(result);

      alert("Lead Added Successfully");

    } catch (err) {

      console.log(err);

    }

  };




  return (

    <form
      onSubmit={handleAddLead}
      className="bg-white p-6 rounded shadow space-y-4"
    >

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-3 rounded"
        value={leadData.fullName}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            fullName: e.target.value,
          })
        }
      />




      <input
        type="text"
        placeholder="Phone Number"
        className="w-full border p-3 rounded"
        value={leadData.phone}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            phone: e.target.value,
          })
        }
      />




      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded"
        value={leadData.email}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            email: e.target.value,
          })
        }
      />




      <input
        type="text"
        placeholder="Location"
        className="w-full border p-3 rounded"
        value={leadData.location}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            location: e.target.value,
          })
        }
      />




      <select
        className="w-full border p-3 rounded"
        value={leadData.status}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            status: e.target.value,
          })
        }
      >

        <option value="">Select Status</option>

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
        className="bg-yellow-500 text-white px-6 py-3 rounded"
      >

        Submit

      </button>

    </form>

  );
}

export default LeadForm;