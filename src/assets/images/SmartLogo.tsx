import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const SmartLogoIcon = ({ width = 62, height = 50 }: SVGAttributeProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 80 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7556 31.6739H21.9056C21.773 31.6739 21.6515 31.6183 21.541 31.5072C21.4526 31.4182 21.4085 31.3182 21.4085 31.2071V24.6723C21.4085 24.45 21.3643 24.3055 21.2759 24.2388C21.1875 24.1722 21.0218 24.1388 20.7788 24.1388H4.37448C4.26402 24.1388 4.15355 24.0944 4.04308 24.0055C3.93262 23.9165 3.87738 23.8165 3.87738 23.7054V21.3382C3.87738 21.2048 3.93262 21.1048 4.04308 21.0381C4.15355 20.9714 4.26402 20.9381 4.37448 20.9381H23.0323C23.8719 20.9381 24.4463 21.1159 24.7556 21.4715C25.0649 21.805 25.2196 22.394 25.2196 23.2386V31.2071C25.2196 31.3182 25.1643 31.4182 25.0539 31.5072C24.9655 31.6183 24.8661 31.6739 24.7556 31.6739ZM25.7829 11.4693H17.5311C16.6915 11.4693 16.0729 11.2692 15.6752 10.8691C15.2996 10.469 15.1118 9.88002 15.1118 9.10207V2.80064C15.1118 1.956 15.2996 1.3892 15.6752 1.10025C16.0729 0.789068 16.6915 0.633477 17.5311 0.633477H25.551C25.6835 0.633477 25.794 0.677932 25.8824 0.766841C25.9928 0.855749 26.0481 0.955771 26.0481 1.06691V3.20073C26.0481 3.33409 25.9928 3.44523 25.8824 3.53413C25.794 3.62304 25.6835 3.6675 25.551 3.6675H19.3538C18.934 3.6675 18.7241 3.85643 18.7241 4.23429V7.90179C18.7241 8.14629 18.7683 8.30189 18.8567 8.36857C18.9671 8.43525 19.1328 8.46859 19.3538 8.46859H25.7829C25.9597 8.46859 26.0812 8.52416 26.1475 8.63529C26.2359 8.7242 26.28 8.82423 26.28 8.93536V11.0358C26.28 11.3248 26.1143 11.4693 25.7829 11.4693ZM13.9519 10.9358C13.5101 11.047 12.9357 11.147 12.2287 11.2359C11.5438 11.3026 10.8257 11.3581 10.0746 11.4026C9.32339 11.447 8.59431 11.4804 7.88732 11.5026C7.18034 11.5026 6.60591 11.4804 6.16404 11.4359C5.50124 11.3692 4.94891 11.1581 4.50704 10.8025C4.06518 10.4246 3.84424 9.88002 3.84424 9.16875V2.80064C3.84424 2.02268 4.03204 1.467 4.40762 1.13359C4.8053 0.800181 5.42392 0.633477 6.26346 0.633477H13.4217C13.731 0.633477 13.8857 0.777954 13.8857 1.06691V3.20073C13.8857 3.51191 13.731 3.6675 13.4217 3.6675H8.08616C7.68848 3.6675 7.48964 3.85643 7.48964 4.23429V7.73509C7.48964 7.97959 7.53383 8.14629 7.6222 8.2352C7.71058 8.32411 7.88732 8.37968 8.15244 8.40191C8.37338 8.42414 8.70478 8.43525 9.14664 8.43525C9.58851 8.41302 10.0635 8.39079 10.5717 8.36857C11.0798 8.32411 11.588 8.27966 12.0961 8.2352C12.6263 8.16852 13.0903 8.10184 13.488 8.03516C13.6426 7.9907 13.7752 8.00182 13.8857 8.0685C14.0182 8.11295 14.0956 8.22409 14.1176 8.40191L14.3828 10.269C14.427 10.469 14.3938 10.6246 14.2833 10.7358C14.1729 10.8469 14.0624 10.9136 13.9519 10.9358ZM29.2958 18.5042H0.46396C0.3314 18.5042 0.220933 18.4486 0.13256 18.3375C0.0441867 18.2264 0 18.1152 0 18.0041V15.9036C0 15.7702 0.0441867 15.6591 0.13256 15.5702C0.220933 15.4591 0.3314 15.4035 0.46396 15.4035H12.9909V12.3361C12.9909 12.2028 13.0351 12.0916 13.1234 12.0027C13.2118 11.8916 13.3223 11.836 13.4548 11.836H16.3049C16.4375 11.836 16.5479 11.8916 16.6363 12.0027C16.7247 12.0916 16.7689 12.2028 16.7689 12.3361V15.4035H29.2958C29.4062 15.4035 29.5167 15.4591 29.6272 15.5702C29.7376 15.6813 29.7929 15.7925 29.7929 15.9036V18.0041C29.7929 18.1152 29.7376 18.2264 29.6272 18.3375C29.5167 18.4486 29.4062 18.5042 29.2958 18.5042Z"
          fill="#2C333E"
        />
        <path
          d="M49.6106 31.6739H46.7606C46.628 31.6739 46.5065 31.6183 46.396 31.5072C46.3077 31.4182 46.2635 31.3182 46.2635 31.2071V24.6723C46.2635 24.45 46.2193 24.3055 46.1309 24.2388C46.0425 24.1722 45.8768 24.1388 45.6338 24.1388H29.2295C29.119 24.1388 29.0086 24.0944 28.8981 24.0055C28.7876 23.9165 28.7324 23.8165 28.7324 23.7054V21.3382C28.7324 21.2048 28.7876 21.1048 28.8981 21.0381C29.0086 20.9714 29.119 20.9381 29.2295 20.9381H47.8873C48.7269 20.9381 49.3013 21.1159 49.6106 21.4715C49.9199 21.805 50.0746 22.394 50.0746 23.2386V31.2071C50.0746 31.3182 50.0193 31.4182 49.9089 31.5072C49.8205 31.6183 49.7211 31.6739 49.6106 31.6739ZM50.6379 11.4693H42.3861C41.5465 11.4693 40.9279 11.2692 40.5302 10.8691C40.1547 10.469 39.9669 9.88002 39.9669 9.10207V2.80064C39.9669 1.956 40.1547 1.3892 40.5302 1.10025C40.9279 0.789068 41.5465 0.633477 42.3861 0.633477H50.406C50.5385 0.633477 50.649 0.677932 50.7374 0.766841C50.8478 0.855749 50.9031 0.955771 50.9031 1.06691V3.20073C50.9031 3.33409 50.8478 3.44523 50.7374 3.53413C50.649 3.62304 50.5385 3.6675 50.406 3.6675H44.2088C43.789 3.6675 43.5791 3.85643 43.5791 4.23429V7.90179C43.5791 8.14629 43.6233 8.30189 43.7117 8.36857C43.8222 8.43525 43.9878 8.46859 44.2088 8.46859H50.6379C50.8147 8.46859 50.9362 8.52416 51.0025 8.63529C51.0909 8.7242 51.135 8.82423 51.135 8.93536V11.0358C51.135 11.3248 50.9693 11.4693 50.6379 11.4693ZM38.807 10.9358C38.3651 11.047 37.7907 11.147 37.0837 11.2359C36.3988 11.3026 35.6808 11.3581 34.9296 11.4026C34.1784 11.447 33.4493 11.4804 32.7423 11.5026C32.0354 11.5026 31.4609 11.4804 31.0191 11.4359C30.3563 11.3692 29.8039 11.1581 29.3621 10.8025C28.9202 10.4246 28.6993 9.88002 28.6993 9.16875V2.80064C28.6993 2.02268 28.887 1.467 29.2626 1.13359C29.6603 0.800181 30.2789 0.633477 31.1185 0.633477H38.2767C38.586 0.633477 38.7407 0.777954 38.7407 1.06691V3.20073C38.7407 3.51191 38.586 3.6675 38.2767 3.6675H32.9412C32.5435 3.6675 32.3447 3.85643 32.3447 4.23429V7.73509C32.3447 7.97959 32.3888 8.14629 32.4772 8.2352C32.5656 8.32411 32.7423 8.37968 33.0075 8.40191C33.2284 8.42414 33.5598 8.43525 34.0017 8.43525C34.4435 8.41302 34.9185 8.39079 35.4267 8.36857C35.9348 8.32411 36.443 8.27966 36.9511 8.2352C37.4814 8.16852 37.9453 8.10184 38.343 8.03516C38.4977 7.9907 38.6302 8.00182 38.7407 8.0685C38.8732 8.11295 38.9506 8.22409 38.9727 8.40191L39.2378 10.269C39.282 10.469 39.2488 10.6246 39.1384 10.7358C39.0279 10.8469 38.9174 10.9136 38.807 10.9358ZM54.1508 18.5042H25.319C25.1864 18.5042 25.0759 18.4486 24.9876 18.3375C24.8992 18.2264 24.855 18.1152 24.855 18.0041V15.9036C24.855 15.7702 24.8992 15.6591 24.9876 15.5702C25.0759 15.4591 25.1864 15.4035 25.319 15.4035H37.8459V12.3361C37.8459 12.2028 37.8901 12.0916 37.9785 12.0027C38.0668 11.8916 38.1773 11.836 38.3099 11.836H41.1599C41.2925 11.836 41.4029 11.8916 41.4913 12.0027C41.5797 12.0916 41.6239 12.2028 41.6239 12.3361V15.4035H54.1508C54.2613 15.4035 54.3717 15.4591 54.4822 15.5702C54.5927 15.6813 54.6479 15.7925 54.6479 15.9036V18.0041C54.6479 18.1152 54.5927 18.2264 54.4822 18.3375C54.3717 18.4486 54.2613 18.5042 54.1508 18.5042Z"
          fill="#2C333E"
        />
        <path
          d="M60.0497 12.3361C59.0113 12.3361 58.1497 12.6251 57.4648 13.203C56.7799 13.7809 56.4375 14.4811 56.4375 15.3035C56.4375 16.1481 56.7799 16.8705 57.4648 17.4706C58.1497 18.0708 59.0113 18.3708 60.0497 18.3708C61.1102 18.3708 61.9718 18.0708 62.6346 17.4706C63.3195 16.8705 63.662 16.1481 63.662 15.3035C63.662 14.4811 63.3195 13.7809 62.6346 13.203C61.9718 12.6251 61.1102 12.3361 60.0497 12.3361ZM60.0497 9.36879C61.0439 9.36879 61.9829 9.52439 62.8666 9.83557C63.7503 10.1467 64.5126 10.5691 65.1533 11.1025C65.8161 11.636 66.3353 12.2695 66.7109 13.003C67.0864 13.7142 67.2742 14.4811 67.2742 15.3035C67.2742 16.1481 67.0864 16.9372 66.7109 17.6707C66.3353 18.382 65.8161 19.0043 65.1533 19.5378C64.5126 20.0712 63.7503 20.4935 62.8666 20.8047C61.9829 21.1159 61.0329 21.2715 60.0166 21.2715C59.0224 21.2715 58.0944 21.1159 57.2328 20.8047C56.3712 20.4935 55.6089 20.0712 54.9461 19.5378C54.3054 19.0043 53.7973 18.382 53.4217 17.6707C53.0461 16.9372 52.8583 16.1481 52.8583 15.3035C52.8583 14.4811 53.0461 13.7142 53.4217 13.003C53.7973 12.2695 54.3054 11.636 54.9461 11.1025C55.6089 10.5691 56.3712 10.1467 57.2328 9.83557C58.1165 9.52439 59.0555 9.36879 60.0497 9.36879ZM68.5667 8.20186H51.0025C50.8699 8.20186 50.7484 8.1463 50.6379 8.03516C50.5275 7.92402 50.4722 7.79066 50.4722 7.63507V5.66795C50.4722 5.55682 50.5275 5.44568 50.6379 5.33454C50.7705 5.22341 50.9031 5.16784 51.0356 5.16784H68.5667C68.6993 5.16784 68.8097 5.22341 68.8981 5.33454C69.0086 5.42345 69.0638 5.53459 69.0638 5.66795V7.66841C69.0638 7.824 69.0086 7.95736 68.8981 8.0685C68.8097 8.15741 68.6993 8.20186 68.5667 8.20186ZM64.2254 3.73418H55.5758C55.4874 3.73418 55.377 3.68973 55.2444 3.60082C55.1339 3.51191 55.0787 3.38966 55.0787 3.23407V1.26695C55.0787 1.08914 55.1339 0.955772 55.2444 0.866862C55.377 0.777953 55.4874 0.733499 55.5758 0.733499H64.2254C64.38 0.733499 64.5126 0.789067 64.623 0.900203C64.7335 1.01134 64.7887 1.1447 64.7887 1.30029V3.20073C64.7887 3.33409 64.7335 3.45634 64.623 3.56748C64.5347 3.67861 64.4021 3.73418 64.2254 3.73418ZM75.8244 31.1404H58.3264C57.3322 31.1404 56.6584 30.9626 56.3049 30.607C55.9514 30.2513 55.7746 29.6401 55.7746 28.7732V23.6054C55.7746 23.4942 55.8299 23.3831 55.9403 23.272C56.0508 23.1608 56.1613 23.1053 56.2717 23.1053H59.0887C59.2433 23.1053 59.3648 23.1608 59.4532 23.272C59.5637 23.3831 59.6189 23.4942 59.6189 23.6054V27.4062C59.6189 27.6285 59.6631 27.773 59.7514 27.8397C59.8398 27.9063 59.9945 27.9397 60.2154 27.9397H75.8244C75.9348 27.9397 76.0453 27.9841 76.1558 28.073C76.2662 28.162 76.3215 28.262 76.3215 28.3731V30.7403C76.3215 30.8737 76.2662 30.9737 76.1558 31.0404C76.0453 31.1071 75.9348 31.1404 75.8244 31.1404ZM79.5029 14.3699H75.029V23.9721C75.029 24.2611 74.8854 24.4055 74.5982 24.4055H71.6487C71.3615 24.4055 71.2179 24.2611 71.2179 23.9721V0.43343C71.2179 0.144477 71.3615 0 71.6487 0H74.5982C74.8854 0 75.029 0.144477 75.029 0.43343V11.1692H79.5029C79.6355 11.1692 79.7459 11.2137 79.8343 11.3026C79.9448 11.3915 80 11.4915 80 11.6026V13.9698C80 14.081 79.9448 14.181 79.8343 14.2699C79.7459 14.3366 79.6355 14.3699 79.5029 14.3699Z"
          fill="#2C333E"
        />
        <path
          d="M16.9677 63.6145C15.4212 63.6145 14.0293 63.47 12.792 63.181C11.5548 62.9143 10.5054 62.5253 9.64374 62.0141C8.7821 61.5251 8.1193 60.9361 7.65534 60.247C7.19138 59.558 6.9594 58.8134 6.9594 58.0132C6.9594 57.213 7.19138 56.4795 7.65534 55.8127C8.1193 55.1236 8.7821 54.5346 9.64374 54.0456C10.5275 53.5344 11.588 53.1343 12.8252 52.8453C14.0624 52.5564 15.4543 52.4119 17.0008 52.4119C18.5474 52.4119 19.9282 52.5564 21.1433 52.8453C22.3806 53.1343 23.43 53.5344 24.2916 54.0456C25.1533 54.5346 25.805 55.1236 26.2469 55.8127C26.7109 56.4795 26.9428 57.213 26.9428 58.0132C26.9428 58.8134 26.7109 59.558 26.2469 60.247C25.805 60.9361 25.1533 61.5251 24.2916 62.0141C23.43 62.5253 22.3806 62.9143 21.1433 63.181C19.9061 63.47 18.5142 63.6145 16.9677 63.6145ZM2.61806 51.1116L1.72328 49.3779C1.61281 49.2001 1.60177 49.0334 1.69014 48.8778C1.77851 48.7222 1.90003 48.5999 2.05468 48.511C3.26982 47.9998 4.42972 47.4219 5.53438 46.7773C6.66114 46.1105 7.67744 45.4325 8.58327 44.7435C9.51119 44.0322 10.3065 43.3321 10.9693 42.643C11.6542 41.9317 12.1513 41.276 12.4606 40.6759C12.549 40.5203 12.5932 40.3981 12.5932 40.3092C12.6153 40.2202 12.4496 40.1758 12.0961 40.1758H3.57912C3.44656 40.1758 3.3361 40.1202 3.24772 40.0091C3.15935 39.8979 3.11516 39.7757 3.11516 39.6423V37.4752C3.11516 37.3418 3.15935 37.2418 3.24772 37.1751C3.35819 37.1084 3.4797 37.0751 3.61226 37.0751H14.7142C15.5979 37.0751 16.2717 37.2085 16.7357 37.4752C17.2218 37.7197 17.4648 38.142 17.4648 38.7421C17.4648 38.9644 17.4096 39.2422 17.2991 39.5757C17.1886 39.8868 17.0782 40.1758 16.9677 40.4425C16.3491 41.6872 15.4212 42.9653 14.1839 44.2767C14.5595 44.6101 14.9793 44.9547 15.4432 45.3103C15.9072 45.6437 16.3822 45.966 16.8683 46.2772C17.3543 46.5661 17.8404 46.8329 18.3264 47.0774C18.8125 47.3219 19.2544 47.5219 19.652 47.6775C20.1381 47.8553 20.2375 48.1665 19.9503 48.611L19.0224 50.2114C18.8235 50.6115 18.4811 50.7115 17.995 50.5115C17.5753 50.3559 17.1003 50.1225 16.57 49.8113C16.0398 49.5001 15.4874 49.1667 14.913 48.8111C14.3607 48.4332 13.8083 48.0442 13.256 47.6442C12.7258 47.2441 12.2618 46.8551 11.8641 46.4772C10.6932 47.433 9.41177 48.3332 8.01988 49.1778C6.628 50.0225 5.14775 50.7671 3.57912 51.4117C3.46866 51.4561 3.30296 51.4673 3.08202 51.445C2.88318 51.4228 2.72853 51.3117 2.61806 51.1116ZM17.8956 44.7102V42.443C17.8956 42.3318 17.9398 42.2429 18.0282 42.1763C18.1386 42.0873 18.2491 42.0429 18.3596 42.0429H22.8998V32.4407C22.8998 32.1517 23.0434 32.0073 23.3306 32.0073H26.28C26.5672 32.0073 26.7109 32.1517 26.7109 32.4407V50.8449C26.7109 51.1561 26.5672 51.3117 26.28 51.3117H23.3306C23.0434 51.3117 22.8998 51.1672 22.8998 50.8782V45.1436H18.3596C18.2491 45.1436 18.1386 45.0991 18.0282 45.0102C17.9398 44.9213 17.8956 44.8213 17.8956 44.7102ZM17.0008 55.3459C15.1229 55.3459 13.6537 55.6015 12.5932 56.1128C11.5327 56.624 11.0025 57.2575 11.0025 58.0132C11.0025 58.7689 11.5217 59.4024 12.5601 59.9136C13.6205 60.4248 15.0898 60.6805 16.9677 60.6805C18.8456 60.6805 20.3038 60.4248 21.3422 59.9136C22.4027 59.4024 22.9329 58.7689 22.9329 58.0132C22.9329 57.2575 22.4137 56.624 21.3753 56.1128C20.3369 55.6015 18.8788 55.3459 17.0008 55.3459ZM14.1176 35.308H6.36288C6.27451 35.308 6.16404 35.2636 6.03148 35.1747C5.92102 35.0858 5.86578 34.9524 5.86578 34.7746V32.8741C5.86578 32.7185 5.92102 32.5963 6.03148 32.5074C6.16404 32.4185 6.27451 32.374 6.36288 32.374H14.1176C14.2502 32.374 14.3717 32.4296 14.4822 32.5407C14.5927 32.6519 14.6479 32.7741 14.6479 32.9075V34.7412C14.6479 34.8746 14.5927 35.008 14.4822 35.1413C14.3938 35.2525 14.2723 35.308 14.1176 35.308Z"
          fill="#2C333E"
        />
        <path
          d="M40.1657 35.7081H47.7216V32.4407C47.7216 32.3296 47.7658 32.2295 47.8542 32.1406C47.9647 32.0517 48.0751 32.0073 48.1856 32.0073H51.1019C51.4112 32.0073 51.5659 32.1517 51.5659 32.4407V54.0456C51.5659 54.3346 51.4112 54.479 51.1019 54.479H48.1856C48.0751 54.479 47.9647 54.4346 47.8542 54.3457C47.7658 54.2568 47.7216 54.1567 47.7216 54.0456V44.4101H40.1657C40.0552 44.4101 39.9448 44.3767 39.8343 44.3101C39.7459 44.2212 39.7017 44.1211 39.7017 44.01V41.8428C39.7017 41.7317 39.7459 41.6317 39.8343 41.5428C39.9448 41.4539 40.0552 41.4094 40.1657 41.4094H47.7216V38.7088H40.1657C40.0552 38.7088 39.9448 38.6755 39.8343 38.6088C39.7459 38.5199 39.7017 38.4198 39.7017 38.3087V36.1082C39.7017 35.9971 39.7459 35.9082 39.8343 35.8415C39.9448 35.7526 40.0552 35.7081 40.1657 35.7081ZM43.778 49.4446C42.8721 49.6446 41.8338 49.8113 40.6628 49.9447C39.514 50.0558 38.3209 50.1447 37.0837 50.2114C35.8685 50.2559 34.6645 50.2892 33.4714 50.3114C32.3005 50.3114 31.24 50.2892 30.29 50.2447C29.3841 50.2003 28.7545 49.9558 28.401 49.5112C28.0696 49.0445 27.9039 48.4666 27.9039 47.7775V33.9744C27.9039 33.8632 27.9481 33.7632 28.0365 33.6743C28.1469 33.5632 28.2574 33.5076 28.3679 33.5076H31.2179C31.3505 33.5076 31.4609 33.5632 31.5493 33.6743C31.6598 33.7632 31.715 33.8632 31.715 33.9744V46.6106C31.715 46.8551 31.7592 47.0107 31.8476 47.0774C31.9359 47.144 32.0906 47.1774 32.3115 47.1774C33.0406 47.1996 33.8691 47.2107 34.797 47.2107C35.7249 47.1885 36.675 47.1552 37.6471 47.1107C38.6413 47.0663 39.6244 47.0107 40.5965 46.944C41.5686 46.8551 42.4634 46.744 43.2809 46.6106C43.4576 46.5661 43.5902 46.5884 43.6785 46.6773C43.789 46.7662 43.8553 46.8662 43.8774 46.9773L44.1756 48.9445C44.1977 49.0778 44.1646 49.189 44.0762 49.2779C43.9878 49.3668 43.8884 49.4223 43.778 49.4446ZM52.1292 63.081H34.565C33.5487 63.081 32.8638 62.9032 32.5104 62.5475C32.179 62.1919 32.0133 61.5807 32.0133 60.7138V53.7122C32.0133 53.6011 32.0574 53.4899 32.1458 53.3788C32.2563 53.2677 32.3667 53.2121 32.4772 53.2121H35.3273C35.4598 53.2121 35.5703 53.2677 35.6587 53.3788C35.7691 53.4677 35.8244 53.5788 35.8244 53.7122V59.3468C35.8244 59.5691 35.8685 59.7136 35.9569 59.7802C36.0674 59.8469 36.2331 59.8803 36.454 59.8803H52.063C52.1734 59.8803 52.2729 59.9247 52.3612 60.0136C52.4717 60.1025 52.5269 60.2026 52.5269 60.3137V62.6809C52.5269 62.9476 52.3944 63.081 52.1292 63.081Z"
          fill="#2C333E"
        />
        <path
          d="M79.0058 47.6442H50.174C50.0414 47.6442 49.931 47.5997 49.8426 47.5108C49.7542 47.3997 49.71 47.2774 49.71 47.144V45.0769C49.71 44.7435 49.8647 44.5768 50.174 44.5768H79.0058C79.1163 44.5768 79.2267 44.6212 79.3372 44.7102C79.4477 44.7768 79.5029 44.8657 79.5029 44.9769V47.144C79.5029 47.2552 79.4477 47.3663 79.3372 47.4775C79.2267 47.5886 79.1163 47.6442 79.0058 47.6442ZM74.6976 42.1763H56.802C55.9183 42.1763 55.2996 41.9762 54.9461 41.5761C54.5927 41.1538 54.4159 40.5537 54.4159 39.7757V34.1411C54.4159 33.2965 54.6037 32.7297 54.9793 32.4407C55.3549 32.1295 55.9624 31.9739 56.802 31.9739H74.3993C74.7086 31.9739 74.8633 32.1184 74.8633 32.4074V34.6079C74.8633 34.919 74.7086 35.0746 74.3993 35.0746H58.7904C58.3706 35.0746 58.1607 35.2636 58.1607 35.6414V38.5088C58.1607 38.6866 58.2049 38.831 58.2933 38.9422C58.3817 39.0311 58.5474 39.0755 58.7904 39.0755H74.565C74.7418 39.0755 74.8743 39.0978 74.9627 39.1422C75.0511 39.1867 75.0953 39.2978 75.0953 39.4756V41.6761C75.0953 41.854 75.0511 41.9873 74.9627 42.0762C74.8964 42.1429 74.8081 42.1763 74.6976 42.1763ZM75.2278 63.2477H56.7026C55.8409 63.2477 55.2555 63.0921 54.9461 62.7809C54.6368 62.4698 54.4822 61.9585 54.4822 61.2472V57.1463C54.4822 56.435 54.6258 55.9238 54.913 55.6126C55.2223 55.2792 55.8078 55.1125 56.6694 55.1125H70.7871C70.9638 55.1125 71.0743 55.1014 71.1185 55.0792C71.1627 55.0347 71.1848 54.9125 71.1848 54.7124V53.5122C71.1848 53.2677 71.1627 53.1232 71.1185 53.0787C71.0743 53.0343 70.9528 53.012 70.7539 53.012H54.8799C54.7694 53.012 54.6589 52.9787 54.5485 52.912C54.4601 52.8231 54.4159 52.7231 54.4159 52.612V50.3781C54.4159 50.267 54.4601 50.167 54.5485 50.078C54.6589 49.9669 54.7694 49.9113 54.8799 49.9113H72.6429C73.5488 49.9113 74.1453 50.0558 74.4325 50.3448C74.7418 50.6337 74.8964 51.1561 74.8964 51.9118V55.9794C74.8964 56.7573 74.7418 57.2797 74.4325 57.5464C74.1453 57.8131 73.5488 57.9465 72.6429 57.9465H58.6247C58.4479 57.9465 58.3375 57.9798 58.2933 58.0465C58.2491 58.091 58.227 58.2021 58.227 58.3799V59.7469C58.227 59.947 58.2491 60.0581 58.2933 60.0803C58.3375 60.1248 58.459 60.147 58.6578 60.147H75.1947C75.3052 60.147 75.4156 60.1803 75.5261 60.247C75.6366 60.3359 75.6918 60.4582 75.6918 60.6138V62.7809C75.6918 62.8921 75.6366 62.9921 75.5261 63.081C75.4156 63.1921 75.3162 63.2477 75.2278 63.2477Z"
          fill="#2C333E"
        />
      </svg>
    </>
  );
};

export default SmartLogoIcon;
