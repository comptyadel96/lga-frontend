import React from "react"

function DevenirPartenaire() {
  return (
    <div className="h-full w-full lg:mt-20 bg-gray-100 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center relative mb-8 max-w-6xl">
        <img
          alt="devenir partenaire"
          src="/images/partenaire.jpg"
          className="brightness-50 object-contain"
        />
        <h1 className="text-center absolute lg:top-32 md:top-16 top-3 lg:text-4xl md:text-3xl text-xl mx-1 lg:py-4 py-1 font-semibold text-white bg-transparentBlack2">
          Vous êtes une Société, Un expert Consultant ou Formateur ?, dès que
          remplissez le formulaire ci-dessous un représentant de LGA Consulting
          prendra contact avec vous pour étudier les modalités / possibilités de
          partenariat.
        </h1>
        <h1 className="absolute md:top-1/2 top-52 font-bold text-blue-900 rounded-md -skew-y-6   px-2 py-1 md:bg-transparentWhite bg-transparentWhite2 lg:text-7xl md:text-5xl text-xl lg:px-4 lg:py-2">
          DEVENIR PARTENAIRE
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
          placeholder="Entreprise*"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="Site web"
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
          placeholder="Fonction*"
        />
        <textarea
          type={"text"}
          className="md:w-2/3 w-full mx-1 md:px-3 px-2 md:py-2 py-1 my-1 bg-white shadow-md md:h-72 h-36 "
          placeholder="Message*"
          autoCorrect="on"
        />
      </div>
      {/* bouton */}
      <button className="bg-blue-500 text-white font-semibold cursor-pointer self-end mr-10 mb-8 px-2 py-1 rounded-lg hover:bg-blue-800">
        Envoyer
      </button>
    </div>
  )
}

export default DevenirPartenaire
