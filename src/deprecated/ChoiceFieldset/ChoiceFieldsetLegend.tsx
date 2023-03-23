import React from 'react'
import {Box} from '../..'
import ToggleVisibility from '../../_ToggleVisibility'
import {ChoiceFieldsetContext, Slot} from './ChoiceFieldset'

export interface ChoiceFieldsetLegendProps {
  /**
   * Whether to visually hide the fieldset legend
   */
  visuallyHidden?: boolean
}

const ChoiceFieldsetLegend: React.FC<React.PropsWithChildren<ChoiceFieldsetLegendProps>> = ({
  children,
  visuallyHidden,
}) => (
  <Slot name="Legend">
    {({required, disabled}: ChoiceFieldsetContext) => (
      <ToggleVisibility
        as="legend"
        isVisible={!visuallyHidden}
        title={required ? 'required field' : undefined}
        sx={{
          color: disabled ? 'fg.muted' : undefined,
          fontSize: 2,
          padding: 0,
        }}
      >
        {required ? (
          <Box display="flex" as="span">
            <Box mr={1}>{children}</Box>
            <span>*</span>
          </Box>
        ) : (
          children
        )}
      </ToggleVisibility>
    )}
  </Slot>
)

export default ChoiceFieldsetLegend
