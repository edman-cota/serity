/* eslint-disable no-empty */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
// eslint-disable-next-line object-curly-newline
import { Input, VStack, Text, Flex, Link, Checkbox } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import { registerWithEmailAndPassword } from "../../firebase";
import Header from "../Login/Header";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
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
            variant="filled"
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
            variant="filled"
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
            variant="filled"
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

          <Input
            type="submit"
            bg="#2e85ec"
            mt="20px"
            value="Sign up with email"
            disabled={!isDirty || !isValid}
          />
        </form>
      </VStack>

      <Flex w="440px" px="25px">
        <Text>
          <FormattedMessage id="already_have_an_account" />{" "}
          <Link color="teal.500" as={RouterLink} to="/login">
            <FormattedMessage id="login" />
          </Link>
        </Text>
      </Flex>
    </VStack>
  );
};

export default RegisterForm;
