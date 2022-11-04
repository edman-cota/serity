import React from 'react'
import { motion } from 'framer-motion'

const MenuItem = ({ i }: { i: string }): JSX.Element => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 1,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <li style={{ color: 'black' }}>
      <a href='#home' style={{ color: 'black' }}>
        {i}
      </a>
    </li>
  )
}

export default MenuItem
