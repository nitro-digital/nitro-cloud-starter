import React from "react";
import Link from "next/link";
import { Container } from "../../util/container";
import { useRouter } from "next/router";

export const Footer = ({ data }) => {
  const router = useRouter();

  const [prefix] = React.useState("");

  return (
    <footer className={`bg-[#272525] h-[331px]`}>
      <Container className="relative py-0" size="small">
        <div className="content-center justify-items-center md:flex-row items-center justify-center text-[#009E97]">
          <div className="flex justify-center mt-[80px] mb-[30px]">
            <svg width="120" height="37" viewBox="0 0 120 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M60.5856 8.72066V10.7879H60.6707C61.1342 9.97308 61.8322 9.31731 62.6735 8.90631C63.4536 8.52517 64.3092 8.32454 65.1771 8.31925C66.089 8.28934 66.9979 8.44113 67.8509 8.76582C68.4973 9.02515 69.065 9.44886 69.4982 9.99514C69.9176 10.5651 70.2049 11.2216 70.3394 11.9169C70.5082 12.7423 70.5905 13.5831 70.5847 14.4257V23.5427H66.519V15.1733C66.5817 14.225 66.3843 13.2776 65.9482 12.4337C65.5676 11.8316 64.8917 11.5305 63.9153 11.5305C62.8071 11.5305 62.0059 11.865 61.5119 12.5341C61.0179 13.2031 60.7708 14.2886 60.7708 15.7905V23.5427H56.7051V8.72066H60.5856Z" fill="url(#paint0_linear_34_1566)"/>
              <path d="M72.6631 6.4276V3.0708H76.7289V6.4276H72.6631ZM72.6631 13.9841V8.72065H76.7289V23.5427H72.6631V14.0092" fill="url(#paint1_linear_34_1566)"/>
              <path d="M87.4838 8.72064V11.4452H84.5096V18.786C84.4526 19.2705 84.5736 19.7593 84.8501 20.1608C85.2515 20.4408 85.7413 20.564 86.227 20.5071C86.4574 20.5071 86.6727 20.5071 86.883 20.4769C87.0933 20.4468 87.2935 20.4268 87.4838 20.3916V23.5427C87.106 23.6048 86.7247 23.6434 86.3422 23.6581C85.9216 23.6782 85.511 23.6882 85.1104 23.6882C84.5122 23.6898 83.9146 23.6462 83.3229 23.5578C82.7945 23.4896 82.2843 23.3192 81.8208 23.056C81.3938 22.805 81.0466 22.4379 80.8194 21.9973C80.5489 21.4351 80.4216 20.8145 80.4488 20.1909V11.4452H77.9854V8.72064H80.4488V4.27502H84.5096V8.72064H87.4838Z" fill="url(#paint2_linear_34_1566)"/>
              <path d="M93.3025 8.72059V11.4753H93.3626C93.553 11.0119 93.8131 10.5804 94.1337 10.1958C94.4553 9.80877 94.8314 9.47072 95.2502 9.19224C95.666 8.90937 96.1194 8.68642 96.5971 8.52992C97.0823 8.37289 97.5895 8.29496 98.0993 8.29911C98.4 8.30562 98.6984 8.3546 98.9855 8.44462V12.2279C98.7953 12.1878 98.5649 12.1577 98.2996 12.1276C98.0419 12.0981 97.7828 12.0831 97.5235 12.0824C96.8739 12.0633 96.2286 12.192 95.6358 12.4587C95.1445 12.6837 94.7175 13.0288 94.394 13.4622C94.0694 13.913 93.8395 14.4251 93.7181 14.9675C93.582 15.5786 93.5149 16.203 93.5178 16.8291V23.5427H89.457V8.72059H93.3025Z" fill="url(#paint3_linear_34_1566)"/>
              <path d="M99.5106 12.9204C99.8437 12.0067 100.369 11.1755 101.05 10.4829C101.732 9.79038 102.554 9.25269 103.461 8.90628C104.464 8.5181 105.531 8.32729 106.606 8.34431C107.687 8.32857 108.761 8.5193 109.77 8.90628C110.683 9.25096 111.511 9.79083 112.195 10.4884C112.879 11.1859 113.403 12.0244 113.731 12.9455C114.104 13.9794 114.289 15.0723 114.277 16.1718C114.29 17.2665 114.105 18.3547 113.731 19.3831C113.393 20.2995 112.867 21.1352 112.189 21.8367C111.503 22.5244 110.678 23.0565 109.77 23.3972C108.758 23.7722 107.685 23.9576 106.606 23.9441C105.533 23.9584 104.467 23.773 103.461 23.3972C102.557 23.0563 101.738 22.524 101.058 21.8367C100.376 21.1363 99.8494 20.3004 99.5106 19.3831C99.1377 18.3543 98.9545 17.2662 98.9699 16.1718C98.9525 15.0642 99.1357 13.9625 99.5106 12.9204V12.9204ZM103.201 17.8828C103.308 18.4147 103.506 18.9239 103.787 19.3881C104.061 19.8309 104.439 20.1996 104.888 20.4619C105.415 20.7452 106.008 20.8837 106.606 20.8633C107.208 20.8828 107.805 20.7444 108.338 20.4619C108.795 20.2043 109.179 19.8349 109.455 19.3881C109.735 18.9239 109.933 18.4147 110.041 17.8828C110.155 17.3113 110.212 16.7297 110.211 16.1467C110.212 15.5604 110.155 14.9755 110.041 14.4006C109.939 13.8672 109.74 13.357 109.455 12.8953C109.174 12.4515 108.791 12.0816 108.338 11.8165C107.809 11.524 107.21 11.3801 106.606 11.4C106.006 11.3796 105.412 11.5236 104.888 11.8165C104.443 12.0863 104.066 12.4555 103.787 12.8953C103.501 13.357 103.303 13.8672 103.201 14.4006C103.086 14.9755 103.029 15.5604 103.031 16.1467C103.029 16.7297 103.086 17.3113 103.201 17.8828V17.8828Z" fill="url(#paint4_linear_34_1566)"/>
              <path d="M119.54 19.1272V23.5427H115.033V19.1272H119.54Z" fill="url(#paint5_linear_34_1566)"/>
              <path d="M42.5152 12.0422C41.5315 12.5337 40.4181 12.7013 39.3337 12.5211C38.2493 12.3409 37.2494 11.8221 36.4767 11.0387L27.0383 1.54035C26.2691 0.761505 25.2746 0.245348 24.1959 0.0652006C23.1173 -0.114947 22.0095 0.0500748 21.0298 0.536825L20.9647 0.566931C20.2251 0.936682 19.5838 1.47739 19.0938 2.14443C18.6039 2.81147 18.2792 3.58572 18.1466 4.40328C18.0141 5.22084 18.0775 6.05826 18.3315 6.84645C18.5856 7.63463 19.023 8.35096 19.6078 8.93634L29.2264 18.6304L22.8874 21.8467C21.9065 22.343 20.7943 22.5165 19.7092 22.3426C18.6242 22.1688 17.6215 21.6563 16.8439 20.8783L0 4.01404V18.5652L16.8489 35.4696C17.6245 36.2474 18.6255 36.7599 19.709 36.9338C20.7925 37.1077 21.9032 36.9342 22.8824 36.438L29.2414 33.2267V18.6354L36.4767 25.8859C37.2521 26.6639 38.2528 27.1769 39.3362 27.3516C40.4195 27.5264 41.5303 27.3541 42.5102 26.8593L48.9794 23.5828V8.78581L42.5152 12.0422Z" fill="url(#paint6_linear_34_1566)"/>
              <path d="M59.9296 31.5709C59.7918 31.861 59.577 32.1075 59.3087 32.2834C59.0348 32.4509 58.7181 32.5346 58.3974 32.5242C58.1289 32.5293 57.863 32.4709 57.6213 32.3536C57.4105 32.2419 57.2274 32.0842 57.0856 31.892C56.9419 31.6907 56.8366 31.4644 56.7751 31.2247C56.7083 30.9674 56.6746 30.7027 56.675 30.4369C56.672 30.1571 56.7091 29.8783 56.7851 29.609C56.848 29.366 56.9605 29.1388 57.1156 28.9417C57.263 28.7521 57.4536 28.6007 57.6714 28.5001C57.9153 28.3845 58.1828 28.3278 58.4525 28.3345C58.6215 28.334 58.7899 28.3559 58.9532 28.3997C59.1046 28.4437 59.2495 28.5078 59.3838 28.5904C59.5138 28.6763 59.6302 28.7812 59.7293 28.9015C59.8295 29.027 59.9059 29.1699 59.9546 29.323V29.323V26.8744H60.25V32.4289H59.9546L59.9296 31.5709ZM58.4275 32.2683C58.6557 32.2728 58.8814 32.2193 59.0834 32.1128C59.2643 32.0097 59.42 31.8674 59.539 31.6963C59.6734 31.521 59.7736 31.3218 59.8344 31.1093C59.8947 30.8903 59.925 30.6641 59.9246 30.4369C59.9252 30.2064 59.8948 29.9769 59.8344 29.7545C59.7783 29.5433 59.6869 29.3431 59.5641 29.1624C59.4445 28.9899 59.2869 28.8474 59.1034 28.746C58.8976 28.64 58.6688 28.5866 58.4375 28.5904C58.2026 28.5836 57.9699 28.6372 57.7615 28.746C57.5785 28.8437 57.4207 28.9828 57.3009 29.1524C57.1767 29.3316 57.0867 29.5324 57.0355 29.7445C56.9806 29.9711 56.9536 30.2037 56.9554 30.4369C56.9548 30.6674 56.9851 30.8969 57.0455 31.1193C57.1007 31.3293 57.1922 31.528 57.3159 31.7064C57.4358 31.8759 57.5935 32.0151 57.7765 32.1128C57.9839 32.2193 58.2144 32.2728 58.4475 32.2683H58.4275Z" fill="url(#paint7_linear_34_1566)"/>
              <path d="M62.168 27.6722V26.8744H62.4634V27.6722H62.168ZM62.168 32.4289V28.4148H62.4634V32.4289H62.168Z" fill="url(#paint8_linear_34_1566)"/>
              <path d="M67.626 28.4299V32.2182C67.6266 32.4378 67.6014 32.6568 67.5509 32.8705C67.5038 33.0733 67.4133 33.2633 67.2855 33.4275C67.151 33.5924 66.9794 33.7231 66.7848 33.8088C66.516 33.916 66.2277 33.9655 65.9386 33.9543C65.7381 33.9566 65.5381 33.9347 65.3428 33.8891C65.1643 33.8506 64.9945 33.7791 64.8421 33.6783C64.6989 33.5814 64.5819 33.4503 64.5016 33.297C64.4106 33.1147 64.3626 32.9138 64.3614 32.7099H64.6568C64.6675 32.8681 64.7119 33.0221 64.787 33.1615C64.8576 33.284 64.9552 33.3887 65.0724 33.4676C65.1905 33.5501 65.323 33.6097 65.463 33.6432C65.6155 33.6798 65.7718 33.6984 65.9286 33.6984C66.1637 33.7071 66.3977 33.6643 66.6146 33.573C66.7844 33.5018 66.9353 33.3918 67.0552 33.2518C67.163 33.1193 67.2415 32.9654 67.2855 32.8003C67.3283 32.6364 67.3501 32.4678 67.3506 32.2985V31.3702C67.2307 31.6519 67.028 31.8902 66.7694 32.0533C66.5109 32.2165 66.2088 32.2968 65.9036 32.2834C65.6413 32.2914 65.3807 32.2382 65.1425 32.1279C64.9286 32.0348 64.7398 31.892 64.5917 31.7114C64.445 31.5254 64.3361 31.3123 64.2713 31.0842C64.1993 30.8314 64.1639 30.5695 64.1661 30.3065C64.1656 30.0495 64.2044 29.794 64.2813 29.5488C64.3479 29.3205 64.4584 29.1074 64.6067 28.9216C64.7545 28.7424 64.9389 28.5969 65.1475 28.4951C65.4037 28.3772 65.6844 28.3229 65.966 28.3369C66.2475 28.3508 66.5215 28.4327 66.7648 28.5754C67.0272 28.7332 67.2285 28.9756 67.3356 29.2628V29.2628V28.4299H67.626ZM65.8785 28.5905C65.6588 28.5854 65.4415 28.6372 65.2476 28.741C65.0736 28.8349 64.923 28.967 64.807 29.1274C64.6871 29.2944 64.5972 29.4812 64.5416 29.6793C64.4816 29.8829 64.4512 30.0942 64.4515 30.3065C64.4506 30.5304 64.4809 30.7534 64.5416 30.9688C64.5958 31.1684 64.6876 31.3558 64.812 31.5208C64.9325 31.6757 65.0866 31.8009 65.2627 31.8871C65.4545 31.98 65.6655 32.0265 65.8785 32.0225C66.0997 32.0274 66.3191 31.9811 66.5195 31.8871C66.6963 31.7954 66.8503 31.6651 66.9701 31.5057C67.0952 31.3404 67.1886 31.1533 67.2455 30.9538C67.3585 30.5297 67.3585 30.0833 67.2455 29.6592C67.1906 29.4605 67.097 29.2746 66.9701 29.1123C66.8503 28.9529 66.6963 28.8226 66.5195 28.731C66.3187 28.6387 66.0994 28.5941 65.8785 28.6005V28.5905Z" fill="url(#paint9_linear_34_1566)"/>
              <path d="M69.5088 27.6722V26.8744H69.8042V27.6722H69.5088ZM69.5088 32.4289V28.4148H69.8042V32.4289H69.5088Z" fill="url(#paint10_linear_34_1566)"/>
              <path d="M73.1439 28.6858H72.2727V31.4806C72.2688 31.61 72.2874 31.739 72.3277 31.862C72.3579 31.95 72.4159 32.0258 72.493 32.0777C72.5771 32.1269 72.6713 32.1561 72.7684 32.163C72.89 32.1736 73.0123 32.1736 73.1339 32.163V32.4189C72.989 32.4316 72.8432 32.4316 72.6983 32.4189C72.5641 32.4111 72.4337 32.3716 72.3177 32.3035C72.2054 32.2329 72.1152 32.1321 72.0574 32.0125C71.9869 31.8429 71.9594 31.6585 71.9773 31.4756V28.6858H71.2412V28.4299H71.9773V27.1855H72.2727V28.4299H73.1439V28.6858Z" fill="url(#paint11_linear_34_1566)"/>
              <path d="M77.2646 31.6361C77.2182 31.7592 77.1504 31.873 77.0643 31.9723C76.9733 32.0841 76.8652 32.1807 76.7438 32.2583C76.6113 32.3455 76.466 32.4115 76.3132 32.454C76.1402 32.5011 75.9617 32.5247 75.7825 32.5243C75.4272 32.5478 75.0744 32.4506 74.781 32.2483C74.6588 32.1446 74.5632 32.013 74.5022 31.8645C74.4412 31.7161 74.4166 31.5552 74.4305 31.3953C74.4232 31.1952 74.4717 30.9971 74.5707 30.8233C74.6589 30.6789 74.781 30.5583 74.9262 30.472C75.0719 30.3857 75.231 30.3246 75.3969 30.2914C75.5619 30.2536 75.7291 30.2268 75.8976 30.2111L76.3583 30.171C76.5268 30.1614 76.6943 30.1379 76.859 30.1007C76.9608 30.0769 77.0553 30.0287 77.1344 29.9602C77.1959 29.8973 77.2362 29.8165 77.2495 29.7294C77.267 29.6132 77.2754 29.4958 77.2746 29.3782C77.276 29.2747 77.2555 29.1721 77.2145 29.0771C77.1687 28.9801 77.102 28.8944 77.0192 28.8263C76.9184 28.7469 76.8026 28.6888 76.6787 28.6557C76.5155 28.6117 76.3471 28.5898 76.178 28.5904C75.8673 28.5766 75.5614 28.6705 75.3118 28.8564C75.1972 28.956 75.1057 29.0794 75.0434 29.218C74.9812 29.3567 74.9497 29.5072 74.9513 29.6592H74.6559C74.65 29.471 74.6851 29.2838 74.7586 29.1105C74.832 28.9373 74.9422 28.7821 75.0815 28.6557C75.4007 28.4159 75.795 28.2985 76.193 28.3245C76.5662 28.293 76.9385 28.3942 77.2445 28.6105C77.352 28.7013 77.4375 28.8152 77.4947 28.9438C77.5519 29.0724 77.5794 29.2124 77.575 29.3531V31.6813C77.575 31.7365 77.575 31.7967 77.575 31.8519C77.5767 31.905 77.5869 31.9575 77.605 32.0074C77.6181 32.0511 77.6443 32.0897 77.6801 32.1178C77.7251 32.1504 77.78 32.1663 77.8354 32.163C77.9093 32.1596 77.9829 32.1513 78.0557 32.1379V32.3888C77.9755 32.4089 77.893 32.419 77.8103 32.4189C77.7148 32.4223 77.6196 32.407 77.5299 32.3737C77.466 32.3475 77.4106 32.3041 77.3697 32.2483C77.3331 32.1936 77.3076 32.1322 77.2946 32.0676C77.2892 31.9908 77.2892 31.9137 77.2946 31.8368L77.2646 31.6361ZM77.2646 30.1559C77.1801 30.2546 77.0626 30.3188 76.9341 30.3366C76.7688 30.3702 76.6016 30.3937 76.4334 30.4068L75.9327 30.452C75.7875 30.452 75.6423 30.4921 75.4971 30.5172C75.3588 30.5459 75.2255 30.5949 75.1015 30.6627C74.986 30.7291 74.8894 30.8241 74.8211 30.9387C74.7414 31.0771 74.7032 31.2356 74.7109 31.3953C74.7022 31.5193 74.7231 31.6436 74.7719 31.7579C74.8207 31.8722 74.8959 31.9732 74.9913 32.0526C75.2177 32.2075 75.4887 32.2833 75.7624 32.2684C76.0398 32.2814 76.3154 32.2171 76.5586 32.0827C76.74 31.9801 76.8945 31.8356 77.0092 31.6612C77.1051 31.5236 77.1731 31.3685 77.2095 31.2046C77.2316 31.1056 77.245 31.0049 77.2495 30.9036L77.2646 30.1559Z" fill="url(#paint12_linear_34_1566)"/>
              <path d="M79.7983 26.8744V32.4289H79.5029V26.8744H79.7983Z" fill="url(#paint13_linear_34_1566)"/>
              <path d="M84.9005 31.1093C84.9067 31.2835 84.9494 31.4544 85.0257 31.6111C85.0949 31.7514 85.1921 31.876 85.3111 31.9773C85.4292 32.0811 85.5672 32.1596 85.7167 32.2082C85.8784 32.2607 86.0473 32.2877 86.2174 32.2884C86.3565 32.2859 86.4954 32.2742 86.633 32.2533C86.7752 32.2289 86.9133 32.185 87.0435 32.1229C87.1685 32.0632 87.2769 31.9736 87.359 31.8619C87.4478 31.7381 87.4919 31.5877 87.4842 31.4354C87.4903 31.3417 87.475 31.2477 87.4395 31.1608C87.4039 31.0738 87.349 30.9961 87.2789 30.9337C87.1333 30.8095 86.9624 30.7188 86.7782 30.6677C86.5616 30.6024 86.3407 30.5521 86.1172 30.5172C85.8921 30.4789 85.6708 30.4202 85.4563 30.3416C85.2667 30.2703 85.0955 30.1571 84.9556 30.0104C84.8331 29.8516 84.7609 29.6596 84.7484 29.4592C84.7359 29.2589 84.7836 29.0594 84.8855 28.8865C84.9704 28.757 85.0856 28.6502 85.221 28.5754C85.3641 28.4936 85.5198 28.436 85.6816 28.4048C85.8469 28.3743 86.0143 28.3575 86.1823 28.3546C86.3781 28.3542 86.5731 28.3778 86.7632 28.4249C86.9345 28.465 87.0952 28.542 87.2338 28.6507C87.3663 28.7572 87.4725 28.8928 87.5443 29.0471C87.6252 29.2319 87.6645 29.4323 87.6594 29.6341H87.364C87.3691 29.4738 87.3383 29.3143 87.2739 29.1675C87.2177 29.043 87.1317 28.9344 87.0235 28.8514C86.9111 28.7676 86.7836 28.7062 86.648 28.6707C86.4962 28.6297 86.3395 28.6094 86.1823 28.6105C86.0446 28.6117 85.9072 28.6251 85.7718 28.6507C85.6426 28.6728 85.5187 28.7188 85.4062 28.7861C85.2985 28.8441 85.2059 28.9266 85.1358 29.027C85.0632 29.1312 85.0263 29.2562 85.0307 29.3832C85.0252 29.5228 85.0657 29.6603 85.1459 29.7746C85.2305 29.8754 85.3366 29.956 85.4563 30.0104C85.5929 30.0732 85.7355 30.122 85.8819 30.1559L86.3826 30.2613C86.5702 30.2943 86.7557 30.3378 86.9384 30.3918C87.0983 30.4342 87.2505 30.5019 87.389 30.5925C87.5163 30.6747 87.6199 30.7888 87.6895 30.9236C87.7673 31.0791 87.8052 31.2516 87.7996 31.4254C87.808 31.6174 87.7554 31.8072 87.6494 31.9673C87.5523 32.1055 87.4258 32.2204 87.2789 32.3035C87.1228 32.3903 86.9537 32.4513 86.7782 32.4841C86.5995 32.5153 86.4187 32.5321 86.2374 32.5343C86.0237 32.5367 85.811 32.5063 85.6065 32.444C85.4236 32.3873 85.2535 32.2952 85.1058 32.173C84.9598 32.0501 84.8435 31.8957 84.7653 31.7215C84.6733 31.5303 84.6237 31.3215 84.6201 31.1093H84.9005Z" fill="url(#paint14_linear_34_1566)"/>
              <path d="M89.2413 30.4269C89.2397 30.1547 89.2802 29.8839 89.3614 29.6241C89.4383 29.3818 89.5588 29.1556 89.7169 28.9567C89.8727 28.7649 90.0695 28.6106 90.2927 28.5052C90.5387 28.3927 90.806 28.3345 91.0764 28.3345C91.3467 28.3345 91.614 28.3927 91.86 28.5052C92.0832 28.6106 92.28 28.7649 92.4358 28.9567C92.5921 29.1568 92.7125 29.3826 92.7913 29.6241C92.8725 29.8839 92.913 30.1547 92.9115 30.4269C92.913 30.7024 92.8725 30.9765 92.7913 31.2398C92.7146 31.4806 92.5941 31.7052 92.4358 31.9021C92.28 32.094 92.0832 32.2483 91.86 32.3537C91.614 32.4662 91.3467 32.5244 91.0764 32.5244C90.806 32.5244 90.5387 32.4662 90.2927 32.3537C90.0695 32.2483 89.8727 32.094 89.7169 31.9021C89.5568 31.7064 89.4361 31.4815 89.3614 31.2398C89.2802 30.9765 89.2397 30.7024 89.2413 30.4269V30.4269ZM89.5367 30.4269C89.5343 30.6575 89.5646 30.8873 89.6268 31.1093C89.6924 31.3199 89.7922 31.5183 89.9222 31.6964C90.0558 31.8686 90.2271 32.0077 90.4229 32.1028C90.6274 32.2053 90.8528 32.2586 91.0814 32.2586C91.3099 32.2586 91.5354 32.2053 91.7398 32.1028C91.937 32.0097 92.1087 31.8703 92.2405 31.6964C92.3742 31.5206 92.4743 31.3215 92.5359 31.1093C92.676 30.6601 92.676 30.1787 92.5359 29.7295C92.4743 29.5172 92.3742 29.3182 92.2405 29.1424C92.1033 28.9654 91.9258 28.8238 91.7228 28.7295C91.5199 28.6352 91.2974 28.591 91.0739 28.6005C90.8455 28.5954 90.6197 28.6489 90.4179 28.756C90.2221 28.8512 90.0508 28.9903 89.9172 29.1625C89.7872 29.3406 89.6874 29.5389 89.6218 29.7495C89.5617 29.9702 89.533 30.1982 89.5367 30.4269Z" fill="url(#paint15_linear_34_1566)"/>
              <path d="M94.8999 26.8744V32.4289H94.6045V26.8744H94.8999Z" fill="url(#paint16_linear_34_1566)"/>
              <path d="M99.9313 32.429H99.6409V31.571C99.5919 31.7168 99.5173 31.8528 99.4206 31.9724C99.3249 32.0895 99.2118 32.191 99.0851 32.2734C98.958 32.3584 98.8175 32.4212 98.6695 32.4591C98.52 32.5032 98.3648 32.5251 98.2089 32.5243C98.0086 32.5283 97.809 32.4994 97.618 32.439C97.4714 32.3899 97.3355 32.3133 97.2175 32.2132C97.1175 32.1234 97.0344 32.0164 96.9721 31.8971C96.9127 31.7849 96.8689 31.665 96.8419 31.5409C96.8171 31.427 96.802 31.3111 96.7969 31.1946C96.7969 31.0843 96.7969 30.9889 96.7969 30.9036V28.4299H97.0923V30.9387C97.0923 31.0441 97.0923 31.1696 97.1173 31.3151C97.1332 31.4665 97.1791 31.6132 97.2525 31.7466C97.3363 31.8893 97.4531 32.0098 97.593 32.0978C97.7857 32.2093 98.0068 32.2616 98.2289 32.2483C98.4358 32.2495 98.6405 32.2067 98.8298 32.1229C99.0045 32.0412 99.1598 31.9232 99.2854 31.7767C99.4147 31.6208 99.5102 31.4397 99.5658 31.2448C99.6218 31.0372 99.6471 30.8225 99.6409 30.6076V28.4299H99.9363L99.9313 32.429Z" fill="url(#paint17_linear_34_1566)"/>
              <path d="M103.202 28.6858H102.33V31.4806C102.326 31.61 102.345 31.739 102.385 31.862C102.415 31.95 102.474 32.0258 102.551 32.0777C102.635 32.1269 102.729 32.1561 102.826 32.163C102.948 32.1736 103.07 32.1736 103.192 32.163V32.4189C103.047 32.4316 102.901 32.4316 102.756 32.4189C102.622 32.4111 102.491 32.3716 102.375 32.3035C102.263 32.2342 102.174 32.1329 102.12 32.0125C102.047 31.8435 102.018 31.6589 102.035 31.4756V28.6858H101.299V28.4299H102.035V27.1855H102.33V28.4299H103.202V28.6858Z" fill="url(#paint18_linear_34_1566)"/>
              <path d="M104.748 27.6722V26.8744H105.043V27.6722H104.748ZM104.748 32.4289V28.4148H105.043V32.4289H104.748Z" fill="url(#paint19_linear_34_1566)"/>
              <path d="M106.727 30.4269C106.725 30.1547 106.766 29.8839 106.847 29.6241C106.924 29.3818 107.044 29.1556 107.202 28.9568C107.358 28.7649 107.555 28.6106 107.778 28.5052C108.021 28.3866 108.289 28.3281 108.559 28.3346C108.831 28.3287 109.1 28.3871 109.345 28.5052C109.568 28.612 109.764 28.7661 109.921 28.9568C110.078 29.1559 110.197 29.3821 110.272 29.6241C110.353 29.8839 110.393 30.1547 110.392 30.4269C110.393 30.7024 110.353 30.9766 110.272 31.2398C110.199 31.4812 110.08 31.7062 109.921 31.9021C109.764 32.0928 109.568 32.2469 109.345 32.3537C109.1 32.4718 108.831 32.5302 108.559 32.5243C108.289 32.5308 108.021 32.4723 107.778 32.3537C107.555 32.2483 107.358 32.094 107.202 31.9021C107.042 31.7065 106.921 31.4815 106.847 31.2398C106.766 30.9766 106.725 30.7024 106.727 30.4269V30.4269ZM107.022 30.4269C107.022 30.6614 107.056 30.8946 107.122 31.1194C107.186 31.3308 107.286 31.5294 107.418 31.7064C107.552 31.8779 107.723 32.0168 107.918 32.1129C108.123 32.2171 108.35 32.2704 108.579 32.2684C108.809 32.2716 109.036 32.2182 109.24 32.1129C109.435 32.0168 109.607 31.8779 109.741 31.7064C109.875 31.5306 109.975 31.3316 110.036 31.1194C110.17 30.6691 110.17 30.1898 110.036 29.7395C109.975 29.5273 109.875 29.3283 109.741 29.1525C109.607 28.981 109.435 28.8421 109.24 28.746C109.037 28.6383 108.809 28.5847 108.579 28.5905C108.349 28.586 108.122 28.6395 107.918 28.746C107.723 28.8421 107.552 28.981 107.418 29.1525C107.286 29.3295 107.186 29.5281 107.122 29.7395C107.056 29.9627 107.022 30.1942 107.022 30.4269V30.4269Z" fill="url(#paint20_linear_34_1566)"/>
              <path d="M112.014 28.4298H112.309V29.2828C112.357 29.1381 112.432 29.0037 112.529 28.8865C112.622 28.7683 112.734 28.6665 112.86 28.5854C112.987 28.5013 113.128 28.4386 113.275 28.3997C113.425 28.3557 113.58 28.3337 113.736 28.3345C113.938 28.331 114.139 28.3598 114.332 28.4198C114.478 28.4712 114.613 28.5477 114.733 28.6456C114.83 28.7369 114.911 28.8437 114.973 28.9617C115.032 29.0739 115.076 29.1938 115.103 29.318C115.128 29.4319 115.143 29.5477 115.148 29.6642C115.148 29.7746 115.148 29.8699 115.148 29.9552V32.4289H114.853V29.9201C114.853 29.8197 114.853 29.6993 114.828 29.5488C114.812 29.3957 114.766 29.2474 114.692 29.1122C114.609 28.9695 114.492 28.8491 114.352 28.761C114.159 28.6509 113.938 28.5987 113.716 28.6105C113.508 28.6088 113.301 28.6516 113.11 28.7359C112.938 28.8191 112.784 28.9369 112.66 29.0821C112.546 29.2397 112.461 29.4165 112.409 29.604C112.341 29.8215 112.307 30.0484 112.309 30.2763V32.4389H112.014V28.4298Z" fill="url(#paint21_linear_34_1566)"/>
              <path d="M117.121 31.1093C117.125 31.2831 117.166 31.4541 117.241 31.6111C117.312 31.7503 117.409 31.8746 117.526 31.9773C117.645 32.0822 117.785 32.1608 117.937 32.2082C118.098 32.2612 118.267 32.2883 118.437 32.2884C118.577 32.2861 118.715 32.2743 118.853 32.2533C118.997 32.2289 119.137 32.185 119.269 32.1229C119.392 32.0631 119.499 31.9734 119.579 31.8619C119.668 31.7381 119.712 31.5877 119.704 31.4354C119.711 31.342 119.697 31.2482 119.662 31.1612C119.628 31.0742 119.573 30.9964 119.504 30.9337C119.357 30.8111 119.187 30.7205 119.003 30.6677C118.787 30.6024 118.566 30.5521 118.342 30.5172C118.119 30.4796 117.899 30.4208 117.686 30.3416C117.498 30.2686 117.327 30.1556 117.186 30.0104C117.069 29.8492 117 29.6578 116.987 29.4587C116.975 29.2596 117.019 29.0611 117.116 28.8865C117.202 28.7583 117.317 28.6518 117.451 28.5754C117.596 28.4941 117.753 28.4365 117.917 28.4048C118.082 28.3738 118.249 28.357 118.417 28.3546C118.613 28.3542 118.808 28.3778 118.998 28.4249C119.17 28.4639 119.331 28.541 119.469 28.6507C119.603 28.7557 119.709 28.8917 119.779 29.0471C119.86 29.2319 119.9 29.4323 119.895 29.6341H119.599C119.604 29.4738 119.573 29.3143 119.509 29.1675C119.455 29.042 119.368 28.933 119.259 28.8514C119.146 28.7676 119.019 28.7062 118.883 28.6707C118.731 28.6297 118.575 28.6094 118.417 28.6105C118.281 28.6115 118.146 28.6249 118.012 28.6507C117.881 28.6729 117.756 28.7188 117.641 28.7861C117.534 28.843 117.443 28.9258 117.376 29.027C117.303 29.1312 117.266 29.2562 117.271 29.3832C117.263 29.5231 117.304 29.6614 117.386 29.7746C117.469 29.8753 117.573 29.956 117.691 30.0104C117.828 30.0724 117.971 30.1212 118.117 30.1559L118.618 30.2613C118.805 30.2954 118.991 30.3389 119.174 30.3918C119.333 30.4362 119.485 30.5038 119.624 30.5925C119.749 30.6763 119.85 30.7902 119.92 30.9236C119.997 31.0791 120.035 31.2516 120.03 31.4254C120.037 31.6166 119.986 31.8055 119.885 31.9673C119.784 32.1046 119.656 32.2191 119.509 32.3035C119.353 32.3911 119.184 32.4521 119.008 32.4841C118.83 32.5153 118.649 32.5321 118.468 32.5343C118.254 32.536 118.041 32.5056 117.837 32.444C117.654 32.3873 117.484 32.2952 117.336 32.173C117.191 32.0487 117.075 31.8947 116.995 31.7215C116.911 31.5284 116.867 31.3201 116.865 31.1093H117.121Z" fill="url(#paint22_linear_34_1566)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_34_1566" x1="-0.94159" y1="-3.77826" x2="128.611" y2="36.8693" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint1_linear_34_1566" x1="0.986457" y1="-9.91483" x2="130.534" y2="30.7328" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint2_linear_34_1566" x1="1.63218" y1="-11.9771" x2="131.185" y2="28.6705" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint3_linear_34_1566" x1="1.97311" y1="-13.0559" x2="131.52" y2="27.5916" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint4_linear_34_1566" x1="3.05403" y1="-16.503" x2="132.601" y2="24.1395" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint5_linear_34_1566" x1="2.52382" y1="-14.8221" x2="132.076" y2="25.8254" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint6_linear_34_1566" x1="-5.24243" y1="9.93986" x2="124.305" y2="50.5874" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint7_linear_34_1566" x1="-5.09252" y1="9.4582" x2="124.46" y2="50.1007" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint8_linear_34_1566" x1="-4.79147" y1="8.50486" x2="124.755" y2="49.1519" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint9_linear_34_1566" x1="-4.85169" y1="8.69056" x2="124.701" y2="49.3331" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint10_linear_34_1566" x1="-4.13508" y1="6.40247" x2="125.417" y2="47.0495" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint11_linear_34_1566" x1="-3.92533" y1="5.7402" x2="125.622" y2="46.3878" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint12_linear_34_1566" x1="-3.78531" y1="5.28856" x2="125.767" y2="45.9361" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint13_linear_34_1566" x1="-3.23376" y1="3.5374" x2="126.318" y2="44.1795" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint14_linear_34_1566" x1="-2.8639" y1="2.3633" x2="126.684" y2="43.0109" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint15_linear_34_1566" x1="-2.42864" y1="0.968422" x2="127.119" y2="41.616" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint16_linear_34_1566" x1="-1.87659" y1="-0.792812" x2="127.675" y2="39.8543" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint17_linear_34_1566" x1="-1.73754" y1="-1.22928" x2="127.81" y2="39.4131" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint18_linear_34_1566" x1="-1.22148" y1="-2.87507" x2="128.326" y2="37.7675" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint19_linear_34_1566" x1="-0.961044" y1="-3.70303" x2="128.586" y2="36.944" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint20_linear_34_1566" x1="-0.855904" y1="-4.04417" x2="128.697" y2="36.6034" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint21_linear_34_1566" x1="-0.440546" y1="-5.37392" x2="129.112" y2="35.2735" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <linearGradient id="paint22_linear_34_1566" x1="0.0295817" y1="-6.87415" x2="129.582" y2="33.7685" gradientUnits="userSpaceOnUse">
                <stop stop-color="#006661"/>
                <stop offset="1" stop-color="#1D3E66"/>
              </linearGradient>
              <clipPath id="clip0_34_1566">
                <rect width="120" height="37" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          </div>
          <ul className="font-light font-[14px] flex content-center flex-wrap justify-items-center place-content-center mb-[30px]">
            <li
            >
              <Link href={`/`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
              Home
                </a>
              </Link>
            </li>
            <li
            >
              <Link href={`/about`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
                  About us
                </a>
              </Link>
            </li>
            <li
            >
              <Link href={`/solutions`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
                  Solutions
                </a>
              </Link>
            </li>
            <li
            >
              <Link href={`/works`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
                  Our work
                </a>
              </Link>
            </li>
            <li
            >
              <Link href={`/contact`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
                  Contact us
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center font-light text-[10px] text-white mb-[70px]">
            2022 - All rights reserved, Nitro Digital Solutions
          </div>
        </div>
      </Container>
    </footer>
  );
};
