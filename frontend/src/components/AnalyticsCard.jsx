import React from "react";

function AnalyticsCard({ title, value }) {

  return (

    <div className="bg-white p-6 rounded shadow">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="text-3xl font-bold text-yellow-500 mt-2">
        {value}
      </p>

    </div>

  );
}

export default AnalyticsCard;