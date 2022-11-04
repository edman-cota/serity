/* eslint-disable object-curly-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuButton, MenuList, MenuItem, Avatar, Button, Portal } from '@chakra-ui/react'
import { NavLink as RouteLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { MdOutlineLogout } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoMdHelp } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsShieldCheck } from 'react-icons/bs'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { logout, auth } from '../../firebase.ts'
import { setSelectedTaskId } from '../../features/counter/selectedTaskIdSlice.ts'
import { setActiveIndex } from '../../features/counter/activeIndexSlice.ts'
import { setIsExpanded } from '../../features/counter/expandedSlice.ts'

const ProfileItem = () => {
  const dispatch = useDispatch()
  const [user] = useAuthState(auth)
  const username = user?.email.split('@')[0]

  const clearOpenTask = () => {
    dispatch(setSelectedTaskId(''))
    dispatch(setActiveIndex(''))
    dispatch(setIsExpanded(false))
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button} variant='ghost'>
        <Avatar src='https://assets.codepen.io/t-1/user-default-avatar.jpg' w='5' h='5' />
      </MenuButton>
      <Portal>
        <MenuList>
          <RouteLink to={`/${username}/settings`}>
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
      </Portal>
    </Menu>
  )
}

const NavLink = ({ text, icon }) => (
  <MenuItem icon={icon} fontSize='14px'>
    <FormattedMessage id={text} />
  </MenuItem>
)

NavLink.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
}

NavLink.defaultProps = {
  text: '',
  icon: '',
}

export default ProfileItem
