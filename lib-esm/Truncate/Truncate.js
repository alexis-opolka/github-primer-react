import styled from 'styled-components';
import { maxWidth } from 'styled-system';
import sx from '../sx.js';

const Truncate = styled.div.withConfig({
  displayName: "Truncate",
  componentId: "sc-23o1d2-0"
})(["display:", ";overflow:hidden;text-overflow:ellipsis;vertical-align:", ";white-space:nowrap;", " ", " ", ";"], props => props.inline ? 'inline-block' : 'inherit', props => props.inline ? 'top' : 'initial', maxWidth, props => props.expandable ? `&:hover { max-width: 10000px; }` : '', sx);

// TODO: Remove defaultProps to be compatible with the next major version of React
// Reference: https://github.com/primer/react/issues/2758
Truncate.defaultProps = {
  expandable: false,
  inline: false,
  maxWidth: 125
};
var Truncate$1 = Truncate;

export { Truncate$1 as default };
