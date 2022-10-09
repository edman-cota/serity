/* eslint-disable comma-dangle */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, HStack, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../../assets/img/logo.svg";
import { auth } from "../../../firebase";
import { beautifyUrl } from "../../../helpers/beautifyUrl.ts";
import { getProjectFromLocalStorage } from "../../../helpers/getProjectFromLocalStorage.ts";

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
    <HStack
      justifyContent="space-between"
      h="85px"
      w="100%"
      backdropFilter="blur(12px)"
      position="fixed"
      top={0}
      zIndex={9999}
      px={{ base: "1.5rem", sm: "3rem", lg: "4rem", xl: "10rem" }}
    >
      <Flex>
        <Image src={logo} alt="logo" boxSize="40px" />
      </Flex>
      <Flex gap={{ base: "20px", xl: "50px" }}>
        {!user && (
          <Button
            color="white"
            border="1px"
            background="transparent"
            borderColor="hsla(0, 0%, 100%, 0.6)"
            onClick={() => navigate("/login")}
            px="30px"
            _hover={{
              background: "#fff",
              borderColor: "#fff",
              color: "rgba(0, 0, 0, 0.9)",
              boxShadow: "0 6px 20px rgb(0 118 255 / 23%)",
            }}
            _active={{
              background: "#fff",
              borderColor: "#fff",
              color: "rgba(0, 0, 0, 0.9)",
              boxShadow: "0 6px 20px rgb(0 118 255 / 23%)",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            Sign in
          </Button>
        )}
        {user ? (
          <Button
            // bg="#0070f3"
            bgGradient="linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)"
            boxShadow="0 2px 6px 0 rgb(0 118 255 / 39%)"
            onClick={navigateTo}
            _hover={{
              bgGradient: "linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)",
              boxShadow: "0 6px 20px rgb(0 118 255 / 23%)",
            }}
            _active={{
              bgGradient: "linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)",
              boxShadow: "0 2px 6px 0 rgb(0 118 255 / 39%)",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            Go to Workspace
          </Button>
        ) : (
          <Button
            px="30px"
            bgGradient="linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)"
            display={{ base: "none", sm: "flex" }}
            _hover={{
              bgGradient: "linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)",
              boxShadow: "0 6px 20px rgb(0 118 255 / 23%)",
            }}
            _active={{
              bgGradient: "linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)",
              boxShadow: "0 2px 6px 0 rgb(0 118 255 / 39%)",
            }}
            _focus={{
              boxShadow: "none",
            }}
            onClick={() => navigate("/register")}
          >
            Sign up
          </Button>
        )}
      </Flex>
    </HStack>
  );
};

export default Navbar;
