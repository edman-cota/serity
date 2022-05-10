import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import UploadImagesComponent from "../Uploads/UploadImages";

const FilesIcon = () => {
  const {
    isOpen: isUploadOpen,
    onOpen: onUploadOpen,
    onClose: onUploadClose,
  } = useDisclosure();

  const iconColor = useColorModeValue("#94959B", "#88898D");

  return (
    <>
      <Text p="6px" cursor="pointer" onClick={onUploadOpen}>
        <MdOutlinePhotoSizeSelectActual color={iconColor} />
      </Text>

      <Modal
        isCentered
        onClose={onUploadClose}
        isOpen={isUploadOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent maxW="500px" h="80%">
          <ModalHeader justifyContent="center" display="flex">
            Upload
          </ModalHeader>

          <ModalBody>
            <Flex w="100%">
              <UploadImagesComponent />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onUploadClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilesIcon;
