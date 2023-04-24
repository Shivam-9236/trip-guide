import React, { useState } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";

function Carousel() {
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  return (
    <div className="relative w-full h-full">
      <img
        src="https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="background"
        className="w-full h-[500px] opacity-90 -z-10 absolute top-0"
      />
      <div className="w-4/5 flex flex-col gap-10 justify-center mx-36">
        <div className="font-bold w-[500px] text-white text-5xl mt-28">
          Amazing Flight To Swizterland
        </div>
        <div className="font-semibold text-white text-xl mt-10">
          Find and Book a great experience
        </div>
        <div className="w-full rounded-lg shadow-xl py-6 px-10 bg-white mt-20 flex flex-col">
          <div className="flex justify-between w-4/5">
            <div className="flex gap-2">
              <div className="flex justify-between items-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
                Hotels
              </div>
              <div className="flex gap-2 justify-between items-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
                Flight
              </div>
              <div className="flex gap-2 justify-between items-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Car Rentals
              </div>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <div>Round Trip</div>
              <div>No Of Passenger</div>
            </div>
          </div>
          <hr className="w-4/5" />
          <div className="flex gap-20 my-4 w-full">
            <div className="flex w-4/5">
              <div className="bg-slate-200 p-2 rounded-lg">
                <h4>Leaving From</h4>
                <AutoComplete
                  placeholder={"Where are you from?"}
                  options={[
                    {
                      id: 1,
                      destination: "Dubai",
                      country: "Dubai Emirate, United Erab Emirates",
                    },
                    {
                      id: 2,
                      destination: "Doha",
                      country: "Qatar",
                    },
                    {
                      id: 3,
                      destination: "Darling Harbour",
                      country: "Syden, New West, Australia",
                    },
                    {
                      id: 4,
                      destination: "Dhaka",
                      country: "Bangladesh",
                    },
                    {
                      id: 5,
                      destination: "Dubai International Airport",
                      country: "Dubai Emirate, United Erab Emirates",
                    },
                  ]}
                  value={leavingFrom}
                  onChange={setLeavingFrom}
                />
              </div>
              <div className="bg-slate-100 rounded-full py-2 px-2 self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <div className="bg-slate-200 p-2 rounded-lg grow">
                <h4>Going to</h4>
                <AutoComplete
                  options={[
                    {
                      id: 1,
                      destination: "Dubai",
                      country: "Dubai Emirate, United Erab Emirates",
                    },
                    {
                      id: 2,
                      destination: "Doha",
                      country: "Qatar",
                    },
                    {
                      id: 3,
                      destination: "Darling Harbour",
                      country: "Syden, New West, Australia",
                    },
                    {
                      id: 4,
                      destination: "Dhaka",
                      country: "Bangladesh",
                    },
                    {
                      id: 5,
                      destination: "Dubai International Airport",
                      country: "Dubai Emirate, United Erab Emirates",
                    },
                  ]}
                  value={goingTo}
                  onChange={setGoingTo}
                  placeholder="going to?"
                />
              </div>
              <div className="bg-slate-100 rounded-full py-2 px-2 self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <div className="bg-slate-200 p-2 rounded-lg w-40">
                <h4>Check in</h4>
                <p className="text-gray-400 text-xs">Add date</p>
              </div>
              <div className="bg-slate-100 rounded-full py-2 px-2 self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <div className="bg-slate-200 p-2 rounded-lg w-40">
                <h4>Check out</h4>
                <p className="text-gray-400 text-xs">Add date</p>
              </div>
            </div>
            <div className=" float-left">
              <button className="py-4 px-12 bg-blue-500 rounded-xl text-white font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
