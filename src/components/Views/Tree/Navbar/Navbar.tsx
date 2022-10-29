/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { Flex, List, ListItem, Button } from "@chakra-ui/react"
import { Tooltip } from "custom-react-tooltip"
import { useDispatch, useSelector } from "react-redux"
import { FiChevronsRight } from "react-icons/fi"
import { MdOutlineHistoryToggleOff } from "react-icons/md"
import { CgMinimizeAlt } from "react-icons/cg"
import { AiOutlineExpandAlt } from "react-icons/ai"
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi"
import { useWindowSize } from "react-use"
import { FormattedMessage } from "react-intl"

import { setSelectedTaskId } from "../../../../features/counter/selectedTaskIdSlice"
import { setActiveIndex } from "../../../../features/counter/activeIndexSlice"
import DropdownTaskOptions from "../../../Dropdown/DropdownTaskOptions"
import { setTaskActivityVisibility } from "../../../../features/counter/taskActivitySlice"
import { setIsExpanded } from "../../../../features/counter/expandedSlice"
import type { RootState } from "../../../../store"

const Navbar = () => {
  const { width } = useWindowSize()
  const dispatch = useDispatch()
  const isTaskActivityVisible = useSelector(
    (state: RootState) => state.isTaskActivityVisible.value,
  )
  const isExpanded = useSelector((state: RootState) => state.isExpanded.value)
  const label = isExpanded ? (
    <FormattedMessage id="contract" />
  ) : (
    <FormattedMessage id="expand" />
  )

  const closeView = () => {
    dispatch(setSelectedTaskId(""))
    dispatch(setActiveIndex(-1))
    dispatch(setIsExpanded(false))
  }

  const expandScreen = () => {
    dispatch(setIsExpanded(!isExpanded))
  }

  const toggleTaskActivityVisibility = () => {
    dispatch(setTaskActivityVisibility(!isTaskActivityVisible))
  }

  return (
    <Flex
      h="55px"
      w="100%"
      justifyContent="space-between"
      px="10px"
      my="10px"
      alignItems="center"
    >
      <Flex>
        <Tooltip
          label={<FormattedMessage id="hide_detail_panel" />}
          placement="left"
          command="SPACE"
        >
          <Button px="0px" onClick={() => closeView()}>
            <FiChevronsRight size={19} />
          </Button>
        </Tooltip>
        {isExpanded ? (
          <>
            <Tooltip label="Move up" command="K">
              <Button>
                <HiOutlineChevronUp />
              </Button>
            </Tooltip>
            <Tooltip label="Move down" command="J">
              <Button>
                <HiOutlineChevronDown />
              </Button>
            </Tooltip>
          </>
        ) : null}
      </Flex>
      <List display="flex" alignItems="center" gap="20px">
        {width >= 770 ? (
          <ListItem>
            <Tooltip label={label} command="⇧ + SPACE">
              <Button onClick={expandScreen}>
                {isExpanded ? <CgMinimizeAlt /> : <AiOutlineExpandAlt />}
              </Button>
            </Tooltip>
          </ListItem>
        ) : null}
        <ListItem>
          <Tooltip label={<FormattedMessage id="toggle_task_activity" />}>
            <Button onClick={toggleTaskActivityVisibility}>
              <MdOutlineHistoryToggleOff />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem>
          <DropdownTaskOptions />
        </ListItem>
      </List>
    </Flex>
  )
}

export default Navbar
