import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const CopyIcon = ({ width = 2.0, height = 2.0 }: SVGAttributeProps) => {
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
          d="M11.0002 20.0001C12.3258 19.9985 13.5967 19.4712 14.534 18.5339C15.4714 17.5965 15.9987 16.3257 16.0002 15.0001V6.24308C16.0018 5.71744 15.899 5.19672 15.6978 4.7111C15.4966 4.22548 15.2011 3.78462 14.8282 3.41408L12.5862 1.17208C12.2157 0.799252 11.7748 0.503681 11.2892 0.302499C10.8036 0.101316 10.2829 -0.00147692 9.75724 7.84247e-05H5.00024C3.67465 0.00166628 2.4038 0.52896 1.46646 1.4663C0.529126 2.40364 0.001832 3.67448 0.000244141 5.00008V15.0001C0.001832 16.3257 0.529126 17.5965 1.46646 18.5339C2.4038 19.4712 3.67465 19.9985 5.00024 20.0001H11.0002ZM2.00024 15.0001V5.00008C2.00024 4.20443 2.31631 3.44137 2.87892 2.87876C3.44153 2.31615 4.20459 2.00008 5.00024 2.00008C5.00024 2.00008 9.91924 2.01408 10.0002 2.02408V4.00008C10.0002 4.53051 10.211 5.03922 10.586 5.41429C10.9611 5.78936 11.4698 6.00008 12.0002 6.00008H13.9762C13.9862 6.08108 14.0002 15.0001 14.0002 15.0001C14.0002 15.7957 13.6842 16.5588 13.1216 17.1214C12.559 17.684 11.7959 18.0001 11.0002 18.0001H5.00024C4.20459 18.0001 3.44153 17.684 2.87892 17.1214C2.31631 16.5588 2.00024 15.7957 2.00024 15.0001ZM20.0002 8.00008V19.0001C19.9987 20.3257 19.4714 21.5965 18.534 22.5339C17.5967 23.4712 16.3258 23.9985 15.0002 24.0001H6.00024C5.73503 24.0001 5.48067 23.8947 5.29314 23.7072C5.1056 23.5196 5.00024 23.2653 5.00024 23.0001C5.00024 22.7349 5.1056 22.4805 5.29314 22.293C5.48067 22.1054 5.73503 22.0001 6.00024 22.0001H15.0002C15.7959 22.0001 16.559 21.684 17.1216 21.1214C17.6842 20.5588 18.0002 19.7957 18.0002 19.0001V8.00008C18.0002 7.73486 18.1056 7.48051 18.2931 7.29297C18.4807 7.10544 18.735 7.00008 19.0002 7.00008C19.2655 7.00008 19.5198 7.10544 19.7074 7.29297C19.8949 7.48051 20.0002 7.73486 20.0002 8.00008Z"
          fill="#2C333E"
        />
      </svg>
    </>
  );
};

export default CopyIcon;
