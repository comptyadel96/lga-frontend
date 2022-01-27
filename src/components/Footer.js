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
    <div className=" flex flex-col items-center justify-evenly flex-wrap mt-auto md:flex-row bg-gray-800  py-2  w-full">
      {/* infos and social links */}
      <div className="flex flex-col items-center mx-10 max-w-sm">
        <img
          alt="logo lga"
          src="/images/logo-white.png"
          className="h-14 md:h-16 mx-4"
        />
        <p className="text-white text-center my-1">
          LGA Consulting, Société de conseils et d'assistance aux entreprises en
          matiére de développement Informatique, Management, Organisation,
          Formations et Audits
        </p>
      </div>
      {/* racourcis */}
      <div className="flex flex-col  items-center flex-wrap">
        <h1 className="text-2xl text-blue-400 font-semibold">Raccourci</h1>
        <NavLink
          to="/"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
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
          to="/Services"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          Services
        </NavLink>
        <NavLink
          to="/Formations"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          Formations
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
          to="/LgaConsulting"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          LGA Consulting blog
        </NavLink>
        <NavLink
          to="/Contact"
          className="text-gray-300 max-w-md mx-1 cursor-pointer hover:text-red-500"
        >
          Contact
        </NavLink>
      </div>
      {/* Contact */}
      <div className="flex flex-col items-center mx-4">
        <p className="text-2xl text-blue-400 font-semibold">Contacts</p>
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
          <a
            href="https://www.facebook.com/LeaderGovernanaceAlgeria/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="text-white md:text-3xl text-2xl mt-3 cursor-pointer hover:text-blue-400 " />
          </a>
          <a
            href="https://instagram.com/lga.leader.governance.algeria?utm_medium=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="text-white md:text-3xl text-2xl mt-3 cursor-pointer hover:text-pink-400 " />
          </a>
          <AiFillLinkedin className="text-white md:text-3xl text-2xl mt-3 cursor-pointer hover:text-blue-600  " />
        </div>
      </div>
    </div>
  )
}

export default Footer
