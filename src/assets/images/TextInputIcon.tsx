import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const TextInputIcon = ({ width = 40, height = 40 }: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_101_1797)">
        <path
          d="M31.6667 0H8.33333C6.12401 0.00264643 4.00593 0.88147 2.4437 2.4437C0.88147 4.00593 0.00264643 6.12401 0 8.33333L0 31.6667C0.00264643 33.876 0.88147 35.9941 2.4437 37.5563C4.00593 39.1185 6.12401 39.9974 8.33333 40H31.6667C33.876 39.9974 35.9941 39.1185 37.5563 37.5563C39.1185 35.9941 39.9974 33.876 40 31.6667V8.33333C39.9974 6.12401 39.1185 4.00593 37.5563 2.4437C35.9941 0.88147 33.876 0.00264643 31.6667 0V0ZM36.6667 31.6667C36.6667 32.9927 36.1399 34.2645 35.2022 35.2022C34.2645 36.1399 32.9927 36.6667 31.6667 36.6667H8.33333C7.00725 36.6667 5.73548 36.1399 4.7978 35.2022C3.86012 34.2645 3.33333 32.9927 3.33333 31.6667V8.33333C3.33333 7.00725 3.86012 5.73548 4.7978 4.7978C5.73548 3.86012 7.00725 3.33333 8.33333 3.33333H31.6667C32.9927 3.33333 34.2645 3.86012 35.2022 4.7978C36.1399 5.73548 36.6667 7.00725 36.6667 8.33333V31.6667ZM30 15C30 15.442 29.8244 15.8659 29.5118 16.1785C29.1993 16.4911 28.7754 16.6667 28.3333 16.6667C27.8913 16.6667 27.4674 16.4911 27.1548 16.1785C26.8423 15.8659 26.6667 15.442 26.6667 15C26.6667 14.558 26.4911 14.134 26.1785 13.8215C25.8659 13.5089 25.442 13.3333 25 13.3333H21.6667V26.6667H23.3333C23.7754 26.6667 24.1993 26.8423 24.5118 27.1548C24.8244 27.4674 25 27.8913 25 28.3333C25 28.7754 24.8244 29.1993 24.5118 29.5118C24.1993 29.8244 23.7754 30 23.3333 30H16.6667C16.2246 30 15.8007 29.8244 15.4882 29.5118C15.1756 29.1993 15 28.7754 15 28.3333C15 27.8913 15.1756 27.4674 15.4882 27.1548C15.8007 26.8423 16.2246 26.6667 16.6667 26.6667H18.3333V13.3333H15C14.558 13.3333 14.134 13.5089 13.8215 13.8215C13.5089 14.134 13.3333 14.558 13.3333 15C13.3333 15.442 13.1577 15.8659 12.8452 16.1785C12.5326 16.4911 12.1087 16.6667 11.6667 16.6667C11.2246 16.6667 10.8007 16.4911 10.4882 16.1785C10.1756 15.8659 10 15.442 10 15C10 13.6739 10.5268 12.4021 11.4645 11.4645C12.4021 10.5268 13.6739 10 15 10H25C26.3261 10 27.5979 10.5268 28.5355 11.4645C29.4732 12.4021 30 13.6739 30 15Z"
          fill="#2C333E"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_1797">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TextInputIcon;