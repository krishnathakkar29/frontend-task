import React from "react";
import star from "../assets/star.svg";
import HeroImg from '../assets/heroImage.webp'
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="h-[75vh] bg-custom-gradient py-2 md:py-8 md:px-24">
      <div className="h-full container  mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="h-100 w-1/2  flex flex-col gap-2 md:gap-8 items-start">
          <div>
            <div className="flex items-center">
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
            </div>
            <p className="text-white text-sm">4.8 / 5 stars | Read reviews</p>
          </div>

          <p className="text-3xl font-bold text-white">IOI Algorithms Course</p>

          <p className="text-xl font-semibold text-white">
            Ace the International Olympiad in Informatics (IOI) by mastering
            data structures and algorithms with expert teachers
          </p>

          <div className="">
            <table className="table-auto border border-white text-white rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-white">Grade</th>
                  <th className="px-4 py-2 border border-white">Lessons</th>
                  <th className="px-4 py-2 border border-white">Activities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-white">6-12</td>
                  <td className="px-4 py-2 border border-white">120</td>
                  <td className="px-4 py-2 border border-white">150+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center w-full gap-2 md:gap-4">
          <Button
            variant="outline"
            className="hover:bg-orange-600/10 text-md transition-all ease-linear duration-150 border-2 border-orange-500 text-orange-600 hover:text-orange-600 w-1/3"
          >
            Join Class
          </Button>
          <Button className=" hover:bg-orange-600/75 text-md transition-all ease-linear duration-150 border-2 border-orange-500  text-white bg-orange-600 px-6 w-1/3">
            Book free class
          </Button>
          </div>
        </div>

        <div className="w-1/2 h-full ">
            <img src={HeroImg} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
