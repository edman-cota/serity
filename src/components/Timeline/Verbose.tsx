import { Text } from "@chakra-ui/react"
import { FormattedMessage } from "react-intl"

interface Props {
  type: number
}

const Verbose = ({ type }: Props): JSX.Element => {
  switch (type) {
    case 1:
      return (
        <Text as="span" pr="7px">
          <FormattedMessage id="added" />
        </Text>
      )
    case 2:
      return (
        <Text as="span" pr="7px">
          <FormattedMessage id="set_the_priority_of" />
        </Text>
      )
    case 3:
      return (
        <Text as="span" pr="7px">
          <FormattedMessage id="set_the_due_date_of" />
        </Text>
      )
    case 4:
      return (
        <Text as="span" pr="7px">
          <FormattedMessage id="unset_the_due_date_of" />
        </Text>
      )
    case 5:
      return (
        <Text as="span" pr="7px">
          <FormattedMessage id="completed" />
        </Text>
      )
    case 6:
      return (
        <Text as="span" pr="7px">
          <FormattedMessage id="reopen" />
        </Text>
      )
    case 7:
      return (
        <Text as="span" pr="7px">
          <FormattedMessage id="rename_the_task_to" />
        </Text>
      )
    case 8:
      return (
        <Text as="span" pr="7px">
          <FormattedMessage id="edit_description" />
        </Text>
      )
    default:
      return <Text as="span" pr="7px"></Text>
  }
}

export default Verbose
