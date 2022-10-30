import React from 'react'
import PropTypes from 'prop-types'
import { HStack } from '@chakra-ui/react'
import Sidebar from './Sidebar.tsx'
import Content from './Content'

const Settings = ({ currentLocale, handleChange }) => (
  <HStack h="100%" w="100%">
    <Sidebar />
    <Content currentLocale={currentLocale} handleChange={handleChange} />
  </HStack>
)

Settings.propTypes = {
  currentLocale: PropTypes.string,
  handleChange: PropTypes.func,
}

Settings.defaultProps = {
  currentLocale: '',
  handleChange: '',
}

export default Settings
