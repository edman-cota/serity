import React from "react";
import CookieConsent from "react-cookie-consent";
import "./home.scss";
import { Footer } from "../../containers";

const Header = React.lazy(() => import("../../containers/Header/Header"));
const Navbar = React.lazy(() => import("./Navbar/Navbar"));

export const Main = (): JSX.Element => {
  return (
    <div className="Home">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Footer />
      <CookieConsent
        debug={true}
        buttonText="OK"
        style={{
          flexDirection: "column",
          background: "black",
          maxWidth: "500px",
          right: "40px",
          marginBottom: "40px",
          borderRadius: "8px",
          left: "",
        }}
        contentStyle={{
          flex: "1 0 110px",
          margin: "30px",
        }}
        buttonStyle={{
          borderRadius: "4px",
          background: "transparent",
          color: "white",
          border: "1px solid white",
          marginLeft: "30px",
        }}
      >
        We use cookies and other tracking technologies to improve your browsing
        experience on our site, to show you personalized content and targeted
        advertisements, to analyze our site traffic, and to understand where our
        visitors come from.
      </CookieConsent>
    </div>
  );
};

export default Main;
