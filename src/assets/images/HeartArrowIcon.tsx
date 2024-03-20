import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const HeartArrowIcon = ({ width = 20, height = 20 }: SVGAttributeProps) => {
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
          d="M22.9999 17.0004C22.7347 17.0004 22.4803 17.1058 22.2928 17.2933C22.1053 17.4808 21.9999 17.7352 21.9999 18.0004V20.5864L19.0059 17.5924C21.1999 15.2504 22.9999 12.5474 22.9999 9.98741C23.0552 8.47032 22.5077 6.99303 21.4771 5.87833C20.4466 4.76363 19.0167 4.10214 17.4999 4.03841C16.5979 4.05015 15.7132 4.28812 14.927 4.73049C14.1408 5.17287 13.4782 5.8055 12.9999 6.57041C12.5217 5.8055 11.8591 5.17287 11.0728 4.73049C10.2866 4.28812 9.40196 4.05015 8.49992 4.03841C7.65186 4.04088 6.81765 4.25356 6.07192 4.65741L1.70692 0.293407C1.51832 0.111249 1.26571 0.0104547 1.00352 0.0127331C0.741321 0.0150115 0.490508 0.12018 0.3051 0.305589C0.119692 0.490997 0.0145233 0.741809 0.0122448 1.00401C0.00996641 1.2662 0.110761 1.51881 0.292919 1.70741L4.49992 5.91541C3.52478 7.04717 2.99199 8.49351 2.99992 9.98741C2.99992 13.7784 6.95092 17.8874 10.2649 20.6634C11.0306 21.3077 11.9992 21.661 12.9999 21.661C14.0006 21.661 14.9692 21.3077 15.7349 20.6634C16.3429 20.1534 16.9729 19.5984 17.5959 19.0094L20.5859 22.0004H17.9999C17.7347 22.0004 17.4803 22.1058 17.2928 22.2933C17.1053 22.4808 16.9999 22.7352 16.9999 23.0004C16.9999 23.2656 17.1053 23.52 17.2928 23.7075C17.4803 23.8951 17.7347 24.0004 17.9999 24.0004H21.9999C22.5304 24.0004 23.0391 23.7897 23.4141 23.4146C23.7892 23.0395 23.9999 22.5308 23.9999 22.0004V18.0004C23.9999 17.7352 23.8946 17.4808 23.707 17.2933C23.5195 17.1058 23.2651 17.0004 22.9999 17.0004ZM14.4499 19.1324C14.0391 19.4634 13.5275 19.6439 12.9999 19.6439C12.4724 19.6439 11.9607 19.4634 11.5499 19.1324C7.38692 15.6434 4.99992 12.3104 4.99992 9.98741C4.94512 9.00076 5.28208 8.03238 5.93751 7.29287C6.59294 6.55336 7.51384 6.10252 8.49992 6.03841C9.486 6.10252 10.4069 6.55336 11.0623 7.29287C11.7178 8.03238 12.0547 9.00076 11.9999 9.98741C11.9999 10.2526 12.1053 10.507 12.2928 10.6945C12.4804 10.8821 12.7347 10.9874 12.9999 10.9874C13.2651 10.9874 13.5195 10.8821 13.707 10.6945C13.8946 10.507 13.9999 10.2526 13.9999 9.98741C13.9451 9.00076 14.2821 8.03238 14.9375 7.29287C15.5929 6.55336 16.5138 6.10252 17.4999 6.03841C18.486 6.10252 19.4069 6.55336 20.0623 7.29287C20.7178 8.03238 21.0547 9.00076 20.9999 9.98741C20.9999 12.3094 18.6119 15.6424 14.4499 19.1324Z"
          fill="#2C333E"
        />
      </svg>
    </>
  );
};

export default HeartArrowIcon;
