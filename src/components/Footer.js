import React from "react"
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai"
import { NavLink } from "react-router-dom"
function Footer() {
  return (
    <div className=" flex flex-col items-center justify-evenly flex-wrap mt-auto md:flex-row bg-gray-800  py-2 pr-3 w-screen">
      {/* infos and social links */}
      <div className="flex flex-col items-center mx-10 max-w-md">
        <img
          alt="logo lga"
          src="/images/logo-white.png"
          className="h-14 md:h-16 mx-4"
        />
        <p className="text-white text-center my-1">
          Société de conseils et d'assistances au entreprises en matiére
          Gestion,Planification,Organisations,Audits,Controle et développement
          informatique.
        </p>
      </div>
      {/* racourcis */}
      <div className="flex flex-col md:flex-row  items-center flex-wrap">
        <NavLink to="/" className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500">
          Acceuil
        </NavLink>
        <NavLink
          to="/APropos"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          A propos
        </NavLink>
        <NavLink
          to="/Produits"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          Produits
        </NavLink>
        <NavLink
          to="/Formations"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          Formations{" "}
        </NavLink>
        <NavLink
          to="/OffresEmploi"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          Offres d’emploi
        </NavLink>
        <NavLink
          to="/RejoignezNous"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          Rejoignez-nous
        </NavLink>
        <NavLink
          to="/Contact"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          Contact
        </NavLink>
        <NavLink
          to="/LgaConsulting"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          LGA Consulting blog
        </NavLink>
      </div>
      {/* Contact */}
      <div className="flex flex-col items-center mx-4">
        <p className="md:text-2xl text-2xl text-blue-400 font-semibold">
          Contacts
        </p>
        <p className="text-white">Adresse : Bouira, Algérie. </p>
        <div className="flex items-center">
          <AiFillPhone className="text-white md:text-3xl text-xl " />
          <p className="text-white">+213 541 465 922</p>
        </div>
        <div className="flex items-center">
          <AiOutlineMail className="text-white md:text-3xl text-xl mr-1 " />
          <p className="text-white">Contact@lga-consulting.com </p>
        </div>
        <p className="text-white">Site web : www……</p>
        <div className="inline-flex">
          <AiFillFacebook className="text-white md:text-3xl text-2xl mt-3 cursor-pointer hover:text-blue-400 " />
          <AiFillInstagram className="text-white md:text-3xl text-2xl mt-3 cursor-pointer hover:text-pink-400 " />
          <AiFillLinkedin className="text-white md:text-3xl text-2xl mt-3 cursor-pointer hover:text-blue-600  " />
        </div>
      </div>
    </div>
  )
}

export default Footer
