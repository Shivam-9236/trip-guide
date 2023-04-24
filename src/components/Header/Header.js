import React from "react";
import usd from "../../assests/images/icons8-usa-96.png";

function Header() {
  return (
    <div className="w-full h-16 flex justify-between px-5 py-2 border-b-2 border-blue-400 items-center">
      <div className="flex gap-1 items-center">
        <div>
          <img
            src="https://media.istockphoto.com/vectors/plane-travel-icon-air-travel-around-the-world-flying-around-the-world-vector-id1258141375?k=20&m=1258141375&s=612x612&w=0&h=g1uXnVP6ENUx0lPhtvPT4jOkIXZOj76Sa3R50KbyNP4="
            alt="logo"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="text-gray-800 font-semibold text-lg">TripGuide</div>
      </div>
      <div className="flex justify-evenly items-center gap-4 text-sm text-gray-500">
        <div>USD</div>
        <div>
          <img src={usd} alt="logo" className="h-4 w-4" />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
        <div className="border-r-2 border-gray-200 h-6"></div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=25&q=60"
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div>Delovar</div>
      </div>
    </div>
  );
}

export default Header;
