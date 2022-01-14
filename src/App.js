import React from "react"
import Carrousel from "./components/Carrousel"

function App() {
  return (
    <div className="  px-4 bg-white  min-h-screen md:py-10 py-20  ">
      {/*  carroussel test */}
      <Carrousel />
      
      {/* sections */}
      {/* formation */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-lg   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
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
      {/* offres d'emploi */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-lg   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Offres d'emploi
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
      {/* Informatique */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-lg   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <img
          className="md:h-72 h-60"
          alt="Informatique.png"
          src="/images/informatique.png"
        />
        <div className="flex flex-col items-center max-w-md ">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Informatique et systémes d'information
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
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-lg   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Systémes de management et certifications ISO
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
          alt="certification iso algerie png"
          src="/images/iso-1.png"
        />
      </div>
      {/* contact us */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-lg   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <img className="md:h-72 h-60" alt="grh.png" src="/images/grh.png" />
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Management des ressources humaines
          </h1>
          <p className="text-center text-gray-400  md:leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            quas voluptatem enim accusamus repudiandae vero eum magni dolores
            voluptate, tempora in nostrum pariatur, corrupti expedita
            exercitationem dicta animi ullam.
          </p>
        </div>
      </div>
      {/* finance et comptabilité */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-lg   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Finances et comptabilité
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
          alt="comptabilité.png"
          src="/images/comptabilité.png"
        />
      </div>
      {/* produits */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-lg   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <img
          className="md:h-72 h-60"
          alt="produit.png"
          src="/images/produit.png"
        />
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            Produits
          </h1>
          <p className="text-center text-gray-400  md:leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            quas voluptatem enim accusamus repudiandae vero eum magni dolores
            voluptate, tempora in nostrum pariatur, corrupti expedita
            exercitationem dicta animi ullam.
          </p>
        </div>
      </div>
      {/* lga consulting blog */}
      <div className="flex items-center flex-col bg-white rounded-2xl shadow-lg   mx-auto md:my-24 my-6 px-3 py-2 md:flex-row  md:w-2/3 md:justify-around">
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold md:mb-3 mb-2">
            LGA Consulting Blog
          </h1>
          <p className="text-center text-gray-400  md:leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            quas voluptatem enim accusamus repudiandae vero eum magni dolores
            voluptate, tempora in nostrum pariatur, corrupti expedita
            exercitationem dicta animi ullam.
          </p>
        </div>
        <img className="md:h-72 h-60" alt="blog.png" src="/images/blog.png" />
      </div>
    </div>
  )
}

export default App
