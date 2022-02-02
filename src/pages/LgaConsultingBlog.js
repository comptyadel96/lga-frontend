import React from "react"
import { ImSearch } from "react-icons/im"
import BlogCard from "../components/BlogCard"
function LgaConsultingBlog() {
  return (
    <div className="h-full w-full lg:mt-20 flex flex-col items-center bg-gray-100">
      <div className="w-full flex flex-col md:flex-row flex-wrap  bg-gray-900 md:py-6 py-3 relative">
        <h1 className="text-gray-300 md:text-center font-semibold block md:text-4xl text-2xl md:ml-8 lg:mt-4 ml-4 underline  decoration-2 decoration-double decoration-pink-800">
          Blog LGA Consulting
        </h1>
        <div className="flex flex-col items-center md:ml-auto md:mr-12 mt-6 mb-4">
          <h1 className="text-gray-300 md:font-semibold mb-2 block text-center md:text-xl text-lg md:mr-auto">
            Abonnez-vous au blog LGA
          </h1>
          <div className="inline-flex mx-auto">
            <input
              type={"text"}
              placeholder="Votre e-mail"
              className="bg-white px-3 py-1 border "
            />
            <button className="md:px-4 md:py-1 px-2 py-1 rounded-sm bg-blue-600 hover:bg-blue-800 text-white font-semibold ">
              Ok
            </button>
          </div>
          <div className="inline-flex mx-auto mt-3">
            <input
              type={"text"}
              placeholder="Recherche"
              className="bg-white px-3 py-1 border focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
            <button className="md:px-4 md:py-1 px-2 py-1 rounded-sm bg-gray-500 hover:bg-gray-600 text-white font-semibold ">
              <ImSearch />
            </button>
          </div>
        </div>
        <button className="md:absolute md:bottom-3 md:left-10 max-w-fit mx-auto  md:px-3 py-1 px-2 md:max-h-10  bg-blue-600 hover:bg-blue-800 text-white md:text-xl">
          Publiez votre article
        </button>
      </div>
      {/* form */}
      <div className="flex flex-col md:flex-row items-center flex-wrap-reverse md:justify-evenly">
        {/* blogs */}
        <div className="flex flex-col items-center mx-5 md:self-end mt-4">
          <BlogCard />
        </div>
        {/* espace pub */}
        <div className="flex-flex-col items-center mt-3 md:mx-3 mx-auto md:w-full lg:w-auto">
          <div className="block px-32 py-32 bg-white shadow-lg mb-4">
            <h1>Espace publicitaire LGA 1</h1>
          </div>
          <div className="block px-32 py-32 bg-white shadow-lg mb-4">
            <h1>Espace publicitaire LGA 2</h1>
          </div>
          <div className="block px-32 py-32 bg-white shadow-lg mb-4">
            <h1>Espace publicitaire LGA 3</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LgaConsultingBlog
