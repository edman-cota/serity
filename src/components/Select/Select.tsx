import React, { createContext, useContext, useState } from 'react'
import { Container, Input, List, ListItem } from './Styled'

interface Props {
  children: any
  value?: string
}

interface TriggerProps {
  value?: string
  placeholder: string
}

const ThemeContext = createContext<any>('')

export default function Select({ children }: Props) {
  const [toggle, setToggle] = useState(false)
  const [theme, setTheme] = useState<string>('')
  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      <Container className={` ${toggle ? 'active' : ''}`} onClick={() => setToggle(!toggle)}>
        {children}
      </Container>
    </ThemeContext.Provider>
  )
}

Select.Trigger = function SelectTrigger({ value, placeholder }: TriggerProps) {
  const { theme } = useContext(ThemeContext)
  let valor = value
  if (theme !== '') {
    valor = theme
  }
  return <Input type='text' placeholder={placeholder} value={valor} readOnly />
}

Select.Content = function SelectContent({ children }: Props) {
  const { toggle } = useContext(ThemeContext)
  return <List className={` ${toggle ? 'active' : ''}`}>{children}</List>
}

export const SelectItem = ({ children, value }: Props) => {
  const { setTheme } = useContext(ThemeContext)
  return <ListItem onClick={() => setTheme(value)}>{children}</ListItem>
}
