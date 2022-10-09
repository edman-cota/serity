import React from "react";
import { Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { BiFlag } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import "./Activities.scss";

interface IconProps {
  type: number;
}

const Icon = ({ type }: IconProps): JSX.Element => {
  switch (type) {
    case 1:
      return (
        <Text className="time" bg="#4772fa">
          <AiOutlinePlus />
        </Text>
      );
    case 2:
      return (
        <Text className="time" bg="#C9C43F">
          <BiFlag />
        </Text>
      );
    case 3:
      return (
        <Text className="time" bg="#5243AA">
          <HiOutlineCalendar />
        </Text>
      );
    case 4:
      return (
        <Text className="time" bg="#5243AA">
          <HiOutlineCalendar />
        </Text>
      );
    case 5:
      return (
        <Text className="time" bg="#36B37E">
          <BsCheck2 />
        </Text>
      );
    case 6:
      return (
        <Text className="time" bg="#4772fa">
          <VscCircleLargeOutline />
        </Text>
      );
    case 7:
      return (
        <Text className="time" bg="#00B8D9">
          <AiOutlineEdit />
        </Text>
      );
    case 8:
      return (
        <Text className="time" bg="#FF8B00">
          <AiOutlineEdit />
        </Text>
      );

    default:
      return <VscCircleLargeOutline />;
  }
};

export default Icon;
