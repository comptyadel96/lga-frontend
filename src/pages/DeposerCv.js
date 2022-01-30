import React from "react"

function DeposerCv() {
  return (
    <div className="h-full w-full lg:mt-20 bg-gray-100 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center relative mb-8 max-w-6xl">
        <img
          alt="déposez votre CV"
          src="/images/deposer-cv.jpg"
          className="brightness-50 object-contain"
        />
        <h1 className="text-center absolute lg:top-32 md:top-24 top-8 lg:text-4xl md:text-3xl mx-1 font-semibold text-white">
          C’est ici que ça commence. Nous acceptons les candidatures. DEPOSEZ
          VOTRE CV dès maintenant
        </h1>
        <h1 className="absolute top-1/2 font-bold text-blue-900 rounded-md skew-y-3 px-2 py-1 bg-transparentWhite lg:text-7xl md:text-5xl text-xl lg:px-4 lg:py-2">
          REJOIGNEZ-NOUS
        </h1>
      </div>

      {/* formulaire */}
      <div className="flex  items-center justify-around flex-wrap max-w-full md:mt-10 py-3">
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="Nom et prenom*"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="Adresse*"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="Age*"
          autoComplete="on"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="N° de Téléphone*"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="E-mail*"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="Diplôme*"
        />
        <textarea
          type={"text"}
          className="md:w-2/3 w-full mx-1 md:px-3 px-2 md:py-2 py-1 my-1 bg-white shadow-md md:h-72 h-36 "
          placeholder="Description*"
          autoCorrect="on"
        />
      </div>
      {/* files */}
      <div className="flex items-center justify-evenly flex-wrap  my-3 bg-white py-2 px-5 rounded-md border">
        {/* telecharger votre cv */}
        <div className="flex items-center flex-col mt-5 ">
          <p className="text-blue-700 font-semibold mb-1">
            Télécharger votre CV
          </p>
          <input
            type="file"
            className="file:mr-4 file:py-2 file:px-4
  file:rounded-full file:border-0
  file:text-sm file:font-semibold
  file:bg-blue-50 file:text-blue-700
  hover:file:bg-blue-100"
          />
        </div>
        {/* lettre de motivation */}
        <div className="flex items-center flex-col mt-5">
          <p className="text-red-600 font-semibold mb-1">
            Télécharger votre lettre de motivation
          </p>
          <input
            type="file"
            className="file:mr-4 file:py-2 file:px-4
  file:rounded-full file:border-0
  file:text-sm file:font-semibold
  file:bg-red-50 file:text-red-700
  hover:file:bg-red-100"
          />
        </div>
      </div>
      {/* bouton */}
      <button className="bg-green-300 text-white font-semibold cursor-pointer self-end mr-10 mb-8 px-2 py-1 rounded-lg hover:bg-green-400">
        Envoyer
      </button>
    </div>
  )
}

export default DeposerCv
