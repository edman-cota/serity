import React, { createContext, useContext, useState, useRef } from 'react'
import { Container, Input, List, ListItem } from './Styled'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  style?: React.CSSProperties
  value?: string
  theme?: string
  width?: number
  onValueChange?: (value: string) => void
}

interface TriggerProps {
  value?: string
  placeholder: string
}

const SelectContext = createContext<any>('')

export default function Select({ children, theme = 'light', width = 200, onValueChange }: Props) {
  const [toggle, setToggle] = useState(false)
  const [select, setSelect] = useState<string>('')
  return (
    <SelectContext.Provider value={{ theme, width, select, toggle, setSelect, onValueChange }}>
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
  const { theme, select } = useContext(SelectContext)
  let valor = value
  if (select !== '') {
    valor = select
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
  const { theme, setSelect, onValueChange } = useContext(SelectContext)
  const elementRef = useRef(null)

  const handleOnClick = (e) => {
    if (typeof onValueChange === 'function') {
      onValueChange(value)
    }
    setSelect(e.target.innerHTML)
  }

  return (
    <ListItem ref={elementRef} theme={theme} onClick={(e) => handleOnClick(e)}>
      {children}
    </ListItem>
  )
}
