import React, { useEffect, useRef, useState } from "react";

export default function AutoComplete({
  options,
  value,
  onChange,
  placeholder,
}) {
  const [text, setText] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef();

  const select = (option) => {
    onChange(option);
    setShowOptions(false);
  };

  const handleChange = (text) => {
    onChange(text);
    if (!showOptions) {
      setShowOptions(true);
    }
  };

  const filteredOptions = options
    .filter(
      (option) =>
        option.destination.includes(value) || option.country.includes(value)
    )
    .slice(0, 5);

  useEffect(() => {
    const listener = (e) => {
      if (!ref.current.contains(e.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("focusin", listener);
    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("focusin", listener);
    };
  }, []);

  return (
    <div className="relative w-64 " ref={ref}>
      <input
        className="text-gray-400 text-xs w-full bg-slate-200 outline-0 relative group"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setShowOptions(true)}
        type="text"
      />
      <div
        className={`mt-2 bg-white rounded-xl z-20 shadow-2xl absolute ${
          !showOptions && "hidden"
        } w-max`}
      >
        {filteredOptions &&
          filteredOptions.map((option) => {
            return (
              <div
                className="flex items-center gap-2 text-gray-500 text-xs py-4 w-full px-5 mr-5 hover:bg-gray-100"
                key={option.id}
                onClick={() => select(option.destination)}
              >
                <div>
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {option.destination}
                  </div>
                  <div className="mt-2">{option.country}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
