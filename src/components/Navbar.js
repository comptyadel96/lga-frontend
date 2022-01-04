import React, { useRef } from "react"
import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

function Navbar() {
  const serviceRef = useRef(null)
  const formationRef = useRef(null)
  const joinRef = useRef(null)
  const toggleMenu = (ref) => {
    ref.current.classList.toggle("hidden")
  }

  const serviceLinks = [
    {
      label: "Systèmes de Management et certifications ISO",
      hash: "#service4.1",
    },
    {
      label: "Management des Ressources Humaines",
      hash: "#service4.2",
    },
    {
      label: "Finances et Comptabilité",
      hash: "#service4.3",
    },
    {
      label: "Informatique et Systèmes d’information",
      hash: "#service4.4",
    },
  ]
  const formationLinks = [
    {
      label: "Achter une Formation ",
      hash: "#formation1",
    },
    {
      label: "Formations en ligne ",
      hash: "#formation2",
    },
    {
      label: "Demander une Formation ",
      hash: "#formation3",
    },
  ]
  const joinLinks = [
    {
      label: "Déposer votre CV",
      hash: "#join1",
    },
    {
      label: "Devenir partenaire",
      hash: "#join2",
    },
  ]
  const activeStyle =
    "text-red-500 text-xl font-semibold  px-3 py-1  box-border"
  return (
    <div className="w-screen relative">
      <nav
        style={{ backgroundColor: "#2d2d2d" }}
        className="lg:flex lg:items-center lg:justify-center lg:flex-wrap w-full  py-4  lg:fixed lg:top-0 lg:left-0  hidden"
      >
        {/* brand  */}
        <div className=" lg:flex lg:items-center lg:mr-20">
          <img
            alt="LGA subIcon"
            src="/images/LGA.png"
            className="lg:h-14 lg:w-16"
          />
          <h1 className="lg:text-2xl text-gray-400 font-bold">
            LGA Consulting
          </h1>
        </div>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? activeStyle
              : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300 relative"
          }
          to="/"
        >
          Acceuil
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? activeStyle
              : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300 relative"
          }
          to="/APropos"
        >
          A Propos
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? activeStyle
              : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300 relative"
          }
          to="/Produits"
        >
          Produits
        </NavLink>
        {/* services */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu(serviceRef)}
          onMouseLeave={() => toggleMenu(serviceRef)}
        >
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300"
            }
            to="/Services"
          >
            Services
          </NavLink>
          <div
            className="absolute w-44  bg-red-700 hidden rounded-2xl z-10"
            ref={serviceRef}
          >
            {serviceLinks.map((service, index) => (
              <HashLink
                to={`Services${service.hash}`}
                smooth
                key={index}
                className="block px-6 py-2 text-lg text-white rounded-xl  hover:bg-black"
              >
                {service.label}
              </HashLink>
            ))}
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={() => toggleMenu(formationRef)}
          onMouseLeave={() => toggleMenu(formationRef)}
        >
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300 relative"
            }
            to="/Formations"
          >
            Formations
          </NavLink>
          <div
            className="absolute w-44  bg-red-700 hidden rounded-2xl z-10"
            ref={formationRef}
          >
            {formationLinks.map((formation, index) => (
              <HashLink
                to={`Formations${formation.hash}`}
                smooth
                key={index}
                className="block px-6 py-2 text-lg text-white rounded-xl  hover:bg-black"
              >
                {formation.label}
              </HashLink>
            ))}
          </div>
        </div>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? activeStyle
              : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300 relative"
          }
          to="/OffresEmploi"
        >
          Offres d'emploi
        </NavLink>
        {/* join */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu(joinRef)}
          onMouseLeave={() => toggleMenu(joinRef)}
        >
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300 relative"
            }
            to="/RejoignezNous"
          >
            Rejoignez nous
          </NavLink>
          <div
            className="absolute w-44  bg-red-700 hidden rounded-2xl z-10"
            ref={joinRef}
          >
            {joinLinks.map((join, index) => (
              <HashLink
                key={index}
                to={`RejoignezNous${join.hash}`}
                smooth
                className="block px-6 py-2 text-lg text-white rounded-xl  hover:bg-black"
              >
                {join.label}
              </HashLink>
            ))}
          </div>
        </div>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? activeStyle
              : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300 relative"
          }
          to="/Contact"
        >
          Contacts
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? activeStyle
              : "text-white font-semibold text-xl px-3 py-1 hover:text-gray-300 relative"
          }
          to="/LgaConsulting"
        >
          LGA Consulting Blog
        </NavLink>{" "}
      </nav>
    </div>
  )
}

export default Navbar
