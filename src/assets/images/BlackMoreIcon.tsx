import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const BlackMoreIcon = ({ width = 20, height = 20 }: SVGAttributeProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z" fill="#2C333E"/>
        <path d="M25 55.0007C27.7614 55.0007 30 52.7622 30 50.0008C30 47.2393 27.7614 45.0008 25 45.0008C22.2386 45.0008 20 47.2393 20 50.0008C20 52.7622 22.2386 55.0007 25 55.0007Z" fill="white"/>
        <path d="M50.0002 55.0007C52.7616 55.0007 55.0002 52.7622 55.0002 50.0008C55.0002 47.2393 52.7616 45.0008 50.0002 45.0008C47.2388 45.0008 45.0002 47.2393 45.0002 50.0008C45.0002 52.7622 47.2388 55.0007 50.0002 55.0007Z" fill="white"/>
        <path d="M74.9999 55.0007C77.7613 55.0007 79.9999 52.7622 79.9999 50.0008C79.9999 47.2393 77.7613 45.0008 74.9999 45.0008C72.2384 45.0008 69.9999 47.2393 69.9999 50.0008C69.9999 52.7622 72.2384 55.0007 74.9999 55.0007Z" fill="white"/>
      </svg>
    </>
  );
};

export default BlackMoreIcon;
