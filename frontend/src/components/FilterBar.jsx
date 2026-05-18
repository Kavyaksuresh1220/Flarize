import React from "react";

function FilterBar({
  search,
  setSearch,
  status,
  setStatus,
  date,
  setDate
}) {

  return (

    <div className="bg-white p-4 rounded shadow flex gap-4 mb-6">

      <input
        type="text"
        placeholder="Search Location"
        className="border p-2 rounded"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />



      <select
        className="border p-2 rounded"
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >

        <option value="">
          All Status
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



      <input
        type="date"
        className="border p-2 rounded"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

    </div>

  );
}

export default FilterBar;