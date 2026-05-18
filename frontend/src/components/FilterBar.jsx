import React from "react";

function FilterBar() {

  return (

    <div className="bg-white p-4 rounded shadow flex gap-4 mb-6">

      <input
        type="text"
        placeholder="Search Location"
        className="border p-2 rounded"
      />

      <select className="border p-2 rounded">

        <option>Status</option>

      </select>

      <input
        type="date"
        className="border p-2 rounded"
      />

    </div>

  );
}

export default FilterBar;