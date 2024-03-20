import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const BrashIcon = ({ width = 2.4, height = 2.4 }: SVGAttributeProps) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.0999 0.899786C22.5162 0.343808 21.741 0.0336914 20.9349 0.0336914C20.1288 0.0336914 19.3536 0.343808 18.7699 0.899786L7.5629 12.0998C7.21425 12.0327 6.85995 11.9992 6.5049 11.9998C5.7831 11.9977 5.06807 12.1388 4.4012 12.415C3.73433 12.6912 3.12887 13.097 2.6199 13.6088C1.2679 14.9618 0.3139 18.5918 0.0309004 20.5628C-0.0318798 20.9891 -0.00205158 21.4241 0.118355 21.8379C0.238761 22.2517 0.446918 22.6347 0.728655 22.9609C1.01039 23.287 1.3591 23.5486 1.75103 23.7279C2.14296 23.9072 2.56892 23.9999 2.9999 23.9998C3.14678 23.9998 3.29349 23.9895 3.4389 23.9688C5.4099 23.6858 9.0389 22.7318 10.3929 21.3798C11.0287 20.7422 11.498 19.9581 11.7596 19.0965C12.0211 18.2349 12.0669 17.3222 11.8929 16.4388L23.0999 5.22978C23.6726 4.65478 23.9941 3.87631 23.9941 3.06478C23.9941 2.25326 23.6726 1.47478 23.0999 0.899786ZM8.9769 19.9658C8.2519 20.6908 5.4769 21.6548 3.1529 21.9888C2.99759 22.0112 2.83918 21.9973 2.69014 21.9482C2.54109 21.8991 2.40546 21.8161 2.2939 21.7058C2.18273 21.5948 2.09927 21.4592 2.05028 21.3099C2.00129 21.1607 1.98814 21.002 2.0119 20.8468C2.3449 18.5238 3.3119 15.7468 4.0339 15.0228C4.70014 14.4227 5.57127 14.1012 6.4676 14.1246C7.36392 14.1481 8.21708 14.5146 8.85109 15.1486C9.48511 15.7826 9.85162 16.6357 9.87503 17.5321C9.89844 18.4284 9.57696 19.2995 8.9769 19.9658ZM21.6879 3.81578L11.0669 14.4378C10.6723 13.8403 10.1623 13.3276 9.5669 12.9298L20.1839 2.31178C20.3859 2.11886 20.6545 2.01121 20.9339 2.01121C21.2133 2.01121 21.4819 2.11886 21.6839 2.31178C21.7831 2.41017 21.8619 2.52717 21.9158 2.65607C21.9697 2.78497 21.9976 2.92324 21.998 3.06295C21.9984 3.20267 21.9712 3.34108 21.918 3.47027C21.8648 3.59945 21.7866 3.71686 21.6879 3.81578Z"
        fill="#2C333E"
      />
    </svg>
  );
};

export default BrashIcon;
