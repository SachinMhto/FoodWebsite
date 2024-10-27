/* eslint-disable no-unused-vars */
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DarkMode from "../DarkMode";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-3">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="#"
                className="flex justify-center gap-2 font-lobster text-2xl sm:text-3xl"
              >
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src="https://cdn.pixabay.com/photo/2024/02/23/08/27/apple-8591539_1280.jpg"
                  alt=""
                />
                Foodie Zone
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex gap-3">
                <li>
                  <a href="" className="inline-block p-4 hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="inline-block p-4 hover:text-primary">
                    Abouts Us
                  </a>
                </li>
                <li>
                  <a href="" className="inline-block p-4 hover:text-primary">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="" className="inline-block p-4 hover:text-primary">
                    Products
                  </a>
                </li>
              </ul>
              <button
                className="bg-gradient-to-r from-primary to-secondary
              text-white px-4 py-1 rounded-full hover:scale-105 duration-300"
              >
                Order{" "}
                <AddShoppingCartIcon className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
