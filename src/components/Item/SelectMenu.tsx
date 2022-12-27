import React, { useState, useEffect } from 'react'
import { matchSorter } from 'match-sorter'
import styles from './styles.module.scss'

const MENU_HEIGHT = 150
const allowedTags = [
  {
    id: 'page-title',
    tag: 'h1',
    label: 'Page Title',
  },
  {
    id: 'heading',
    tag: 'h2',
    label: 'Heading',
  },
  {
    id: 'subheading',
    tag: 'h3',
    label: 'Subheading',
  },
  {
    id: 'paragraph',
    tag: 'p',
    label: 'Paragraph',
  },
  {
    id: 'image',
    tag: 'img',
    label: 'Image',
  },
]

interface Props {
  position: any
  closeMenu: () => void
  handleSelection: (tag: string) => void
}

const SelectMenu = ({ position, closeMenu, handleSelection }: Props) => {
  const [tagList, setTagList] = useState(allowedTags)
  const [selectedTag, setSelectedTag] = useState(0)
  const [command, setCommand] = useState('')

  // If the tag selector menu is display outside the top viewport,
  // we display it below the block
  const isMenuOutsideOfTopViewport = position.y - MENU_HEIGHT < 0
  const y = !isMenuOutsideOfTopViewport ? position.y - MENU_HEIGHT : position.y + MENU_HEIGHT / 3
  const x = position.x

  // filter tag list based on given command
  useEffect(() => {
    setTagList(matchSorter(allowedTags, command, { keys: ['tag'] }))
  }, [command])

  // Attach listener to allow tag selection via keyboard
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleSelection(tagList[selectedTag].tag)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div
      className={styles.menuWrapper}
      style={{
        top: y,
        left: x,
        justifyContent: !isMenuOutsideOfTopViewport ? 'flex-end' : 'flex-start',
      }}
    >
      <div className={styles.menu}>
        {tagList.map((tag, key) => {
          return (
            <div
              key={key}
              data-tag={tag.tag}
              className={
                tagList.indexOf(tag) === selectedTag
                  ? [styles.item, styles.selectedTag].join(' ')
                  : styles.item
              }
              role='button'
              tabIndex={0}
              onClick={() => handleSelection(tag.tag)}
            >
              {tag.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectMenu
