import React, { createContext, useContext, useState } from 'react'
import './styles.css'

interface Props {
  children: any
  value?: string
}

interface TriggerProps {
  value?: string
  placeholder: string
}

const ThemeContext = createContext('')

export default function Select({ children }: Props) {
  const [toggle, setToggle] = useState(false)
  const [theme, setTheme] = useState<string>('')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`nice-select ${toggle ? 'active' : ''}`} onClick={() => setToggle(!toggle)}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

Select.Trigger = function SelectTrigger({ value, placeholder }: TriggerProps) {
  const { theme } = useContext(ThemeContext)
  let valor = value
  if (theme !== '') {
    valor = theme
  }
  return <input type='text' placeholder={placeholder} value={valor} readOnly />
}

Select.Content = function SelectContent({ children }: Props) {
  return <ul className='list'>{children}</ul>
}

export const SelectItem = ({ children, value }: Props) => {
  const { setTheme } = useContext(ThemeContext)
  return <li onClick={() => setTheme(value)}>{children}</li>
}
