import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const CopyIcon = ({ width = 20, height = 24 }: SVGAttributeProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.494 7.96787L7.954 0.967865C7.20889 0.42225 6.32722 0.0936595 5.40677 0.0185285C4.48631 -0.0566025 3.56302 0.124662 2.7393 0.542223C1.91557 0.959783 1.22358 1.59732 0.740058 2.38415C0.25654 3.17098 0.000386015 4.07635 0 4.99987V18.9999C0.000164771 19.9238 0.256333 20.8296 0.740075 21.6168C1.22382 22.404 1.91621 23.0417 2.74042 23.4593C3.56463 23.8768 4.48841 24.0578 5.40925 23.9822C6.33008 23.9066 7.21196 23.5773 7.957 23.0309L17.497 16.0309C18.1303 15.5665 18.6452 14.9594 19.0002 14.2589C19.3552 13.5584 19.5401 12.7842 19.5401 11.9989C19.5401 11.2136 19.3552 10.4393 19.0002 9.73881C18.6452 9.03831 18.1303 8.43127 17.497 7.96687L17.494 7.96787ZM16.31 14.4179L6.77 21.4179C6.32302 21.7445 5.79437 21.9411 5.24257 21.9858C4.69078 22.0306 4.13736 21.9218 3.64357 21.6715C3.14978 21.4212 2.73488 21.0391 2.4448 20.5676C2.15472 20.0961 2.00078 19.5535 2 18.9999V4.99987C1.99445 4.44521 2.1455 3.90025 2.43578 3.42759C2.72606 2.95493 3.1438 2.57376 3.641 2.32787C4.06389 2.11276 4.53154 2.00038 5.006 1.99987C5.64189 2.00229 6.26022 2.20875 6.77 2.58887L16.31 9.58887C16.6895 9.86756 16.9981 10.2317 17.2107 10.6517C17.4234 11.0718 17.5343 11.536 17.5343 12.0069C17.5343 12.4777 17.4234 12.9419 17.2107 13.362C16.9981 13.7821 16.6895 14.1462 16.31 14.4249V14.4179Z"
          fill="#2C333E"
        />
      </svg>
    </>
  );
};

export default CopyIcon;
