import React, { useState, useRef } from "react"
import { GrLanguage } from "react-icons/gr"

function DropDown() {
  const options = ["Fr", "En", "Ar"]
  const defaultOption = options[0]

  const [selected, setSelected] = useState(defaultOption)
  const dropdownRef = useRef(null)
  //   toggle drop down
  const toggleDropdown = () => {
    if (dropdownRef.current.classList.contains("hidden")) {
      dropdownRef.current.classList.remove("hidden")
    } else {
      dropdownRef.current.classList.add("hidden")
    }
  }

  return (
    <div className="flex items-center relative px-3 cursor-pointer" onClick={toggleDropdown}>
      {/* dropdown */}
      <div>
        <p className="font-semibold text-red-500 hover:text-blue-700 ">
          {selected}
        </p>
        <div
          className="px-3 py-1 cursor-pointer hidden absolute top-7 left-2 bg-gray-800 rounded-md"
          ref={dropdownRef}
        >
          {options
            .filter((option) => option !== selected)
            .map((option) => (
              <p
                key={option}
                onClick={() => setSelected(option)}
                className="text-white hover:text-blue-300 font-semibold"
              >
                {option}
              </p>
            ))}
        </div>
      </div>
      {/* icon */}
      <GrLanguage className="text-red-500 ml-1" size={13} />
    </div>
  )
}

export default DropDown
