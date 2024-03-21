import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const BlackHeartArrowIcon = ({ width = 20, height = 20 }: SVGAttributeProps) => {
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
        <path d="M77.4998 62.501C76.8368 62.501 76.2009 62.7644 75.7321 63.2332C75.2632 63.7021 74.9998 64.338 74.9998 65.001V71.466L67.5148 63.981C72.9998 58.126 77.4998 51.3685 77.4998 44.9685C77.638 41.1758 76.2693 37.4825 73.6929 34.6958C71.1164 31.9091 67.5417 30.2553 63.7498 30.096C61.4947 30.1254 59.2831 30.7203 57.3175 31.8262C55.352 32.9322 53.6955 34.5137 52.4998 36.426C51.3042 34.5137 49.6477 32.9322 47.6821 31.8262C45.7166 30.7203 43.505 30.1254 41.2498 30.096C39.1297 30.1022 37.0442 30.6339 35.1798 31.6435L24.2673 20.7335C23.7958 20.2781 23.1643 20.0261 22.5088 20.0318C21.8533 20.0375 21.2263 20.3004 20.7628 20.764C20.2993 21.2275 20.0364 21.8545 20.0307 22.51C20.025 23.1655 20.2769 23.797 20.7323 24.2685L31.2498 34.7885C28.812 37.6179 27.48 41.2338 27.4998 44.9685C27.4998 54.446 37.3773 64.7185 45.6623 71.6585C47.5766 73.2692 49.9981 74.1524 52.4998 74.1524C55.0016 74.1524 57.4231 73.2692 59.3373 71.6585C60.8573 70.3835 62.4323 68.996 63.9898 67.5235L71.4648 75.001H64.9998C64.3368 75.001 63.7009 75.2644 63.2321 75.7332C62.7632 76.2021 62.4998 76.838 62.4998 77.501C62.4998 78.164 62.7632 78.7999 63.2321 79.2688C63.7009 79.7376 64.3368 80.001 64.9998 80.001H74.9998C76.3259 80.001 77.5977 79.4742 78.5354 78.5365C79.4731 77.5989 79.9998 76.3271 79.9998 75.001V65.001C79.9998 64.338 79.7365 63.7021 79.2676 63.2332C78.7988 62.7644 78.1629 62.501 77.4998 62.501Z" fill="white"/>
      </svg>
    </>
  );
};

export default BlackHeartArrowIcon;