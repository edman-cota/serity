import { extendTheme } from '@chakra-ui/react'
import { inputTheme } from './components/input'
import { menuTheme } from './components/menu'
import { tooltipTheme } from './components/tooltip'
import { buttonTheme } from './components/button'
import { textareaTheme } from './components/textarea'
import { breakpoints } from './foundations/breakpoints'
import { selectTheme } from './components/select'
import { modalTheme } from './components/modal'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    gray: {
      700: '#1f2733',
    },
  },
  breakpoints,
  components: {
    Input: inputTheme,
    Menu: menuTheme,
    Tooltip: tooltipTheme,
    Button: buttonTheme,
    Textarea: textareaTheme,
    Select: selectTheme,
    Modal: modalTheme,
  },
})

export default theme
