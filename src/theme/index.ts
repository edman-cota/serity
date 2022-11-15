import { mode } from '@chakra-ui/theme-tools'
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { inputTheme } from './components/input'
import { menuTheme } from './components/menu'
import { tooltipTheme } from './components/tooltip'
import { buttonTheme } from './components/button'
import { textareaTheme } from './components/textarea'
import { breakpoints } from './foundations/breakpoints'
import { selectTheme } from './components/select'
import { modalTheme } from './components/modal'
import { StyleConfig } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
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
  styles: {
    global: (props: StyleConfig) => ({
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: mode('white', 'transparent')(props),
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        background: mode('#ddd', 'rgba(255, 255, 255, 0.15)')(props),
        borderRadius: '8px',
        border: '2px',
        borderColor: 'transparent',
        backgroundClip: 'padding-box',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: mode('#bbb', 'rgba(255, 255, 255, 0.3)')(props),
      },
    }),
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
