import React from "react";
import Link from "next/link";
import { Container } from "../../util/container";
import { useRouter } from "next/router";

export const Footer = ({ data }) => {
  const router = useRouter();

  const [prefix] = React.useState("");

  return (
    <footer className={`bg-gradient-to-br`}>
      <Container className="relative" size="small">
        <div className="content-center justify-items-center flex-row items-center justify-center">
          <ul className="font-medium flex content-center justify-items-center place-content-center">
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
              <Link href={`/`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
                  About us
                </a>
              </Link>
            </li>
            <li
            >
              <Link href={`/`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
                  Solutions
                </a>
              </Link>
            </li>
            <li
            >
              <Link href={`/`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
                  Our work
                </a>
              </Link>
            </li>
            <li
            >
              <Link href={`/`} passHref>
                <a
                  className={`block py-2 pl-3 pr-4 relative select-none	text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 px-4`}
                >
                  Contact u
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
