import React, { useState } from "react"
import { Link } from "react-router-dom"

function RejoignezNous() {
  const [hoverCv, setHoverCv] = useState(false)
  const [hoverpartenaire, setHoverPartenaire] = useState(false)
  return (
    <div className="h-full lg:mt-20 bg-gray-100">
      {/* devenir partenaire */}
      <div className="flex items-center flex-wrap justify-around ">
        <Link
          to={"/DevenirPartenaire"}
          onMouseOver={() => setHoverPartenaire(true)}
          onMouseLeave={() => setHoverPartenaire(false)}
          className="flex flex-col items-center  min-w-fit mx-3 mb-10  bg-white border rounded-md md:px-5 px-3  md:py-3 py-1 relative mt-10 cursor-default hover:-translate-y-6 transition-all duration-500"
        >
          {hoverpartenaire ? (
            <img
              alt="déposez votre CV"
              src="/images/partenaire.jpg"
              className="w-full h-64 lg:h-96 object-cover brightness-50"
            />
          ) : (
            <img
              alt="déposez votre CV"
              src="/images/partenaire.jpg"
              className="w-full h-64 lg:h-96 object-cover"
            />
          )}
          {hoverpartenaire && (
            <button className="absolute top-1/2  bg-blue-700 text-white rounded-md px-2 py-1 hover:bg-blue-900 ">
              en savoir plus
            </button>
          )}
          <h1 className="font-semibold text-gray-800 md:text-2xl">
            Devenir partenaire
          </h1>
        </Link>

        {/* Deposer votre CV */}
        <Link
          to={"/DeposerCv"}
          onMouseOver={() => setHoverCv(true)}
          onMouseLeave={() => setHoverCv(false)}
          className="flex flex-col items-center  min-w-fit mx-3 mb-10  bg-white border rounded-md md:px-5 px-3  md:py-3 py-1 relative mt-10 cursor-default hover:-translate-y-6 transition-all duration-500"
        >
          {hoverCv ? (
            <img
              alt="déposez votre CV"
              src="/images/deposer-cv.jpg"
              className="w-full h-64 lg:h-96 object-cover brightness-50"
            />
          ) : (
            <img
              alt="déposez votre CV"
              src="/images/deposer-cv.jpg"
              className="w-full h-64 lg:h-96 object-cover"
            />
          )}

          <h1 className="font-semibold text-gray-800 md:text-2xl">
            Déposer votre CV
          </h1>
          {hoverCv && (
            <button className="absolute top-1/2  bg-blue-700 text-white rounded-md px-2 py-1 hover:bg-blue-900 ">
              en savoir plus
            </button>
          )}
        </Link>
      </div>
    </div>
  )
}

export default RejoignezNous
