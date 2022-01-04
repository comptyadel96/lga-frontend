import React from "react"

function Formations() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly flex-wrap md:pt-28">
      {/* section 1 */}
      <div
        id="formation1"
        className="flex flex-col items-center justify-center my-12 border-blue-600 border-2 border-dashed w-96 h-80"
      >
        <h1 className="text-3xl font-bold text-blue-500">
          Acheter une formation
        </h1>
      </div>
      {/* section 2 */}
      <div
        id="formation2"
        className="flex flex-col items-center justify-center my-12 border-red-600 border-2 border-dashed w-96 h-80"
      >
        <h1 className="text-3xl font-bold text-red-500">formation en ligne</h1>
      </div>
      {/* section 3 */}
      <div
        id="formation3"
        className="flex flex-col items-center justify-center my-12 border-green-600 border-2 border-dashed w-96 h-80"
      >
        <h1 className="text-3xl font-bold text-green-500">
          Demander une formation
        </h1>
      </div>
    </div>
  )
}

export default Formations
