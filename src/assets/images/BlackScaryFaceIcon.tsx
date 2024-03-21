import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const BlackScaryFaceIcon = ({ width = 20, height = 20 }: SVGAttributeProps) => {
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
        <path d="M50 80C44.0666 80 38.2664 78.2405 33.3329 74.9441C28.3994 71.6477 24.5543 66.9623 22.2836 61.4805C20.013 55.9987 19.4189 49.9667 20.5765 44.1473C21.734 38.3279 24.5912 32.9824 28.7868 28.7868C32.9824 24.5912 38.3279 21.734 44.1473 20.5765C49.9667 19.4189 55.9987 20.013 61.4805 22.2836C66.9623 24.5543 71.6477 28.3994 74.9441 33.3329C78.2405 38.2664 80 44.0666 80 50C79.9914 57.9539 76.8279 65.5795 71.2037 71.2037C65.5795 76.8279 57.9539 79.9914 50 80Z" fill="white"/>
        <path d="M61.1348 64.7178C60.791 64.8947 60.4115 64.9912 60.025 65H40C39.6107 65.0002 39.2267 64.9094 38.8787 64.735C38.5306 64.5606 38.2281 64.3073 37.9953 63.9953C37.7624 63.6832 37.6057 63.3212 37.5375 62.9379C37.4693 62.5546 37.4915 62.1607 37.6025 61.7875C38.4976 59.1703 40.1613 56.8839 42.3761 55.227C44.591 53.5701 47.2541 52.6197 50.0175 52.5C52.7838 52.6091 55.4519 53.5554 57.6687 55.2138C59.8856 56.8722 61.5467 59.1645 62.4325 61.7875C62.5326 62.1609 62.5465 62.5522 62.4732 62.9319C62.4 63.3115 62.2414 63.6695 62.0096 63.9789C61.7777 64.2883 61.4786 64.541 61.1348 64.7178Z" fill="#2C333E"/>
        <path d="M40 47.5C37.2375 47.5 35 47.5 35 45C35 43.6739 35.5268 42.4022 36.4645 41.4645C37.4021 40.5268 38.6739 40 40 40C41.3261 40 42.5978 40.5268 43.5355 41.4645C44.4732 42.4022 45 43.6739 45 45C45 47.5 42.7625 47.5 40 47.5Z" fill="#2C333E"/>
        <path d="M60 47.5C57.2375 47.5 55 47.5 55 45C55 43.6739 55.5268 42.4022 56.4645 41.4645C57.4021 40.5268 58.6739 40 60 40C61.3261 40 62.5978 40.5268 63.5355 41.4645C64.4732 42.4022 65 43.6739 65 45C65 47.5 62.7625 47.5 60 47.5Z" fill="#2C333E"/>
      </svg>
    </>
  );
};

export default BlackScaryFaceIcon;