"use client";

import {usePrimaryColor} from "./primary-provider";

const Footer = () => {
  const {primaryColor} = usePrimaryColor();

  return (
    <footer
      className={`bg-${primaryColor}-700 py-4 text-white dark:text-black`}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
