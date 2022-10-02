import React from "react";
import {
  Tooltip,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Tooltip label="Switch Theme">
      <IconButton
        variant="ghost"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Tooltip>
  );
};

export default ColorModeSwitcher;
