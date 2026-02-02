"use client";
import React, { useRef, useState } from "react";
import learners from "@/assets/learners.jpg";
import Image from "next/image";
import dp from "@/assets/image.jpg";

interface PropsDataType {
  head: string;
  para: string;
  show: boolean;
  bg: string;
}

function Cards({ head, para, show, bg }: PropsDataType) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const CARD_WIDTH = 320;

  const handleScroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setIsStart(scrollLeft <= 0);
    setIsEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  return (
    <div className={`h-147 py-5 ${bg}`}>
      <h1 className="font-poppins text-[#171717] font-normal text-[20px] sm:text-[32px] my-5 md:text-[36px] lg:text-[40px] leading-none tracking-normal text-center">
        {head}
      </h1>

      <p className="text-[#171717] font-poppins my-5 mx-5 sm:mx-0 font-normal text-base leading-none tracking-normal text-center">
        {para}
      </p>

      <div className="relative flex justify-center">
        <button
          onClick={() => handleScroll("left")}
          disabled={isStart}
          className={`absolute left-4  top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow 
            ${
              isStart
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
        >
          ←
        </button>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex w-full max-w-[1100px] overflow-x-auto scroll-smooth px-4 sm:px-8 md:px-12 scrollbar-hide"
        >
          <div className="flex">
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <div className="w-72 bg-white rounded-2xl shadow-lg">
                  <div className="relative">
                    <Image
                      src={learners}
                      alt=""
                      className="w-full h-48 object-cover grayscale-75 p-2 rounded-2xl"
                    />

                    <div className="absolute -top-5 sm:-top-6   right-3 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-gray-700">4.9</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-500">200+ learners</span>
                    </div>

                    {i === 0 && (
                      <button className="bg-[#FF9D00] h-7.75 absolute -top-3 left-4 py-0.5 px-4 rounded-b-lg rounded-tl-lg font-poppins font-medium text-[14px]/[14px] text-[#FFFFFF]">
                        Selling Fast
                      </button>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 text-xs bg-[#EFF2FF] font-medium border border-[#AFBFFE] rounded-full">
                        English
                      </span>
                      <span className="px-3 py-1 text-xs font-medium border bg-[#FFEFF0] border-[#FFAFB3] rounded-full">
                        Intermediate
                      </span>
                      <span className="px-3 py-1 text-xs font-medium border bg-[#FFFEDF] border-[#E3E020] rounded-full">
                        4 classes
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-gray-900 leading-snug mb-2">
                      Summer robotics camp: fun projects with auto arduino,
                      Tink...
                    </h3>

                    {show ? (
                      <p className="text-sm text-gray-500 mb-4">
                        Build circuits & smart projects like alarms, weather
                        stations, etc
                      </p>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Image
                          src={dp}
                          alt=""
                          className="w-4 h-4 rounded-full"
                        />
                        <p className="font-poppins font-normal text-[12px]">
                          <span className="text-[#5F5F5F] mr-1">By:</span>
                          Daniel james
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 ">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>7-10 yrs</span>
                        <span>45</span>
                        <span className="font-medium text-gray-900">₹299</span>
                      </div>

                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        🛒
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleScroll("right")}
          disabled={isEnd}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow 
            ${
              isEnd
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Cards;
