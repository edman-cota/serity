import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { NavLink as RouteLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelp } from "react-icons/io";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsShieldCheck } from "react-icons/bs";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { logout, auth } from "../../firebase";
import { setSelectedTaskId } from "../../features/counter/selectedTaskIdSlice";
import { setActiveIndex } from "../../features/counter/activeIndexSlice";
import { setIsExpanded } from "../../features/counter/expandedSlice";
import { beautifyUsername } from "../../helpers/beautifyUsername";

interface NavProps {
  text: string;
  icon: JSX.Element;
}

const SettingsMenu = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const username = beautifyUsername(user?.email);

  const clearOpenTask = () => {
    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));
    dispatch(setIsExpanded(false));
  };

  return (
    <Menu autoSelect={false}>
      <Tooltip label={<FormattedMessage id="settings" />}>
        <MenuButton as={Button}>
          <IoSettingsOutline />
        </MenuButton>
      </Tooltip>
      <MenuList>
        <RouteLink to={`/${username}/settings`}>
          <NavLink text="settings" icon={<IoSettingsOutline />} />
        </RouteLink>
        <RouteLink to="/dev/">
          <NavLink text="help" icon={<IoMdHelp />} />
        </RouteLink>
        <RouteLink to={`/${username}/overview`}>
          <NavLink text="statistics" icon={<RiBarChartHorizontalLine />} />
        </RouteLink>
        <RouteLink to="/dev/">
          <NavLink text="premium" icon={<BsShieldCheck />} />
        </RouteLink>
        <MenuItem
          icon={<MdOutlineLogout />}
          fontSize="14px"
          onClick={() => {
            logout();
            clearOpenTask();
          }}
        >
          <FormattedMessage id="logout" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const NavLink = ({ text, icon }: NavProps) => (
  <MenuItem icon={icon} fontSize="14px">
    <FormattedMessage id={text} />
  </MenuItem>
);

export default SettingsMenu;
