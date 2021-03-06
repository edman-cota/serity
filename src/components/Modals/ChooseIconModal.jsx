import React from "react";
import {
  Modal,
  Text,
  Button,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
// import Picker from "emoji-picker-react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
// import { setEmoji } from "../../features/counter/EmojiSlice";

const ChooseIconModal = () => {
  // const dispatch = useDispatch();
  const emoji = useSelector((state) => state.emoji.value);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const background = useColorModeValue("white", "#282e3e");

  // const onEmojiClick = (event, emojiObject) => {
  //   dispatch(setEmoji(emojiObject.emoji));
  //   onClose();
  // };

  return (
    <>
      <Button
        onClick={onOpen}
        bg="rgba(255, 255, 255, 0.06)"
        w="100%"
        display="flex"
        justifyContent="space-between"
        mt="20px"
      >
        <FormattedMessage id="choose_an_icon" />
        <span style={{ display: "flex", alignItems: "center" }}>
          {emoji}
          <BiChevronRight />
        </span>
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent maxW="400px" h="80%" bg={background}>
          <ModalBody>
            <Flex justifyContent="space-between" alignItems="center">
              <Text>Choose an icon</Text>
              <Button
                variant="ghost"
                px="0rem"
                borderRadius="full"
                onClick={onClose}
              >
                <AiOutlineClose />
              </Button>
            </Flex>
            {/* <Picker onEmojiClick={onEmojiClick} /> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChooseIconModal;
