import React, { createContext, useContext, useState } from 'react'
import { Container, Input, List, ListItem } from './Styled'

interface Props {
  children: any
  value?: string
  theme?: string
  width?: number
}

interface TriggerProps {
  value?: string
  placeholder: string
}

const SelectContext = createContext<any>('')

export default function Select({ children, theme = 'light', width = 200 }: Props) {
  const [toggle, setToggle] = useState(false)
  const [select, setSelect] = useState<string>('')
  return (
    <SelectContext.Provider value={{ theme, width, select, toggle, setSelect }}>
      <Container
        theme={theme}
        width={width}
        className={` ${toggle ? 'active' : ''}`}
        onClick={() => setToggle(!toggle)}
      >
        {children}
      </Container>
    </SelectContext.Provider>
  )
}

Select.Trigger = function SelectTrigger({ value, placeholder }: TriggerProps) {
  const { theme } = useContext(SelectContext)
  let valor = value
  if (theme !== '') {
    valor = theme
  }
  return <Input theme={theme} placeholder={placeholder} value={valor} readOnly />
}

Select.Content = function SelectContent({ children }: Props) {
  const { theme, width, toggle } = useContext(SelectContext)
  return (
    <List theme={theme} width={width} className={` ${toggle ? 'active' : ''}`}>
      {children}
    </List>
  )
}

export const SelectItem = ({ children, value }: Props) => {
  const { theme, setTheme } = useContext(SelectContext)
  return (
    <ListItem theme={theme} onClick={() => setTheme(value)}>
      {children}
    </ListItem>
  )
}
