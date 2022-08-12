import React, { FC } from 'react';
import { Link } from 'gatsby';

interface NavbarProps {
  logo: string;
  handleClick: () => void;
  buttonTitle: string;
  menu: React.ReactNode;
  navbarLink: {
    url: string;
    name: string;
  }[];
}

const Navbar: FC<NavbarProps> = (props) => {
  const { logo, handleClick, buttonTitle, menu, navbarLink } = props;

  return (
    <nav className="top-0 z-20 sticky shadow-lg">
      <div className="w-full bg-white">
        <div className="py-2 px-5 xs:px-8 lg:px-14 2xl:px-[500px]">
          <div className="xl:px-20 mx-auto flex justify-between items-center">
            <Link to="/">
              <div className="lg:flex lg:items-center lg:space-x-4">
                <img src={logo} alt="Logo Cv Creatif" width="45px" />
              </div>
            </Link>
            <div className="hidden justify-between items-center w-full lg:flex md:w-auto">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm items-center">
                {navbarLink.map((nav, index) => (
                  <li key={index}>
                    <Link
                      to={nav.url}
                      className="block py-2 pr-4 pl-3 font-FrontageRegular text-[#191919] hover:border-b-2 hover:border-[#24445c] lg:p-0"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    className=" hidden md:block font-FrontageBold bg-[#24445c] hover:bg-[#1a3142] text-white lg:py-4 px-6 text-base xs:text-lg lg:text-xs 4xl:text-xl rounded-md"
                    onClick={handleClick}
                  >
                    {buttonTitle}
                  </button>
                </li>
              </ul>
            </div>
            {menu}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
