/* eslint-disable arrow-body-style */
import React from "react"
import {
  Modal,
  MenuItem,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalBody,
  Flex,
  Select,
} from "@chakra-ui/react"
import { MdOutlineDriveFileMove } from "react-icons/md"
import { FormattedMessage } from "react-intl"

const MoveToMenuItemModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <MenuItem icon={<MdOutlineDriveFileMove />} onClick={onOpen}>
        <FormattedMessage id="move_to" />
      </MenuItem>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <FormattedMessage id="Transfer task" />
          </ModalHeader>
          <ModalBody>
            <Flex>You are about to transfer to project:</Flex>
            <Select placeholder="Select an existing project">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MoveToMenuItemModal
