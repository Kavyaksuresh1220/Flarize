import React from "react";

function Sidebar() {

  return (

    <aside>

      <div>

        <h2>Solar CRM</h2>

      </div>

      <nav>

        <ul>

          <li>
            <button>
              Dashboard
            </button>
          </li>

          <li>
            <button>
              Leads
            </button>
          </li>

          <li>
            <button>
              Add Lead
            </button>
          </li>

          <li>
            <button>
              Analytics
            </button>
          </li>

        </ul>

      </nav>

    </aside>

  );
}

export default Sidebar;