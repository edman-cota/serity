import React from "react"
import { Button } from "@chakra-ui/react"
import { IoNotificationsOutline } from "react-icons/io5"

const NotificationsItem = () => (
  <Button
    bg="transparent"
    _hover={{ boxShadow: "none" }}
    _focus={{ boxShadow: "none" }}
    _active={{ background: "transparent" }}
  >
    <IoNotificationsOutline />
  </Button>
)

export default NotificationsItem
