import React from "react"

function App() {
  return (
    <div className="lg:py-36 xl:py-20 -z-10 pt-20 px-4 bg-white  min-h-screen  ">
      {/* Intro */}
        <img alt="acceil lga" className="md:max-w-lg md:mt-6 max-w-sm md:mx-auto -ml-2 mt-1  " src="/images/acceuil.png" />
      
      {/* sections */}
      {/* A propos */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-xl   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <img
          className="md:h-72 h-60"
          alt="laptop pc"
          src="/images/informatique.png"
        />
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            A Propos
          </h1>
          <p className="text-center text-gray-400  md:leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            quas voluptatem enim accusamus repudiandae vero eum magni dolores
            voluptate, tempora in nostrum pariatur, corrupti expedita
            exercitationem dicta animi ullam.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col bg-white rounded-2xl shadow-xl   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Rejoignez nous
          </h1>
          <p className="text-center text-gray-400  md:leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            quas voluptatem enim accusamus repudiandae vero eum magni dolores
            voluptate, tempora in nostrum pariatur, corrupti expedita
            exercitationem dicta animi ullam.
          </p>
        </div>
        <img
          className="md:h-72 h-60"
          alt="laptop pc"
          src="/images/secretary.png"
        />
      </div>
      {/* formation */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-xl   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <img
          className="md:h-72 h-60"
          alt="laptop pc"
          src="/images/formation.png"
        />
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Formations
          </h1>
          <p className="text-center text-gray-400  md:leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            quas voluptatem enim accusamus repudiandae vero eum magni dolores
            voluptate, tempora in nostrum pariatur, corrupti expedita
            exercitationem dicta animi ullam.
          </p>
        </div>
      </div>
      {/* comptabilité  */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-xl   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Services
          </h1>
          <p className="text-center text-gray-400  md:leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            quas voluptatem enim accusamus repudiandae vero eum magni dolores
            voluptate, tempora in nostrum pariatur, corrupti expedita
            exercitationem dicta animi ullam.
          </p>
        </div>
        <img
          className="md:h-72 h-60"
          alt="finance"
          src="/images/our-services.png"
        />
      </div>
      {/* contact us */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-xl   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <img
          className="md:h-72 h-60"
          alt="contact us"
          src="/images/contactUs.png"
        />
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Contact
          </h1>
          <p className="text-center text-gray-400  md:leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            quas voluptatem enim accusamus repudiandae vero eum magni dolores
            voluptate, tempora in nostrum pariatur, corrupti expedita
            exercitationem dicta animi ullam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
