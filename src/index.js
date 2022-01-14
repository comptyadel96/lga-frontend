import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import APropos from "./pages/APropos"
import Contact from "./pages/Contact"
import Formations from "./pages/Formations"
import LgaConsultingBlog from "./pages/LgaConsultingBlog"
import OffresEmploi from "./pages/OffresEmploi"
import Produits from "./pages/Produits"
import RejoignezNous from "./pages/RejoignezNous"
import Services from "./pages/Services"
import Carrousel from "./components/Carrousel"
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="aPropos" element={<APropos />}></Route>
      <Route path="Contact" element={<Contact />}></Route>
      <Route path="Formations" element={<Formations />}></Route>
      <Route path="LgaConsulting" element={<LgaConsultingBlog />}></Route>
      <Route path="OffresEmploi" element={<OffresEmploi />}></Route>
      <Route path="Produits" element={<Produits />}></Route>
      <Route path="RejoignezNous" element={<RejoignezNous />}></Route>
      <Route path="Services" element={<Services />}></Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
)
