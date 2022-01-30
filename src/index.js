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
import Footer from "./components/Footer"
import DeposerCv from "./pages/DeposerCv"
import DevenirPartenaire from "./pages/DevenirPartenaire"
import ManagementEtIso from "./pages/ManagementEtIso"
import Grh from "./pages/Grh"
import FinanceEtComptabilite from "./pages/FinanceEtComptabilite"
import Informatique from "./pages/Informatique"
import AcheterFormation from "./pages/AcheterFormation"
import FormationEnLigne from "./pages/FormationEnLigne"
import DemanderFormation from "./pages/DemanderFormation"
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="aPropos" element={<APropos />}></Route>
      <Route path="Contact" element={<Contact />}></Route>
      <Route path="Formations" element={<Formations />}></Route>
      {/* subFormation pages */}
      <Route path="AcheterFormation" element={<AcheterFormation />}></Route>
      <Route path="FormationEnLigne" element={<FormationEnLigne />}></Route>
      <Route path="DemanderFormation" element={<DemanderFormation />}></Route>

      <Route path="LgaConsulting" element={<LgaConsultingBlog />}></Route>
      <Route path="OffresEmploi" element={<OffresEmploi />}></Route>
      <Route path="Produits" element={<Produits />}></Route>
      <Route path="RejoignezNous" element={<RejoignezNous />}></Route>
      {/* subjoin pages */}
      <Route path="DeposerCv" element={<DeposerCv />}></Route>
      <Route path="DevenirPartenaire" element={<DevenirPartenaire />}></Route>

      <Route path="Services" element={<Services />}></Route>
      {/* subservices pages */}
      <Route path="management-et-iso" element={<ManagementEtIso />}></Route>
      <Route path="grh" element={<Grh />}></Route>
      <Route
        path="finance-et-comptablité"
        element={<FinanceEtComptabilite />}
      ></Route>
      <Route path="informatique" element={<Informatique />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
)
