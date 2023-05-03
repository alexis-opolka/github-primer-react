import { IconProps } from '@primer/octicons-react';
import React from 'react';
import { SxProp } from '../sx';
import { ComponentProps } from '../utils/types';
type OcticonProps = {
    icon: React.ElementType;
    color?: string;
} & IconProps;
declare function Octicon({ icon: IconComponent, ...rest }: OcticonProps): JSX.Element;
declare const StyledOcticon: import("styled-components").StyledComponent<typeof Octicon, any, SxProp, never>;
export type StyledOcticonProps = ComponentProps<typeof StyledOcticon>;
export default StyledOcticon;
