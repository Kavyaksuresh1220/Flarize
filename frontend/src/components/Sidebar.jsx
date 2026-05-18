import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <aside className="w-64 min-h-screen bg-white shadow-lg hidden md:block">

      <div className="p-6 text-2xl font-bold text-yellow-500">

        Solar CRM

      </div>

      <nav className="px-4 space-y-3">

        <Link to="/">

          <button className="w-full text-left px-4 py-2 rounded bg-yellow-100 hover:bg-yellow-200">
            Dashboard
          </button>

        </Link>

        <Link to="/leads">

          <button className="w-full text-left px-4 py-2 rounded bg-yellow-100 hover:bg-yellow-200">
            Leads
          </button>

        </Link>

        <Link to="/add-lead">

          <button className="w-full text-left px-4 py-2 rounded bg-yellow-100 hover:bg-yellow-200">
            Add Lead
          </button>

        </Link>

       

      </nav>

    </aside>

  );
}

export default Sidebar;