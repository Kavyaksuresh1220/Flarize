import React from "react";

function LeadForm() {

  return (

    <form className="bg-white p-6 rounded shadow space-y-4">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        placeholder="Location"
        className="w-full border p-3 rounded"
      />

      <select className="w-full border p-3 rounded">

        <option>Residential</option>

        <option>Commercial</option>

        <option>Industrial</option>

      </select>

      <button className="bg-yellow-500 text-white px-6 py-3 rounded">

        Submit

      </button>

    </form>

  );
}

export default LeadForm;