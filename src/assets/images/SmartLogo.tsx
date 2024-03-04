import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const SmartLogoIcon = ({ width = 10, height = 10 }: SVGAttributeProps) => {
  return <></>;
};

export default SmartLogoIcon;
