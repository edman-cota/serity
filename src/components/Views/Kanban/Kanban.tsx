import React from "react"
import { Flex } from "@chakra-ui/react"

import Board from "../../Board/index"
import Navbar from "../../Navbar/Navbar"

const Kanban = (): JSX.Element => {
  return (
    <Flex direction="column" width="100%">
      <Navbar />
      <Board />
    </Flex>
  )
}

export default Kanban
