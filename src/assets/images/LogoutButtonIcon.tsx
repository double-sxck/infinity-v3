import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const LogoutButtonIcon = ({ width = 2.4, height = 2.4 }: SVGAttributeProps) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_88_74)">
        <path
          d="M11.476 15C11.2108 15 10.9564 15.1054 10.7689 15.2929C10.5814 15.4804 10.476 15.7348 10.476 16V19C10.476 19.7956 10.1599 20.5587 9.59732 21.1213C9.03471 21.6839 8.27165 22 7.476 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H7.476C8.27165 2 9.03471 2.31607 9.59732 2.87868C10.1599 3.44129 10.476 4.20435 10.476 5V8C10.476 8.26522 10.5814 8.51957 10.7689 8.70711C10.9564 8.89464 11.2108 9 11.476 9C11.7412 9 11.9956 8.89464 12.1831 8.70711C12.3706 8.51957 12.476 8.26522 12.476 8V5C12.4744 3.67441 11.9471 2.40356 11.0098 1.46622C10.0724 0.528882 8.80159 0.00158786 7.476 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H7.476C8.80159 23.9984 10.0724 23.4711 11.0098 22.5338C11.9471 21.5964 12.4744 20.3256 12.476 19V16C12.476 15.7348 12.3706 15.4804 12.1831 15.2929C11.9956 15.1054 11.7412 15 11.476 15Z"
          fill="#2C333E"
        />
        <path
          d="M22.8672 9.8792L18.2812 5.2932C18.189 5.19769 18.0787 5.12151 17.9566 5.0691C17.8346 5.01669 17.7034 4.98911 17.5706 4.98795C17.4379 4.9868 17.3062 5.0121 17.1833 5.06238C17.0604 5.11266 16.9487 5.18692 16.8548 5.28081C16.761 5.3747 16.6867 5.48635 16.6364 5.60925C16.5861 5.73215 16.5608 5.86383 16.562 5.9966C16.5631 6.12938 16.5907 6.2606 16.6431 6.38261C16.6956 6.50461 16.7717 6.61496 16.8672 6.7072L21.1292 10.9702L6.00024 11.0002C5.73503 11.0002 5.48067 11.1056 5.29314 11.2931C5.1056 11.4806 5.00024 11.735 5.00024 12.0002C5.00024 12.2654 5.1056 12.5198 5.29314 12.7073C5.48067 12.8948 5.73503 13.0002 6.00024 13.0002L21.1882 12.9692L16.8652 17.2932C16.7697 17.3855 16.6936 17.4958 16.6411 17.6178C16.5887 17.7398 16.5611 17.871 16.56 18.0038C16.5588 18.1366 16.5841 18.2683 16.6344 18.3912C16.6847 18.5141 16.759 18.6257 16.8529 18.7196C16.9467 18.8135 17.0584 18.8877 17.1813 18.938C17.3042 18.9883 17.4359 19.0136 17.5686 19.0125C17.7014 19.0113 17.8326 18.9837 17.9547 18.9313C18.0767 18.8789 18.187 18.8027 18.2792 18.7072L22.8652 14.1212C23.4279 13.5589 23.7442 12.7961 23.7446 12.0006C23.745 11.2051 23.4294 10.4421 22.8672 9.8792Z"
          fill="#2C333E"
        />
      </g>
      <defs>
        <clipPath id="clip0_88_74">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoutButtonIcon;