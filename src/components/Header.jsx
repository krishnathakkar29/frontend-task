import React from "react";
import Logo from "../assets/logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavigationMenuDemo } from "./DropDown";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className=" border-2 border-gray-300 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-[35vw]">
          <img src={Logo} height={100} width={100} alt="" />
          <div className="flex items-center gap-3">
            <p className="text-xl font-medium hover:text-orange-500 transition-all duration-150 ease-linear cursor-pointer">
              Quizzes
            </p>
            <p className="text-xl font-medium hover:text-orange-500 transition-all duration-150 ease-linear cursor-pointer">
              Competitions
            </p>

            <NavigationMenuDemo />
          </div>
        </div>

        <div className="flex items-center gap-5 ">
          <p className="text-xl font-medium hover:text-orange-500 transition-all duration-150 ease-linear cursor-pointer">
            Login
          </p>
          <Button
            variant="outline"
            className="hover:bg-orange-600/10 text-md transition-all ease-linear duration-150 border-2 border-orange-500 text-orange-600 hover:text-orange-600"
          >
            Join Class
          </Button>
          <Button className=" hover:bg-orange-600/75 text-md transition-all ease-linear duration-150 border-2 border-orange-500  text-white bg-orange-600 px-6">
            Book free class
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
