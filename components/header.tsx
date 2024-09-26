"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {Menu, X} from "lucide-react";

import {ModeToggle} from "./mode-toggle";
import PrimaryToggle from "./primary-toggle";
import {usePrimaryColor} from "./primary-provider";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const {primaryColor} = usePrimaryColor();

  return (
    <nav className={`w-full bg-${primaryColor}-700 shadow`}>
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="/">
              <h2 className="text-2xl font-bold text-white dark:text-black">
                <Image
                  src="/next.svg"
                  width={30}
                  height={30}
                  alt="logo"
                  className="duration-200 hover:scale-125"
                />
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-white dark:text-black outline-none focus:border-gray-200"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? "block" : "hidden"}`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white dark:text-black hover:text-black dark:hover:text-white">
                <Link href="/">Blogs</Link>
              </li>
              <li className="text-white dark:text-black hover:text-black dark:hover:text-white">
                <Link href="/category">Categories</Link>
              </li>
              <li className="text-white dark:text-black hover:text-black dark:hover:text-white">
                <Link href="/author">Authors</Link>
              </li>
              <ModeToggle />
              <PrimaryToggle />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
