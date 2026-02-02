import React from "react";
import boy from "@/assets/boywithmagnify.png";
import hand from "@/assets/hand.gif";
import girl from "@/assets/girlwithbook.png";
import happy_life from "@/assets/happy-life.gif";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <div className="relative h-126.5 flex justify-center items-center bg-[linear-gradient(99.59deg,#423374_0%,#330B5C_50%,#423374_100%)]">
      <div className="hidden sm:block w-104.75 h-104.75 absolute top-21.75 -left-14.5">
        <Image src={boy} width={0} height={0} alt="" />

        <div className="w-23.75 absolute -top-10 right-16 bg-[#FFFFFF26] h-23.75 border rounded-full p-2 border-[#6F6F6F] flex flex-col gap-2 justify-center items-center">
          <p className="font-poppins text-2xl font-bold text-white">500+</p>
          <span className="text-xs text-white">Courses</span>
        </div>

        <div className="bg-[#FFFFFF26] w-35 h-15.25 px-6 py-2 absolute top-84 -right-2 flex items-center gap-2 border border-[#6F6F6F] rounded-[40px]">
          <Image src={hand} width={50} height={50} alt="" />
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-white">4.9</p>
            <span className="text-xs text-white">Rating</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl px-4 sm:px-0 flex flex-col gap-8 text-center">
        <div className="font-comic text-white font-bold leading-[1.15] text-3xl sm:text-4xl lg:text-5xl">
          Learn a New Skill <br />
          <span className="text-[#F2FA5C]">
            Everyday, Anytime, and Anywhere.
          </span>
        </div>

        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center mx-auto 
                rounded-4xl sm:rounded-[48px] 
                bg-white w-full sm:max-w-160.75 
                p-2 sm:p-3 
                gap-2 sm:gap-3 
                border-2"
        >
          <div className="flex items-center gap-2 w-full px-3 sm:px-0">
            <CiSearch size={20} className="text-gray-500" />
            <input
              type="text"
              className="w-full h-10 sm:h-6 outline-none text-sm sm:text-base"
              placeholder="What do you want to learn today?"
            />
          </div>

          <button className="bg-linear-to-r from-[#57029C] to-[#F700AC] text-white py-3 sm:py-3 px-6 rounded-[40px] w-full sm:w-40.5 text-sm sm:text-base font-medium">
            Search
          </button>
        </div>
      </div>

      <div className="hidden sm:block">
        <Image
          src={girl}
          alt=""
          className="w-[562.64px] absolute top-33 left-239.5 h-93.75"
        />

        <div className="w-41.75 h-17.5 bg-[#FFFFFF26] absolute top-28 left-323 flex items-center gap-2 rounded-[40px] border border-[#6F6F6F] px-6 py-2">
          <Image src={happy_life} alt="" className="w-11 h-11" />
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-white">10k+</p>
            <span className="text-xs text-white">Happy Kids</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
