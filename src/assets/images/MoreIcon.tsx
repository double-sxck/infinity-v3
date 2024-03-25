import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const CoffeeIcon = ({ width = 2.0, height = 2.0 }: SVGAttributeProps) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_90_297)">
          <path
            d="M2 14.0003C3.10457 14.0003 4 13.1049 4 12.0003C4 10.8957 3.10457 10.0003 2 10.0003C0.89543 10.0003 0 10.8957 0 12.0003C0 13.1049 0.89543 14.0003 2 14.0003Z"
            fill="#2C333E"
          />
          <path
            d="M12 14.0003C13.1046 14.0003 14 13.1049 14 12.0003C14 10.8957 13.1046 10.0003 12 10.0003C10.8954 10.0003 10 10.8957 10 12.0003C10 13.1049 10.8954 14.0003 12 14.0003Z"
            fill="#2C333E"
          />
          <path
            d="M22 14.0003C23.1046 14.0003 24 13.1049 24 12.0003C24 10.8957 23.1046 10.0003 22 10.0003C20.8954 10.0003 20 10.8957 20 12.0003C20 13.1049 20.8954 14.0003 22 14.0003Z"
            fill="#2C333E"
          />
        </g>
        <defs>
          <clipPath id="clip0_90_297">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default CoffeeIcon;
