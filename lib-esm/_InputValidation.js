import { CheckCircleFillIcon, AlertFillIcon } from '@primer/octicons-react';
import React__default from 'react';
import Text from './Text/Text.js';
import Box from './Box/Box.js';

const validationIconMap = {
  success: CheckCircleFillIcon,
  error: AlertFillIcon,
  warning: AlertFillIcon
};
const validationColorMap = {
  success: 'success.fg',
  error: 'danger.fg',
  warning: 'attention.fg'
};
const InputValidation = ({
  children,
  id,
  validationStatus,
  sx
}) => {
  const IconComponent = validationStatus ? validationIconMap[validationStatus] : undefined;
  const fgColor = validationStatus ? validationColorMap[validationStatus] : undefined;
  return /*#__PURE__*/React__default.createElement(Text, {
    sx: {
      fontSize: 0,
      fontWeight: 'bold',
      alignItems: 'center',
      color: fgColor,
      display: 'flex',
      a: {
        color: 'currentColor',
        textDecoration: 'underline'
      },
      ...sx
    }
  }, IconComponent && /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    mr: 1,
    sx: {
      display: 'flex'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement(IconComponent, {
    size: 12,
    fill: "currentColor"
  })), /*#__PURE__*/React__default.createElement("span", {
    id: id
  }, children));
};
InputValidation.displayName = "InputValidation";
var InputValidation$1 = InputValidation;

export { InputValidation$1 as default };
