import React from "react";
import Link from "next/link";
import { Container } from "../../util/container";
import { useRouter } from "next/router";

export const Footer = ({ data }) => {
  const router = useRouter();

  const [prefix] = React.useState("");

  return (
    <footer className={`bg-[#272525] h-[331px]`}>
      <Container className="relative !py-0" size="small">
        <div className="content-center justify-items-center md:flex-row items-center justify-center text-[#009E97] !py-0">
          <div className="flex justify-center mt-[80px] mb-[30px]">
            <img
              className="relative z-10"
              src="/uploads/Frame (11).svg"
            />
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
