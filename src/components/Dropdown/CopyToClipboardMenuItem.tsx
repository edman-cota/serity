import React from "react"
import { MenuItem } from "@chakra-ui/react"
import { BsLink45Deg } from "react-icons/bs"
import { FormattedMessage } from "react-intl"

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
    <MenuItem icon={<BsLink45Deg />} onClick={() => copyToClipboard()}>
      <FormattedMessage id="copy_link" />
    </MenuItem>
  )
}

export default CopyToClipboardMenuItem
