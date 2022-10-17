import React from "react";
import { Button, Tooltip } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BsLayoutSidebarReverse, BsLayoutSidebar } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

import { setSidebarVisibility } from "../../features/counter/SidebarVisibilitySlice";

const ToggleSidebarVisibility = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen.value);

  const toggleSidebarVisibility = () => {
    dispatch(setSidebarVisibility(!isSidebarOpen));
  };

  return (
    <Tooltip label={<FormattedMessage id="toggle_sidebar" />}>
      <Button onClick={toggleSidebarVisibility}>
        {isSidebarOpen ? <BsLayoutSidebarReverse /> : <BsLayoutSidebar />}
      </Button>
    </Tooltip>
  );
};

export default ToggleSidebarVisibility;
