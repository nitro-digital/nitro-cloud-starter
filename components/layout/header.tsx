import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export const Header = ({ data }) => {
  const router = useRouter();
  const theme = useTheme();
  const locales = {
    "en": "EN",
    "hu": "HU",
  };

  const headerColor = {
    default:
      "text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 text-blue-700 dark:text-blue-300 font-medium dark:border-blue-700",
    teal: "border-b-3 border-teal-200 text-teal-700 dark:text-teal-300 font-medium dark:border-teal-700",
    green:
      "border-b-3 border-green-200 text-green-700 dark:text-green-300 font-medium dark:border-green-700",
    red: "border-b-3 border-red-300 text-red-700 dark:text-green-300 font-medium dark:border-red-700",
    pink: "border-b-3 border-pink-200 text-pink-700 dark:text-pink-300 font-medium dark:border-pink-700",
    purple:
      "border-b-3 border-purple-200 text-purple-700 dark:text-purple-300 font-medium dark:border-purple-700",
    orange:
      "border-b-3 border-orange-200 text-orange-700 dark:text-orange-300 font-medium dark:border-orange-700",
    yellow:
      "border-b-3 border-yellow-300 text-yellow-700 dark:text-yellow-300 font-medium dark:border-yellow-600",
  };

  const activeBackgroundClasses = {
    blue: "text-blue-500",
    teal: "text-teal-500",
    green: "text-green-500",
    red: "text-red-500",
    pink: "text-pink-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
  };

  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");

  React.useEffect(() => {
    if (window && window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  useEffect(()=>{
    setMobileMenuOpen(false);
  }, [router.asPath])
  return (
    <div
      className={`bg-gradient-to-b ${headerColorCss}`}
    >
      <Container size="navbar" width="navbar"  className="absolute flow-root w-full py-0 z-10">
          <nav className={`bg-transparent ${router.asPath == "/" ? "!bg-transparent" : "!bg-[#007D77]"} border-gray-200 z-50`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link href="/" className="flex items-center">
                <svg className="h-8 mr-3" width="83" height="30" viewBox="0 0 83 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.53285 8.1293V11.1031H5.65789C6.3203 9.92961 7.31894 8.98459 8.5233 8.39153C9.64857 7.84086 10.8825 7.55225 12.1337 7.54713C13.4396 7.50392 14.741 7.72138 15.963 8.18699C16.8917 8.55953 17.706 9.17297 18.323 9.96496C18.9236 10.7852 19.3364 11.7291 19.5317 12.7289C19.7728 13.918 19.8898 15.1291 19.8808 16.3426V29.4545H14.0666V17.3915C14.0666 15.6345 13.7904 14.3181 13.2434 13.4527C12.6964 12.5873 11.7274 12.152 10.3363 12.152C8.74906 12.152 7.60116 12.6258 6.89262 13.5734C6.18408 14.5209 5.82807 16.0821 5.8246 18.2569V29.465H0V8.1293H5.53285Z" fill="#D9D9D9"/>
                  <path d="M22.8452 4.83042V0H28.6542V4.83042H22.8452ZM22.8452 15.7028V8.12937H28.6542V29.465H22.8452V15.7028Z" fill="#D9D9D9"/>
                  <path d="M44.0805 8.12944V12.063H39.8137V22.6155C39.8137 23.6015 39.9804 24.2623 40.3346 24.5927C40.6889 24.9231 41.3193 25.1172 42.304 25.1172C42.627 25.1172 42.9448 25.1172 43.2469 25.0752C43.5357 25.0502 43.8227 25.0082 44.1066 24.9494V29.4913C43.563 29.5766 43.0151 29.6309 42.4655 29.6539C41.8663 29.6539 41.2776 29.6959 40.7045 29.6959C39.8466 29.6991 38.9896 29.636 38.1413 29.5071C37.3923 29.4052 36.6693 29.1614 36.0105 28.7885C35.3924 28.4284 34.8884 27.8992 34.5569 27.2623C34.1677 26.446 33.9885 25.5442 34.0359 24.6399V12.063H30.4724V8.12944H33.9943V1.73608H39.8137V8.12944H44.0805Z" fill="#D9D9D9"/>
                  <path d="M52.4163 8.12945V12.0892H52.4997C52.7745 11.4251 53.1468 10.8064 53.6042 10.2536C54.0692 9.69359 54.6154 9.20736 55.2244 8.81127C55.8212 8.41344 56.4699 8.10101 57.1521 7.88295C57.8409 7.66156 58.5598 7.55007 59.2829 7.55253C59.714 7.5606 60.1419 7.62945 60.5541 7.75708V13.2064C60.278 13.1487 59.9497 13.1015 59.5694 13.0595C59.2009 13.0185 58.8305 12.9975 58.4597 12.9966C57.5308 12.9659 56.6069 13.1451 55.7558 13.5211C55.0492 13.8503 54.4363 14.3536 53.9741 14.9843C53.5097 15.6328 53.1818 16.3699 53.0102 17.1504C52.8124 18.0297 52.7163 18.929 52.7237 19.8305V29.4651H46.8887V8.12945H52.4163Z" fill="#D9D9D9"/>
                  <path d="M61.3095 14.1609C61.7805 12.8376 62.5299 11.6323 63.5065 10.6276C64.483 9.62278 65.6635 8.8422 66.9674 8.3392C68.4053 7.786 69.9348 7.51367 71.4739 7.53675C73.0214 7.51517 74.5591 7.7874 76.0065 8.3392C77.3141 8.83877 78.4986 9.61797 79.4781 10.6231C80.4576 11.6281 81.2088 12.8352 81.68 14.1609C82.2181 15.6475 82.4829 17.2204 82.4615 18.8025C82.4839 20.3778 82.219 21.944 81.68 23.4231C81.198 24.7424 80.4433 25.9437 79.4658 26.9476C78.4893 27.9424 77.3087 28.7103 76.0065 29.1976C74.5567 29.7389 73.02 30.0056 71.4739 29.9843C69.9362 30.0071 68.4077 29.7403 66.9674 29.1976C65.6712 28.7075 64.4962 27.9398 63.5237 26.9476C62.548 25.9423 61.7935 24.7414 61.3095 23.4231C60.7723 21.9436 60.5092 20.3775 60.5333 18.8025C60.5102 17.2207 60.7732 15.6479 61.3095 14.1609ZM66.5975 21.299C66.7466 22.0722 67.0305 22.8126 67.4363 23.4861C67.8228 24.1234 68.3597 24.6549 68.9992 25.0333C69.7538 25.4412 70.6023 25.6403 71.4583 25.6102C72.3208 25.639 73.1757 25.4401 73.9382 25.0333C74.5928 24.6672 75.1448 24.1404 75.5428 23.5018C75.9485 22.8284 76.2325 22.0879 76.3816 21.3147C76.5491 20.4933 76.6328 19.6568 76.6317 18.8182C76.6325 17.9727 76.5487 17.1293 76.3816 16.3007C76.2398 15.5255 75.9553 14.7837 75.5428 14.1137C75.1502 13.4867 74.6143 12.9634 73.9798 12.5875C73.2221 12.1661 72.3651 11.9595 71.5 11.9896C70.6977 11.9494 69.8994 12.1274 69.189 12.5048C68.4786 12.8822 67.8822 13.4452 67.4623 14.1347C67.0498 14.8047 66.7653 15.5464 66.6236 16.3217C66.4606 17.1508 66.3786 17.994 66.3787 18.8392C66.3711 19.6696 66.4444 20.4987 66.5975 21.3147V21.299Z" fill="#D9D9D9"/>
                </svg>
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Brand</span> */}
              </Link>
              <button onClick={toggleMobileMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
              <div className={`${mobileMenuOpen ? "" : "hidden"} w-full md:block md:w-auto focus:outline-none`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:bg-transparent bg-blue-900 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                  {data.nav &&
                    data.nav.map((item, i) => {
                      const activeItem =
                        item.href === ""
                          ? router.asPath === "/"
                          : router.asPath.includes(item.href);
                      return (
                        <li
                          key={`${item.label}-${i}`}
                          className={`${
                            activeItem ? activeItemClasses[theme.color] : ""
                          }`}
                        >
                          <Link href={`${prefix}/${item.href}`} passHref>
                            <a
                              className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4 ${
                                activeItem ? `` : `opacity-70`
                              }`}
                            >
                              {item.label}
                              {activeItem && (
                                <svg
                                  className={`absolute bottom-0 left-1/2 w-[180%] h-full -translate-x-1/2 -z-1 opacity-10 dark:opacity-15 ${
                                    activeBackgroundClasses[theme.color]
                                  }`}
                                  preserveAspectRatio="none"
                                  viewBox="0 0 230 230"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="230"
                                    y="230"
                                    width="230"
                                    height="230"
                                    transform="rotate(-180 230 230)"
                                    fill="url(#paint0_radial_1_33)"
                                  />
                                  <defs>
                                    <radialGradient
                                      id="paint0_radial_1_33"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(345 230) rotate(90) scale(230 115)"
                                    >
                                      <stop stopColor="currentColor" />
                                      <stop
                                        offset="1"
                                        stopColor="currentColor"
                                        stopOpacity="0"
                                      />
                                    </radialGradient>
                                  </defs>
                                </svg>
                              )}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  {locales[router.locale]}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            router.push(router.asPath, null, {
                              locale: "en",
                              scroll: false,
                            });
                          }}
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          EN
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            console.log("doit");
                            router.push(router.asPath, null, {
                              locale: "hu",
                              scroll: false,
                            });
                          }}
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          HU
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </nav>
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "via-white" ? `via-white` : `via-black dark:via-white`
          } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
        />
      </Container>
    </div>
  );
};
