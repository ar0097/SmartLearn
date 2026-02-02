"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import sun from "@/assets/Sun.png";
import sun1 from "@/assets/Vector.png";
import learners from "@/assets/learners.jpg";
import sun2 from "@/assets/Layer_1.png";
import dp from "@/assets/image.jpg";
import sun3 from "@/assets/Group 58306.png";
function Filter() {
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
    <div className="py-10 bg-[#F8FFFE]">
      <h1 className="font-poppins text-[40px] text-center font-normal text-[#171717]">
        Filter with Time
      </h1>
      <p className="font-poppins font-normal text-[16px] text-center text-[#171717]">
        Choose the perfect time that fits your child's schedule
      </p>

      <div className="flex justify-center flex-wrap items-center gap-10 mt-5">
        <div className="w-52.25 border-[#E5E5E5] border-[1px] bg-[#FFFFFF] h-17 relative rounded-xl">
          <div className="flex flex-col m-2">
            <h1>Morning Classes</h1>
            <p className="text-[#696969]">8am - 12pm</p>
          </div>
          <Image
            src={sun}
            alt=""
            width={0}
            height={0}
            className="absolute bottom-0 right-5"
          />
        </div>
        <div className="w-52.25 border-[#E5E5E5] border-[1px] bg-[#FFFFFF] h-17 relative rounded-xl">
          <div className="flex flex-col m-2">
            <h1>Afternoon Classes</h1>
            <p className="text-[#696969]">12pm - 4pm</p>
          </div>
          <Image
            src={sun3}
            alt=""
            width={0}
            height={0}
            className="absolute bottom-0 right-5"
          />
        </div>
        <div className="w-52.25 border-[#E5E5E5] border-[1px] bg-[#FFFFFF] h-17 relative rounded-xl">
          <div className="flex flex-col m-2">
            <h1>Evening Classes</h1>
            <p className="text-[#696969]">4pm - 8pm</p>
          </div>
          <Image
            src={sun1}
            alt=""
            width={0}
            height={0}
            className="absolute bottom-0 right-5"
          />
        </div>
        <div className="w-52.25 border-[#E5E5E5] border-[1px] bg-[#FFFFFF] h-17 relative rounded-xl">
          <div className="flex flex-col m-2">
            <h1>Late Evening Classes</h1>
            <p className="text-[#696969]">8pm - 11pm</p>
          </div>
          <Image
            src={sun2}
            alt=""
            width={0}
            height={0}
            className="absolute bottom-0 right-5"
          />
        </div>
      </div>

      <div className="relative flex justify-center">
        <button
          onClick={() => handleScroll("left")}
          disabled={isStart}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow 
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
          className="flex overflow-hidden mt-5 px-8 md:px-20 w-[1100px]"
        >
          <div className="flex">
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-lg">
                  <div className="relative flex flex-col sm:flex-row">
                    <div className="relative sm:w-[260px] w-full flex-shrink-0">
                      <Image
                        src={learners}
                        alt=""
                        className="w-full h-[180px] sm:h-full object-cover p-2 rounded-2xl"
                      />


                      {i === 0 && (
                        <button className="bg-[#FF9D00] absolute top-0 left-4 py-1 px-4 rounded-b-lg rounded-tl-lg font-poppins font-medium text-[12px] text-white">
                          Selling Fast
                        </button>
                      )}
                    </div>

                    <div className="p-2 flex flex-col justify-between flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs bg-[#EFF2FF] font-medium border border-[#AFBFFE] rounded-full">
                          English
                        </span>
                        <span className="px-3 py-1 text-xs bg-[#FFEFF0] border border-[#FFAFB3] rounded-full">
                          Intermediate
                        </span>
                        <span className="px-3 w-[75px] py-1 text-xs bg-[#FFFEDF] border border-[#E3E020] rounded-full">
                          4 classes
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug mb-2">
                        Summer robotics camp: fun projects with auto arduino,
                        Tink...
                      </h3>

                      <div className="flex items-center gap-2 mb-3">
                        <Image
                          src={dp}
                          alt=""
                          className="w-4 h-4 rounded-full"
                        />
                        <p className="font-poppins font-normal text-[12px]">
                          <span className="text-[#5F5F5F] mr-1">By:</span>
                          Daniel james ⭐ 4.9 | 200+ learners
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>7–10 yrs</span>
                          <span>45 mins</span>
                          <span className="font-medium text-gray-900">
                            ₹299
                          </span>
                        </div>

                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          🛒
                        </button>
                      </div>
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

export default Filter;
