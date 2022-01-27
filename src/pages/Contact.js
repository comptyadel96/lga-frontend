import React from "react"

function Contact() {
  return (
    <div className="h-full w-full lg:mt-20 bg-gray-100">
      {/* header */}
      <div className="relative  object-scale-down max-w-6xl -mt-1 overflow-hidden md:mb-12 mx-auto">
        <div className="flex flex-col items-center absolute top-0 -right-10 bottom-0 bg-blue-900 skew-x-[16deg] lg:w-3/4 px-3 max-w-full overflow-hidden  ">
          <h1 className="lg:text-5xl md:text-4xl text-lg  lg:mt-28 mt-4 lg:py-2   md:px-4 px-2  text-white  md:font-bold font-semibold -skew-x-[16deg] rounded-full  bg-gray-800">
            CONTACTEZ-NOUS
          </h1>
          <h1 className="text-white font-semibold lg:text-4xl md:text-2xl md:mt-8 mt-2 mr-4 text-base -skew-x-[16deg] md:max-w-2xl lg:max-w-3xl max-w-sm">
            Veuillez remplir le formulaire ci-dessous en complétant tous les
            champs requis. Nous vous contacterons dès que possible.
          </h1>
        </div>
        <img
          src="/images/contact.png"
          alt="lga entreprise"
          className="object-contain -z-10"
        />
      </div>
      {/* formulaire */}
      <div className="flex  items-center justify-around flex-wrap max-w-full md:mt-10 py-3">
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="Votre nom*"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="Fonction*"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="E-mail*"
          autoComplete="on"
        />
        <input
          type={"text"}
          className="md:w-2/5 md:px-3 w-full py-2 md:my-2 mx-2 my-1   bg-white shadow-sm border "
          placeholder="Téléphone*"
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
        />
        <input
          type={"text"}
          className="md:w-2/3 w-full mx-2 md:px-3 py-2 md:my-2 my-1   bg-white shadow-sm border "
          placeholder="Objet*"
          autoCorrect="on"
        />
        <textarea
          type={"text"}
          className="md:w-2/3 w-full mx-1 md:px-3 px-2 md:py-2 py-1 my-1 bg-white shadow-md md:h-72 h-36 "
          placeholder="Message*"
          autoCorrect="on"
        />
      </div>
      {/* SUBMIT BUTTON */}

      <button
        type="submit"
        className="mx-auto block  bg-green-600 border-none px-3 py-1  md:my-3 my-1 text-white font-semibold rounded-md hover:bg-white hover:text-green-600"
      >
        Envoyer
      </button>
    </div>
  )
}

export default Contact
