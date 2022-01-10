import React, { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import {
  AiOutlineMenu,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineClose,
} from "react-icons/ai"
function Navbar() {
  const serviceRef = useRef(null)
  const formationRef = useRef(null)
  const joinRef = useRef(null)
  const burgerNavRef = useRef(null)
  // toggle arrow on click
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  // toggle burger menu icon on click
  const [burgerOpened, setBurgerOpened] = useState(false)
  // sub-menu for burger menu
  const subServiceRef = useRef(null)
  const subFormationsRef = useRef(null)
  const subJoinRef = useRef(null)
  const toggleMenu = (ref) => {
    if (ref.current.classList.contains("max-h-0")) {
      ref.current.classList.remove("max-h-0")
      ref.current.classList.add("max-h-56")
    } else {
      ref.current.classList.remove("max-h-56")
      ref.current.classList.add("max-h-0")
    }
  }
  // show/hide burger menu
  const toggleBurgerNav = () => {
    if (burgerNavRef.current.classList.contains("max-h-0")) {
      burgerNavRef.current.classList.remove("max-h-0")
      burgerNavRef.current.classList.add("max-h-screen")
    } else {
      burgerNavRef.current.classList.remove("max-h-screen")
      burgerNavRef.current.classList.add("max-h-0")
    }
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
      label: "Acheter une Formation ",
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
  const activeStyle = "text-red-600 text-base font-semibold  px-3 py-1"
  const burgerActiveStyle = "text-red-600 text-xl font-semibold border-b   px-3 py-3"
  return (
    <div className="w-screen relative h-4">
      <div className="flex items-center justify-between h-24 bg-gray-50 border-b">
        {/* brand */}
        <img
          alt="LGA subIcon"
          src="/images/logo-lga.png"
          className="lg:hidden h-14 ml-4"
        />
        {/* menu burger icon */}
        {!burgerOpened ? (
          <AiOutlineMenu
            className="lg:hidden absolute opacity-100  right-6 top-5 text-gray-700 cursor-pointer p-2 z-10 transition-opacity duration-700 "
            size={46}
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          />
        ) : (
          <AiOutlineClose
            className="lg:hidden absolute opacity-100  right-6 top-5 text-gray-700 cursor-pointer z-10 p-2 rounded-full bg-gray-200 transition-opacity duration-700 "
            size={46}
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          />
        )}
      </div>
      {/* menu burger content */}
      <div
        ref={burgerNavRef}
        className=" max-h-0 w-screen overflow-hidden  bg-white z-30 transition-all duration-700 ease-linear "
      >
        <div className="bg-white w-full flex flex-col lg:hidden">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b bg-white z-30   relative"
            }
            to="/"
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          >
            Acceuil
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative"
            }
            to="/APropos"
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          >
            A Propos
          </NavLink>
          <div className="flex flex-col   pr-5 ">
            <div className=" flex items-center border-b justify-between w-full">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? burgerActiveStyle
                    : "text-gray-600  font-semibold text-xl px-3 py-3   relative"
                }
                to="/Formations"
                onClick={() => {
                  toggleBurgerNav()
                  setBurgerOpened(!burgerOpened)
                }}
              >
                Formations
              </NavLink>
              {!isOpen ? (
                <AiOutlineCaretDown
                  className="text-blue-500 bg-blue-100 rounded-md p-1"
                  size={25}
                  onClick={() => {
                    toggleMenu(subFormationsRef)
                    setIsOpen(!isOpen)
                  }}
                />
              ) : (
                <AiOutlineCaretUp
                  className="text-red-500 bg-red-100 rounded-md p-1"
                  size={25}
                  onClick={() => {
                    toggleMenu(subFormationsRef)
                    setIsOpen(!isOpen)
                  }}
                />
              )}
            </div>
            {/* subMenu */}
            <div
              className="flex flex-col  bg-gray-100 pl-4 max-h-0 overflow-hidden transition-all duration-500 "
              ref={subFormationsRef}
            >
              {formationLinks.map((formation, index) => (
                <HashLink
                  key={index}
                  to={`/Formations${formation.hash}`}
                  className="py-3 text-gray-500 font-semibold text-lg  "
                >
                  {formation.label}
                </HashLink>
              ))}
            </div>
          </div>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b  relative"
            }
            to="/OffresEmploi"
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          >
            Offres d'emploi
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b  relative"
            }
            to="/Produits"
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          >
            Produits
          </NavLink>
          <div className="flex flex-col   pr-5 border-b ">
            <div className=" flex items-center justify-between w-full">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? burgerActiveStyle
                    : "text-gray-600 font-semibold text-xl px-3 py-3  relative"
                }
                to="/RejoignezNous"
                onClick={() => {
                  toggleBurgerNav()
                  setBurgerOpened(!burgerOpened)
                }}
              >
                Rejoignez nous
              </NavLink>
              {!isOpen3 ? (
                <AiOutlineCaretDown
                  className="text-blue-500 bg-blue-100 rounded-md p-1"
                  size={25}
                  onClick={() => {
                    toggleMenu(subJoinRef)
                    setIsOpen3(!isOpen3)
                  }}
                />
              ) : (
                <AiOutlineCaretUp
                  className="text-red-500 bg-red-100 rounded-md p-1"
                  size={25}
                  onClick={() => {
                    toggleMenu(subJoinRef)
                    setIsOpen3(!isOpen3)
                  }}
                />
              )}
            </div>
            {/* subMenu */}
            <div
              className="flex flex-col  bg-gray-100 pl-4 max-h-0 overflow-hidden transition-all duration-500 "
              ref={subJoinRef}
            >
              {joinLinks.map((join, index) => (
                <HashLink
                  key={index}
                  to={`/RejoignezNous${join.hash}`}
                  className="py-3 text-gray-500 font-semibold text-lg  "
                >
                  {join.label}
                </HashLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col   pr-5 border-b ">
            <div className=" flex items-center justify-between w-full">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? burgerActiveStyle
                    : "text-gray-600  font-semibold text-xl px-3 py-3  relative"
                }
                to="/Services"
                onClick={() => {
                  toggleBurgerNav()
                  setBurgerOpened(!burgerOpened)
                }}
              >
                Services
              </NavLink>
              {!isOpen2 ? (
                <AiOutlineCaretDown
                  className="text-blue-500 bg-blue-100 rounded-md p-1"
                  size={25}
                  onClick={() => {
                    toggleMenu(subServiceRef)
                    setIsOpen2(!isOpen2)
                  }}
                />
              ) : (
                <AiOutlineCaretUp
                  className="text-red-500 bg-red-100 rounded-md p-1"
                  size={25}
                  onClick={() => {
                    toggleMenu(subServiceRef)
                    setIsOpen2(!isOpen2)
                  }}
                />
              )}
            </div>
            {/* subMenu */}
            <div
              className="flex flex-col  bg-gray-100 pl-4 max-h-0 overflow-hidden  transition-all duration-500"
              ref={subServiceRef}
            >
              {serviceLinks.map((service, index) => (
                <HashLink
                  key={index}
                  to={`/Services${service.hash}`}
                  className="py-3 text-gray-500 font-semibold text-lg  "
                >
                  {service.label}
                </HashLink>
              ))}
            </div>
          </div>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b  relative"
            }
            to="/LgaConsulting"
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          >
            LGA Consultation blog
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3   relative"
            }
            to="/Contact"
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* horizontal navbar */}
      <div className="lg:flex  lg:items-center   lg:flex-wrap  lg:w-full  py-4 fixed top-0 left-0 bg-gray-50 border-b z-10  hidden  ">
        <img
          alt="LGA subIcon"
          src="/images/logo-lga.png"
          className="lg:h-14 mx-4 self-start "
        />
        <nav className="flex items-center flex-wrap   py-4">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400 relative"
            }
            to="/"
          >
            Acceuil
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400 relative"
            }
            to="/APropos"
          >
            A Propos
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400 relative"
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
                  : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400"
              }
              to="/Services"
            >
              Services
            </NavLink>
            <div
              className="absolute w-80  bg-blue-700 max-h-0 overflow-hidden transition-all duration-700  rounded-2xl z-10"
              ref={serviceRef}
            >
              {serviceLinks.map((service, index) => (
                <HashLink
                  to={`Services${service.hash}`}
                  smooth
                  key={index}
                  className="inline-block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
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
                  : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400 relative"
              }
              to="/Formations"
            >
              Formations
            </NavLink>
            <div
              className="absolute w-44   bg-pink-900 overflow-hidden transition-all duration-700 max-h-0 rounded-2xl z-10"
              ref={formationRef}
            >
              {formationLinks.map((formation, index) => (
                <HashLink
                  to={`Formations${formation.hash}`}
                  smooth
                  key={index}
                  className="block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-pink-400"
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
                : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400 relative"
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
                  : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400 relative"
              }
              to="/RejoignezNous"
            >
              Rejoignez nous
            </NavLink>
            <div
              className="absolute w-44  bg-cyan-900 max-h-0 rounded-2xl overflow-hidden transition-all duration-700 z-10"
              ref={joinRef}
            >
              {joinLinks.map((join, index) => (
                <HashLink
                  key={index}
                  to={`RejoignezNous${join.hash}`}
                  smooth
                  className="block ml-1 px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-cyan-500"
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
                : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400 relative"
            }
            to="/Contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-500 font-semibold text-base px-3 py-1 hover:text-gray-400 relative"
            }
            to="/LgaConsulting"
          >
            LGA Consulting Blog
          </NavLink>{" "}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
