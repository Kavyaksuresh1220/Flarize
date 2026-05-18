import React from "react";

function ConfirmModal() {

  return (

    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">

      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">
          Are you sure?
        </h2>

        <div className="flex gap-4">

          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>

          <button className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>

        </div>

      </div>

    </div>

  );
}

export default ConfirmModal;