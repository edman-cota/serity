import { useState } from 'react'
import Routing from '@routes/index'
import { IntlProvider } from 'react-intl'
import { ChakraProvider, Flex } from '@chakra-ui/react'

import theme from '@theme/index'
import { LOCALES } from '@i18n/locales'
import { messages } from '@i18n/messages'
import React from 'react'

const App = () => {
  function getInitialLocal() {
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.ENGLISH
  }

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal())

  const handleChange = (value: string) => {
    setCurrentLocale(value.trim())
    localStorage.setItem('locale', value.trim())
  }

  return (
    <ChakraProvider theme={theme}>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Flex w='100%' overflow='hidden'>
          <Routing currentLocale={currentLocale} handleChange={handleChange} />
        </Flex>
      </IntlProvider>
    </ChakraProvider>
  )
}

export default App
