/* eslint-disable no-empty */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
// eslint-disable-next-line object-curly-newline
import { Input, VStack, Text, Flex, Link, Checkbox } from "@chakra-ui/react";
import SocialLogin from "../Login/SocialLogin";
import { registerWithEmailAndPassword } from "../../firebase.ts";
import Header from "../Login/LoginHeader.tsx";
import Footer from "../Login/Footer.tsx";
import "./index.scss";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    if (data.password.localeCompare(data.cpassword)) {
      try {
        registerWithEmailAndPassword(data.name, data.email, data.password);
      } catch (e) {}
    }
  };

  return (
    <VStack h="100%" justifyContent="center" width="100%">
      <Header />
      <SocialLogin />

      <VStack>
        <form
          style={{ width: "440px", padding: "25px" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            variant="pill"
            placeholder="Nombre de usuario"
            _placeholder={{ color: "#999" }}
            {...register("name", { required: true })}
            name="name"
          />
          {errors.name?.type === "required" && (
            <Text color="red.400" _before={{ content: '"⚠ "' }}>
              <FormattedMessage id="username_is_required" />
            </Text>
          )}

          <Input
            variant="pill"
            placeholder="Correo electronico"
            _placeholder={{ color: "#999" }}
            {...register("email", { required: true })}
            type="email"
            name="email"
          />
          {errors.email?.type === "required" && (
            <Text color="red.400" _before={{ content: '"⚠ "' }}>
              <FormattedMessage id="email_is_required" />
            </Text>
          )}

          <Input
            variant="pill"
            placeholder="Contraseña"
            _placeholder={{ color: "#999" }}
            {...register("password", { required: true, minLength: 8 })}
            type="password"
            name="password"
          />
          {errors.password?.type === "required" && (
            <Text color="red.400" _before={{ content: '"⚠ "' }}>
              <FormattedMessage id="password_is_required" />
            </Text>
          )}

          <Flex mt="20px">
            <Checkbox
              variant="filled"
              iconColor="white"
              iconSize={6}
              spacing=".75rem"
            >
              <Text fontSize="14px">
                I agree to the{" "}
                <Link to="/terms" color="#09f">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" color="#09f">
                  Privacy Statement
                </Link>{" "}
              </Text>
            </Checkbox>
          </Flex>

          <button className="cssbuttons-io-button" type="submit">
            Get started
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>

          {/* <Input
            type="submit"
            bg="#2e85ec"
            mt="20px"
            value="Get started"
            _hover={{ bg: "#0071dc" }}
          /> */}
        </form>
      </VStack>

      <Footer textId="already_have_an_account" whereTo="login" />
    </VStack>
  );
};

export default RegisterForm;
