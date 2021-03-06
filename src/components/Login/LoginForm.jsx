/* eslint-disable no-empty */
/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Flex, VStack, Text, Link, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import SocialLogin from "./SocialLogin";
import { useGetActiveProject } from "../../hooks/useGetActiveProject";

import Header from "./Header";

const LoginForm = () => {
  const navigate = useNavigate();
  const { activeProject } = useGetActiveProject();
  const [user, loading] = useAuthState(auth);

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {}
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      const username = user?.email.split("@")[0];
      navigate(`/web/${username}/p/today/?view=tree`);
    }
  }, [user, loading, navigate, activeProject]);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <VStack
      h="100%"
      justifyContent="center"
      width={{ base: "100%", xl: "100%" }}
    >
      <Header />
      <SocialLogin />

      <VStack>
        <form
          style={{ width: "440px", padding: "25px" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            variant="filled"
            placeholder="Correo"
            _placeholder={{ color: "#999" }}
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <Text color="red.400" _before={{ content: `"??? "` }}>
              <FormattedMessage id="email_is_required" />
            </Text>
          )}

          <Input
            variant="filled"
            placeholder="Contrase??a"
            _placeholder={{ color: "#999" }}
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password?.type === "required" && (
            <Text color="red.400" _before={{ content: `"??? "` }}>
              <FormattedMessage id="password_is_required" />
            </Text>
          )}

          <Button variant="link" my="20px" color="teal.500">
            <FormattedMessage id="forgot_password" />
          </Button>

          <Input
            type="submit"
            bg="#2e85ec"
            value="Log in"
            disabled={!isDirty || !isValid}
          />
        </form>
      </VStack>

      <Flex w="440px" px="25px">
        <Text>
          <FormattedMessage id="dont_have_an_account_yet" />
          <Link color="teal.500" as={RouterLink} to="/register">
            <FormattedMessage id="register" />
          </Link>
        </Text>
      </Flex>
    </VStack>
  );
};

export default LoginForm;
