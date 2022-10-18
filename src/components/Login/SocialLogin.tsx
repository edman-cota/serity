import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { auth, signInWithGoogle } from "../../firebase";
import { beautifyUsername } from "../../helpers/beautifyUsername";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      const username = beautifyUsername(user?.email);
      navigate(`/${username}/today/`);
    }
  }, [user, loading, navigate]);

  return (
    <Flex w="440px" p="25px">
      <List w="100%">
        <ListItem>
          <Button
            onClick={signInWithGoogle}
            px="42px"
            w="100%"
            border="1px"
            borderColor="gray.200"
            _hover={{ bg: "gray.200" }}
          >
            <Text as="span">
              <FcGoogle fontSize="22px" />
            </Text>
            <Text as="span" pl="20px">
              <FormattedMessage id="continue_with_google" />
            </Text>
          </Button>
        </ListItem>
      </List>
    </Flex>
  );
};

export default SocialLogin;
