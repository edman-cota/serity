/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, HStack, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../../assets/img/logo.svg";
import { auth } from "../../../firebase.ts";
import { beautifyUrl } from "../../../helpers/beautifyUrl.ts";
import { getProjectFromLocalStorage } from "../../../helpers/getProjectFromLocalStorage.ts";
import "../home.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const username = user?.email.split("@")[0];
  const [scrolled, setScrolled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isFixed, setIsFixed] = useState(true);

  let navbarPosition = "relative";

  const navigateTo = () => {
    navigate(
      `${username}/${beautifyUrl(getProjectFromLocalStorage())}/?view=tree`
    );
  };

  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  if (isFixed) {
    if (scrolled) {
      navbarPosition = "fixed";
    }
  }

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <header style={{ position: "relative", zIndex: "20" }}>
      <div className="header-child"></div>
      <div className="header-child-child">
        <div className="header-inside">
          <div className="header-inside-inside">
            <div className="header-logo">
              <a href="/">
                <img src={logo} alt="Serity logo" />
              </a>
            </div>
            <div className="header-options">
              <a href="/pricing">Pricing</a>
              <a href="/pricing">Pricing</a>
              <a href="/pricing">Pricing</a>
            </div>
            <div className="header-login">
              <div className="header-login-inside">
                <a href="/login">Login</a>
                <a href="/login" className="go-to-workspace">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
