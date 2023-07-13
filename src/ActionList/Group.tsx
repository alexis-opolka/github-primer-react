import React from 'react'
import {useId} from '../hooks/useId'
import Box from '../Box'
import {SxProp} from '../sx'
import {ListContext, ActionListProps} from './List'
import {AriaRole} from '../utils/types'

export type ActionListGroupProps = {
  /**
   * Style variations. Usage is discretionary.
   *
   * - `"filled"` - Superimposed on a background, offset from nearby content
   * - `"subtle"` - Relatively less offset from nearby content
   */
  variant?: 'subtle' | 'filled'
  /**
   * Primary text which names a `Group`.
   */
  title?: string
  /**
   * Secondary text which provides additional information about a `Group`.
   */
  auxiliaryText?: string
  /**
   * The ARIA role describing the function of the list inside `Group` component. `listbox` or `menu` are a common values.
   */
  role?: AriaRole
} & SxProp & {
    /**
     * Whether multiple Items or a single Item can be selected in the Group. Overrides value on ActionList root.
     */
    selectionVariant?: ActionListProps['selectionVariant'] | false
  }

type ContextProps = Pick<ActionListGroupProps, 'selectionVariant'>
export const GroupContext = React.createContext<ContextProps>({})

export const Group: React.FC<React.PropsWithChildren<ActionListGroupProps>> = ({
  title,
  variant = 'subtle',
  auxiliaryText,
  selectionVariant,
  role,
  sx = {},
  ...props
}) => {
  const labelId = useId()
  const {role: listRole} = React.useContext(ListContext)

  return (
    <Box
      as="li"
      role={listRole ? 'none' : undefined}
      sx={{
        '&:not(:first-child)': {marginTop: 2},
        listStyle: 'none', // hide the ::marker inserted by browser's stylesheet
        ...sx,
      }}
      {...props}
    >
      {title && <Header title={title} variant={variant} auxiliaryText={auxiliaryText} labelId={labelId} />}
      <GroupContext.Provider value={{selectionVariant}}>
        <Box
          as="ul"
          sx={{paddingInlineStart: 0}}
          aria-labelledby={title ? labelId : undefined}
          role={role || (listRole && 'group')}
        >
          {props.children}
        </Box>
      </GroupContext.Provider>
    </Box>
  )
}

export type HeaderProps = Pick<ActionListGroupProps, 'variant' | 'title' | 'auxiliaryText'> & {
  labelId: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Displays the title and description of a `Group`.
 *
 */
const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  variant,
  title,
  auxiliaryText,
  labelId,
  as = 'h3',
  ...props
}) => {
  const {variant: listVariant} = React.useContext(ListContext)

  const wrapperStyles = {
    paddingY: '6px',
    paddingX: listVariant === 'full' ? 2 : 3,
    ...(variant === 'filled' && {
      backgroundColor: 'canvas.subtle',
      marginX: 0,
      marginBottom: 2,
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'neutral.muted',
    }),
  }
  const headerStyles = {marginBottom: 0, marginTop: 0, fontSize: 0, fontWeight: 'bold', color: 'fg.muted'}

  return (
    <Box sx={wrapperStyles} {...props}>
      <Box as={as} id={labelId} sx={headerStyles}>
        {title}
      </Box>
      {auxiliaryText && <span>{auxiliaryText}</span>}
    </Box>
  )
}
