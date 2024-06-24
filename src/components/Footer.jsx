import React from "react";
import stemLogo from "../assets/stemLogo.png";
import { MessageSquareIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import trophy from "../assets/footerTrophy.png";
import FooterPanel from "./FooterPanel";
import penguin from "../assets/footerPenguin.png";

const arr = [
  {
    img: trophy,
    text: "Coding Competitions",
  },
  {
    img: trophy,
    text: "Coding Quizes",
  },
  {
    img: trophy,
    text: "Coding MasterClass",
  },
  {
    img: trophy,
    text: "Coding Webinars",
  },
  {
    img: trophy,
    text: "Coding WorkSheets",
  },
  {
    img: trophy,
    text: "Coding Blogs",
  },
  {
    img: trophy,
    text: "Coding Guides",
  },
  {
    img: trophy,
    text: "Coding Courses",
  },
];

const SmallCard = ({ img, text }) => {
  return (
    <div
      className="flex flex-col gap-1 text-white hover:shadow-md shadow-gray-600 transition-all 
    duration-75 cursor-pointer ease-linear"
    >
      <img src={img} className="h-8 w-8" alt="" />
      <p className="text-sm text-white font-semibold">{text}</p>
    </div>
  );
};

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-10 md:py-24 lg:px-28">
      <div className="container mx-auto ">
        <div className=" flex items-center justify-between">
          <img src={stemLogo} />

          <div className="bg-white rounded-xl py-4 px-4 flex items-center gap-4 justify-center">
            <div>
              <p className="font-bold text-lg text-slate-700">Got questions?</p>
              <p className="font-bold text-lg text-slate-700">
                Contact Us Anytime
              </p>
            </div>

            <div>
              <p className="ml-4 text-black">Send us a message</p>
              <p className="flex items-center gap-1 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

                <p className="font-semibold text-xl">support@codingal.com</p>
              </p>
            </div>

            <div>
              <p className="ml-4 text-black">Call us</p>
              <p className="flex items-center gap-1 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="font-semibold text-xl">+91 6361 158952</p>
              </p>
            </div>
          </div>
        </div>

        <Separator className="mt-4 mb-4 md:mt-8 md:mb-8" />

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3 relative">
            <div className="flex items-center gap-2 mb-2 md:mb-6">
              <p className="p-1 relative -top-2 -mr-1 bg-yellow-400 rounded-sm text-black text-sm">
                {" "}
                New
              </p>
              <p className="underline text-3xl font-semibold">
                {" "}
                Coding for kids resources
              </p>
            </div>

            <p className="text-white text-lg ">
              8 free coding resources for kids to start their coding journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {arr.map((item, index) => (
              <SmallCard key={index} img={item.img} text={item.text} />
            ))}
          </div>
        </div>

        <Separator className="mt-4 mb-4 md:mt-8 md:mb-8" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          <FooterPanel />
          <FooterPanel />
          <FooterPanel />
        </div>

        <Separator className="mt-4 mb-4 md:mt-8 md:mb-8" />

        <div className="flex flex-col gap-2 items-start py-4 px-3 md:py-6 md:px-4 ">
          <div className="flex items-center gap-1">
            <img src={penguin} alt="" />
            <p>Our Mission and Vision</p>
          </div>
          <p className="text-md text-white">
            Codingal is on a mission to inspire school kids to fall in love with
            coding. Coding is proven to develop creativity, logical thinking and
            problem solving skills in kids. Coding is an essential skill of the
            future and more than 60% of all jobs in STEM-related fields require
            knowledge of code. Kids who start learning to code at a young age
            are guaranteed to become leaders, creators and entrepreneurs of the
            future.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
