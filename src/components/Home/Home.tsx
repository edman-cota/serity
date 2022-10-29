import React from "react"
import CookieConsent from "react-cookie-consent"
import "./home.scss"
import { Footer } from "../../containers"

import Header from "../../containers/Header/Header"
import Navbar from "./Navbar/Navbar"

export const Main = (): JSX.Element => {
  return (
    <div className="home">
      <Navbar />
      <Header />
    </div>
  )
}

export default Main
