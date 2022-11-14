import {
  StylesConfig,
  components,
  DropdownIndicatorProps,
  InputActionMeta,
  MultiValue,
  ActionMeta,
  OptionProps,
} from 'react-select'
import Select from 'react-select'
import { colourOptions, ColourOption } from './data'
import { AiOutlinePlus } from 'react-icons/ai'
import { addTagToTask } from '@helpers/addTagToTask'
import { useAuthState } from 'react-firebase-hooks/auth'
import database, { auth } from '../../firebase'
import { useGetProject } from '@hooks/useGetProject'
import { useGetTaskTags } from '@hooks/useGetTaskTags'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { removeTagFromTask } from '@helpers/removeTagFromTask'

const DropdownIndicator = (props: DropdownIndicatorProps<ColourOption, true>) => {
  return (
    <components.DropdownIndicator {...props}>
      <AiOutlinePlus color='white' />
    </components.DropdownIndicator>
  )
}

const Option = (props: OptionProps<ColourOption>) => {
  return (
    <div style={{ width: '100%' }}>
      <components.Option {...props} />
    </div>
  )
}

const colourStyles: StylesConfig<ColourOption, true> = {
  container: (styles) => ({
    ...styles,
    width: '100%',
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: '#1f2733',
    border: 'none',
    width: '100%',
    ':active': {
      border: 'none',
    },
  }),
  input: (styles) => ({
    ...styles,
    color: 'white',
  }),
  option: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: data.color,
      width: 'max-content',
      borderRadius: '4px',
      padding: '4px 30px',
      margin: '10px 30px',
      ':hover': {
        cursor: 'pointer',
      },
    }
  },
  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: data.color,
    borderRadius: '4px',
    marginRight: '4px',
    ':hover': {
      cursor: 'pointer',
    },
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    opacity: 0,
    ':hover': {
      opacity: 1,
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'black',
    width: 'max-content',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    opacity: 0,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '4px',
    },
  }),
}

const Tags = () => {
  const { tags } = useGetTaskTags()
  const [user] = useAuthState(auth)
  const { project } = useGetProject()
  const selectedTaskId = useSelector((state: RootState) => state.selectedTaskId.value)

  const handleOnChange = (
    newValue: MultiValue<ColourOption>,
    actionMeta: ActionMeta<ColourOption>,
  ) => {
    if (actionMeta.action === 'select-option') {
      // addTagToTask(user, project[0], actionMeta.option, selectedTaskId)
    }

    if (actionMeta.action === 'remove-value') {
      // removeTagFromTask(user, actionMeta.removedValue, selectedTaskId)
    }
  }

  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      components={{ DropdownIndicator, Option }}
      // defaultValue={colourOptions[0]}
      options={tags}
      isClearable={false}
      placeholder='Add tag'
      styles={colourStyles}
      onChange={handleOnChange}
    />
  )
}

export default Tags
// inpgress hendacmente
