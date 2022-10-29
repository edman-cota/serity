import React, { useState } from "react"
import { IntlProvider } from "react-intl"
import { ChakraProvider, Flex } from "@chakra-ui/react"
import Routing from "./routes/index"

import theme from "./theme/index"
import { LOCALES } from "./i18n/locales"
import { messages } from "./i18n/messages"
import "./App.css"

const App = () => {
  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale")
    return savedLocale || LOCALES.ENGLISH
  }

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal())

  const handleChange = (e: any) => {
    setCurrentLocale(e.target.value)
    localStorage.setItem("locale", e.target.value)
  }

  return (
    <ChakraProvider theme={theme}>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Flex w="100%" overflow="hidden">
          <Routing currentLocale={currentLocale} handleChange={handleChange} />
        </Flex>
      </IntlProvider>
    </ChakraProvider>
  )
}

export default App
