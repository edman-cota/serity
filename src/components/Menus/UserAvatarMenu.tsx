import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { NavLink as RouteLink, useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { MdOutlineLogout } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoMdHelp } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsShieldCheck } from 'react-icons/bs'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { logout, auth } from '../../firebase'
import { setSelectedTaskId } from '../../features/counter/selectedTaskIdSlice'
import { setActiveIndex } from '../../features/counter/activeIndexSlice'
import { setIsExpanded } from '../../features/counter/expandedSlice'
import { formatUsername } from '../../helpers/formatter'
import React, { useEffect } from 'react'
import { setNavHistory } from '@features/counter/saveNavHistorySlice'
import { UserAvatar } from '@components/Navbar/UserAvatar'

interface NavProps {
  text: string
  icon: JSX.Element
}

const UserAvatarMenu = () => {
  const dispatch = useDispatch()
  const [user] = useAuthState(auth)
  const username = formatUsername(user?.email)
  const { project } = useParams()

  useEffect(() => {
    dispatch(setNavHistory(project || 'today'))
  })

  const clearOpenTask = () => {
    dispatch(setSelectedTaskId(''))
    dispatch(setActiveIndex(-1))
    dispatch(setIsExpanded(false))
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton>
        <UserAvatar user={{ name: user?.displayName, image: user?.photoURL }} />
      </MenuButton>

      <MenuList>
        <RouteLink to={`/${username}/settings/account`}>
          <NavLink text='settings' icon={<IoSettingsOutline />} />
        </RouteLink>
        <RouteLink to='/dev/'>
          <NavLink text='help' icon={<IoMdHelp />} />
        </RouteLink>
        <RouteLink to={`/${username}/overview`}>
          <NavLink text='statistics' icon={<RiBarChartHorizontalLine />} />
        </RouteLink>
        <RouteLink to='/dev/'>
          <NavLink text='premium' icon={<BsShieldCheck />} />
        </RouteLink>
        <MenuItem
          icon={<MdOutlineLogout />}
          fontSize='14px'
          onClick={() => {
            logout()
            clearOpenTask()
          }}
        >
          <FormattedMessage id='logout' />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

const NavLink = ({ text, icon }: NavProps) => (
  <MenuItem icon={icon} fontSize='14px'>
    <FormattedMessage id={text} />
  </MenuItem>
)

export default UserAvatarMenu
