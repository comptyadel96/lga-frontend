import React, { useRef, useState } from "react"
import { NavLink } from "react-router-dom"

import {
  AiOutlineMenu,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineClose,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai"
import DropDown from "./DropDown"
function Navbar() {
  const serviceRef = useRef(null)
  const formationRef = useRef(null)
  const joinRef = useRef(null)
  const navRef = useRef(null)
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

  const activeStyle = "text-red-700 text-base font-semibold  px-3 py-1"
  const activeStyle2 = "text-red-700 text-base font-semibold"
  const burgerActiveStyle =
    "text-red-500 text-xl font-semibold border-b z-50 bg-white   px-3 py-3"
  // transtion for navbar on scroll down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navRef.current.classList.remove("top-6")
      navRef.current.classList.add("top-0")
    } else {
      navRef.current.classList.remove("top-0")
      navRef.current.classList.add("top-6")
    }
  })
  return (
    <div className="w-full px-0  relative ">
      {/* mini nav */}
      <div className=" lg:h-6 bg-blue-800 w-full lg:flex md:items-center lg:justify-between px-8 hidden z-50 ">
        <div className="inline-flex">
          <p className="text-white flex items-center">
            <AiFillMail className="mr-2" />
            Contact@lga-consulting.com
          </p>
          <p className="text-white ml-4 flex items-center">
            <AiFillPhone className="mr-2" />
            +213 541 465 922
          </p>
        </div>
        <div className="inline-flex">
          <AiFillLinkedin className="text-2xl text-white mx-1" />
          <AiFillInstagram className="text-2xl text-white mx-1" />
          <AiFillFacebook className="text-2xl text-white mx-1" />
        </div>
      </div>
      {/* menu burger */}
      <div className="flex items-center justify-between h-24 w-full  bg-gray-50 border-b  lg:hidden">
        {/* brand */}
        <img
          alt="LGA subIcon"
          src="/images/logo-gray.png"
          className="lg:hidden h-16 ml-4"
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
        className=" max-h-0 w-screen overflow-hidden  bg-white z-50 transition-all duration-700 ease-linear "
      >
        <div className="bg-white w-full flex flex-col  lg:hidden">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative"
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
            À propos
          </NavLink>
          <div className="flex flex-col   pr-5  bg-white z-50">
            <div className=" flex items-center justify-between w-full">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? burgerActiveStyle
                    : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative w-full"
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
                  className="text-blue-500 bg-blue-100 rounded-md p-1 z-50  "
                  size={25}
                  onClick={() => {
                    toggleMenu(subFormationsRef)
                    setIsOpen(!isOpen)
                  }}
                />
              ) : (
                <AiOutlineCaretUp
                  className="text-red-500 bg-red-100 rounded-md p-1 z-50"
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
              <NavLink
                to={`/AcheterFormation`}
                className="py-3 text-gray-500 font-semibold text-lg hover:text-blue-600"
              >
                Acheter une formation
              </NavLink>
              <NavLink
                to={`/FormationEnLigne`}
                className="py-3 text-gray-500 font-semibold text-lg hover:text-blue-600"
              >
                Formation en ligne
              </NavLink>
              <NavLink
                to={`/DemanderFormation`}
                className="py-3 text-gray-500 font-semibold text-lg hover:text-blue-600"
              >
                Demander une formation
              </NavLink>
            </div>
          </div>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative w-full"
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
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative w-full"
            }
            to="/Produits"
            onClick={() => {
              toggleBurgerNav()
              setBurgerOpened(!burgerOpened)
            }}
          >
            Produits
          </NavLink>
          <div className="flex flex-col   pr-5 border-b bg-white z-50 ">
            <div className=" flex items-center justify-between w-full">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? burgerActiveStyle
                    : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative w-full"
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
                  className="text-blue-500 bg-blue-100 rounded-md p-1 z-50  "
                  size={25}
                  onClick={() => {
                    toggleMenu(subJoinRef)
                    setIsOpen3(!isOpen3)
                  }}
                />
              ) : (
                <AiOutlineCaretUp
                  className="text-red-500 bg-red-100 rounded-md p-1 z-50"
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
              <NavLink
                to={`/DeposerCv`}
                className="py-3 text-gray-500 font-semibold text-lg"
              >
                Déposer votre CV
              </NavLink>
              <NavLink
                to={`/DevenirPartenaire`}
                className="py-3 text-gray-500 font-semibold text-lg"
              >
                Devenir Partenaire
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col   pr-5 border-b bg-white z-50">
            <div className=" flex items-center justify-between w-full bg-white z-50 ">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? burgerActiveStyle
                    : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative w-full"
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
                  className="text-blue-500 bg-blue-100 rounded-md p-1 z-50"
                  size={25}
                  onClick={() => {
                    toggleMenu(subServiceRef)
                    setIsOpen2(!isOpen2)
                  }}
                />
              ) : (
                <AiOutlineCaretUp
                  className="text-red-500 bg-red-100 rounded-md p-1 z-50"
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
              <NavLink
                to={`/management-et-iso`}
                className="py-3 text-gray-500 font-semibold text-lg  "
              >
                Systèmes de Management et certifications ISO
              </NavLink>
              <NavLink
                to={`/grh`}
                className="py-3 text-gray-500 font-semibold text-lg  "
              >
                Management des Ressources Humaines
              </NavLink>
              <NavLink
                to={`/finance-et-comptablité`}
                className="py-3 text-gray-500 font-semibold text-lg  "
              >
                Finances et Comptabilité
              </NavLink>
              <NavLink
                to={`/informatique`}
                className="py-3 text-gray-500 font-semibold text-lg  "
              >
                Informatique et Systèmes d’information
              </NavLink>
            </div>
          </div>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? burgerActiveStyle
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative w-full"
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
                : "text-gray-600 font-semibold text-xl px-3 py-3 border-b z-30 bg-white relative w-full"
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
      <div
        ref={navRef}
        className="lg:flex lg:items-center justify-center fixed top-6 lg:w-full  py-1 border-b bg-gray-50 shadow-md  z-50  hidden transition-all duration-500 "
      >
        <img
          alt="LGA subIcon"
          src="/images/logo-gray.png"
          className="lg:h-16 mr-14 self-start "
        />
        <nav className="flex items-center flex-wrap   py-4">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-800 font-semibold text-base px-3 py-1 hover:text-blue-700 relative"
            }
            to="/"
          >
            Acceuil
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-800 font-semibold text-base px-3 py-1 hover:text-blue-700 relative"
            }
            to="/APropos"
          >
            À propos
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-800 font-semibold text-base px-3 py-1 hover:text-blue-700 relative"
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
            <div className="flex items-center px-3 py-1">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? activeStyle2
                    : "text-gray-800 font-semibold text-base  hover:text-blue-700 relative"
                }
                to="/Services"
              >
                Services
              </NavLink>

              <AiOutlineCaretDown className="pt-1" />
            </div>

            <div
              className="absolute w-80  bg-gray-800 max-h-0 overflow-hidden transition-all duration-700  rounded-md z-10"
              ref={serviceRef}
            >
              <NavLink
                to={`/management-et-iso`}
                className="inline-block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Systèmes de Management et certifications ISO
              </NavLink>
              <NavLink
                to={`/grh`}
                className="inline-block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Management des Ressources Humaines
              </NavLink>
              <NavLink
                to={`/finance-et-comptablité`}
                className="inline-block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Finances et Comptabilité
              </NavLink>
              <NavLink
                to={`/informatique`}
                className="inline-block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Informatique et Systèmes d’information
              </NavLink>
            </div>
          </div>
          <div
            className="relative"
            onMouseEnter={() => toggleMenu(formationRef)}
            onMouseLeave={() => toggleMenu(formationRef)}
          >
            <div className="flex items-center px-3 py-1  ">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? activeStyle2
                    : "text-gray-800 font-semibold text-base  hover:text-blue-700 relative"
                }
                to="/Formations"
              >
                Formations
              </NavLink>
              <AiOutlineCaretDown className="pt-1" />
            </div>

            <div
              className="absolute w-44   bg-gray-800 overflow-hidden transition-all duration-700 max-h-0 rounded-2xl z-10"
              ref={formationRef}
            >
              <NavLink
                to={`AcheterFormation`}
                className="block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Acheter une Formation
              </NavLink>
              <NavLink
                to={`FormationEnLigne`}
                className="block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Formations en ligne
              </NavLink>
              <NavLink
                to={`DemanderFormation`}
                className="block px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Demander une Formation
              </NavLink>
            </div>
          </div>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-800 font-semibold text-base px-3 py-1 hover:text-blue-700 relative"
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
            <div className="flex items-center px-3 py-1">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? activeStyle2
                    : "text-gray-800 font-semibold text-base  hover:text-blue-700 relative"
                }
                to="/RejoignezNous"
              >
                Rejoignez-nous
              </NavLink>
              <AiOutlineCaretDown className="pt-1" />
            </div>

            <div
              className="absolute w-44  bg-gray-800 max-h-0 rounded-2xl overflow-hidden transition-all duration-700 z-10"
              ref={joinRef}
            >
              <NavLink
                to={`/DeposerCv`}
                className="block ml-1 px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Déposer votre CV
              </NavLink>
              <NavLink
                to={`/DevenirPartenaire`}
                className="block ml-1 px-1 py-2 text-sm font-semibold text-white rounded-xl  hover:text-sky-300"
              >
                Devenir partenaire
              </NavLink>
            </div>
          </div>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-800 font-semibold text-base px-3 py-1 hover:text-blue-700 relative"
            }
            to="/Contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? activeStyle
                : "text-gray-800 font-semibold text-base px-3 py-1 hover:text-blue-700 relative"
            }
            to="/LgaConsulting"
          >
            LGA Consulting Blog
          </NavLink>
          {/* dropdown */}
          <div>
            <DropDown />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
