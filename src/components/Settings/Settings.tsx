import { HStack } from '@chakra-ui/react'
import Sidebar from './Sidebar'
import React from 'react'
import PanelContent from './PanelContent'
import Account from './Account'
import { useParams } from 'react-router-dom'
import General from './General'
import Theme from './Theme'

interface Props {
  currentLocale: string
  handleChange: (e: any) => void
}

const Settings = ({ currentLocale, handleChange }: Props) => {
  const { setting } = useParams()

  return (
    <HStack h='100%' w='100%'>
      <Sidebar />
      <PanelContent>
        {setting === 'account' ? <Account /> : null}
        {setting === 'general' ? (
          <General currentLocale={currentLocale} handleChange={handleChange} />
        ) : null}
        {setting === 'theme' ? <Theme /> : null}
      </PanelContent>
    </HStack>
  )
}
export default Settings
