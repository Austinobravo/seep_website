import React, { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
    classNames?: string;
    size?: number
}

export type IconComponentType = React.ComponentType<IconProps & { size?: number }>