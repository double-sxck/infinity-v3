import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const BookIcon = ({ width = 2.0, height = 2.0 }: SVGAttributeProps) => {
  return (
    <>
      <svg
        width={`${width}rem`}
        height={`${height}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0002 0H7.00024C5.67465 0.00158786 4.4038 0.528882 3.46646 1.46622C2.52913 2.40356 2.00183 3.67441 2.00024 5V20C2.00024 21.0609 2.42167 22.0783 3.17182 22.8284C3.92196 23.5786 4.93938 24 6.00024 24H17.0002C18.3258 23.9984 19.5967 23.4711 20.534 22.5338C21.4714 21.5964 21.9987 20.3256 22.0002 19V5C21.9987 3.67441 21.4714 2.40356 20.534 1.46622C19.5967 0.528882 18.3258 0.00158786 17.0002 0V0ZM20.0002 5V16H8.00024V2H17.0002C17.7959 2 18.559 2.31607 19.1216 2.87868C19.6842 3.44129 20.0002 4.20435 20.0002 5ZM6.00024 2.172V16C5.29787 15.9994 4.60785 16.1847 4.00024 16.537V5C4.00033 4.37969 4.1927 3.77466 4.55088 3.2682C4.90905 2.76175 5.41541 2.37877 6.00024 2.172ZM17.0002 22H6.00024C5.46981 22 4.9611 21.7893 4.58603 21.4142C4.21096 21.0391 4.00024 20.5304 4.00024 20C4.00024 19.4696 4.21096 18.9609 4.58603 18.5858C4.9611 18.2107 5.46981 18 6.00024 18H20.0002V19C20.0002 19.7956 19.6842 20.5587 19.1216 21.1213C18.559 21.6839 17.7959 22 17.0002 22Z"
          fill="#2C333E"
        />
      </svg>
    </>
  );
};

export default BookIcon;
