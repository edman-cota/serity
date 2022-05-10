import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { GoTag } from "react-icons/go";

const TagIcon = (): JSX.Element => {
  const iconColor = useColorModeValue("#94959B", "#88898D");

  const openCalendar = () => {
    alert("Tag");
  };

  return (
    <Button variant="ghost" onClick={openCalendar} visibility="hidden">
      <GoTag color={iconColor} />
    </Button>
  );
};

export default TagIcon;
