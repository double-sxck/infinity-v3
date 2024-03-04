import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const LogoIcon = ({ width = 61.41, height = 60 }: SVGAttributeProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 62 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M61.4118 53.8565C61.4118 57.0762 58.9411 59.7531 55.7416 60L5.67017 60C2.47064 59.7531 0 57.0762 0 53.8565V46.9687C0 40.3461 1.06414 33.7667 3.15145 27.4839L10.8826 4.21314C11.7185 1.69709 14.0653 0 16.7087 0H44.7031C47.3465 0 49.6932 1.6971 50.5291 4.21315L58.2603 27.4839C60.3476 33.7667 61.4118 40.3461 61.4118 46.9687V53.8565Z"
          fill="#2C333E"
        />
        <path
          d="M45.0353 53.4008H16.3765V45.1853H26.6118V16.431H16.3765V8.2155H45.0353V16.431H34.8V45.1853H45.0353V53.4008Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default LogoIcon;
