import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <header className=" w-full py-4 shadow-xl">
        <nav className=" container mx-auto flex items-center justify-between">
          <svg
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
            />
          </svg>

          <ul className="flex items-center justify-center space-x-6 font-bold text-gray-600 text-lg uppercase tracking-wide max-md:hidden">
            <li>
              <a onClick={handleClick} href="">
                Home
              </a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About me</a>
            </li>
            <li>
              <a href="">Overview</a>
            </li>
          </ul>

          <div className="flex items-center justify-center space-x-5">
            <div className="flex items-center justify-center space-x-4 font-bold text-lg text-gray-700">
              <button className="uppercase tracking-wider">Sign</button>
              <button className=" border-gray-600 border-2 px-4 py-2 rounded-xl uppercase tracking-wider">
                Register
              </button>
            </div>
            <div className=" items-center justify-center hidden max-md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
