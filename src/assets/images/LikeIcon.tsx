import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const LikeIcon = ({
  width = 4.0,
  height = 4.0,
  color = "#D9d9d9",
}: SVGAttributeProps) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
        fill={color}
      />
      <path
        d="M25.4999 9.91653C24.3739 9.93405 23.2724 10.2484 22.3067 10.8278C21.341 11.4072 20.5453 12.2312 19.9999 13.2165C19.4546 12.2312 18.6589 11.4072 17.6932 10.8278C16.7275 10.2484 15.626 9.93405 14.4999 9.91653C12.7049 9.99452 11.0136 10.7798 9.7957 12.1008C8.57778 13.4217 7.93217 15.1711 7.99992 16.9665C7.99992 21.5135 12.7859 26.4795 16.7999 29.8465C17.6961 30.5997 18.8293 31.0126 19.9999 31.0126C21.1706 31.0126 22.3037 30.5997 23.1999 29.8465C27.2139 26.4795 31.9999 21.5135 31.9999 16.9665C32.0677 15.1711 31.4221 13.4217 30.2041 12.1008C28.9862 10.7798 27.295 9.99452 25.4999 9.91653Z"
        fill="white"
      />
    </svg>
  );
};

export default LikeIcon;
