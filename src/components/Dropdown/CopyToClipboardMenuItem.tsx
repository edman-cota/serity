import React from 'react'
import { MenuItem } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'

const CopyToClipboardMenuItem = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(document.URL).then(
      () => {
        console.log(document.URL)
      },
      (error) => {
        console.log(error)
      },
    )
  }

  return (
    <MenuItem onClick={() => copyToClipboard()}>
      <FormattedMessage id='copy_link' />
    </MenuItem>
  )
}

export default CopyToClipboardMenuItem
