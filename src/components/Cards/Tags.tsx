import {
  StylesConfig,
  components,
  DropdownIndicatorProps,
  InputActionMeta,
  MultiValue,
  ActionMeta,
} from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { colourOptions, ColourOption } from './data'
import { AiOutlinePlus } from 'react-icons/ai'
import { createNewTag } from '@helpers/createNewTag'
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
    }
  },
  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: data.color,
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
      // createNewTag(user, project[0], actionMeta.option, selectedTaskId)
    }

    if (actionMeta.action === 'remove-value') {
      // removeTagFromTask(user, actionMeta.removedValue, selectedTaskId)
    }
  }

  return (
    <CreatableSelect
      isMulti
      components={{ DropdownIndicator }}
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
