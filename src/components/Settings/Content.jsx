/* eslint-disable comma-dangle */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {
  Flex,
  Text,
  Avatar,
  Input,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react"
import { FormattedMessage } from "react-intl"
import { AiOutlineCamera } from "react-icons/ai"
import { useAuthState } from "react-firebase-hooks/auth"
import { LOCALES } from "../../i18n/locales.ts"
import { auth, storage } from "../../firebase.ts"

const Content = ({ handleChange, currentLocale }) => {
  const [user, loading] = useAuthState(auth)

  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Spanish", code: LOCALES.SPANISH },
  ]

  const onChangeImage = (e) => {
    if (e.target.files[0] == null) return

    storage
      .ref(`/users/${user?.uid}/profile/${e.target.files[0].name}`)
      .put(e.target.files[0])
      .on("state_changed", () => {
        storage
          .ref(`users/${user?.uid}/profile`)
          .child(e.target.files[0].name)
          .getDownloadURL()
          .then((url) => {
            user.updateProfile({ photoURL: url }).then(() => {})
          })
      })
  }

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (loading) return
  }, [loading])

  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput")
    fileInput.click()
  }

  return (
    <VStack w="100%" flex={1}>
      <Flex direction="column" w="100%">
        <Flex
          bgGradient="linear-gradient(to-r, #CC4194, #EF967A)"
          h="200px"
          position="relative"
        >
          <Button fontSize="20px">
            <AiOutlineCamera />
          </Button>
          <Flex position="absolute" top="125px" left="70px">
            {user && (
              <Avatar
                w="120px"
                h="120px"
                src={user?.photoURL}
                onClick={handleEditPicture}
                cursor="pointer"
              />
            )}
          </Flex>
        </Flex>
        <Flex mt="30px" position="relative">
          <Flex direction="column" ml="5px" justifyContent="center">
            <input
              type="file"
              id="imageInput"
              hidden="hidden"
              onChange={onChangeImage}
            />
          </Flex>
        </Flex>
        <Flex direction="column">
          <Flex direction="column" mt="30px">
            <Text>
              <FormattedMessage id="name" />
            </Text>
            <FormattedMessage id="name" defaultMessage="Name">
              {(placeholder) => (
                <Input placeholder={placeholder} value={user?.displayName} />
              )}
            </FormattedMessage>
          </Flex>
          <Flex direction="column" mt="30px">
            <Text>
              <FormattedMessage id="email" />
            </Text>
            <FormattedMessage id="email" defaultMessage="Email">
              {(placeholder) => (
                <Input
                  placeholder={placeholder}
                  value={user?.email}
                  isReadOnly
                />
              )}
            </FormattedMessage>
          </Flex>
          <Flex direction="column" mt="30px">
            <Text>
              <FormattedMessage id="profession" />
            </Text>
            <FormattedMessage id="profession" defaultMessage="Profession">
              {(placeholder) => <Input placeholder={placeholder} />}
            </FormattedMessage>
          </Flex>
          <Flex>
            <Select onChange={handleChange} value={currentLocale}>
              {languages.map(({ name, code }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </Select>
          </Flex>
        </Flex>
      </Flex>
    </VStack>
  )
}

Content.propTypes = {
  currentLocale: PropTypes.string,
  handleChange: PropTypes.func,
}

Content.defaultProps = {
  currentLocale: "",
  handleChange: "",
}

export default Content
