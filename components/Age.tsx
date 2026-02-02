import React from "react";

function Age() {
  return (
    <div className="my-6 px-4">
      <h1 className="font-poppins text-[28px] sm:text-[40px] font-normal leading-none text-[#171717] text-center">
        How Old Are You? 🎯
      </h1>

      <p className="text-[#171717] my-4 font-poppins text-sm sm:text-base font-normal leading-normal text-center">
        Pick your age and find the perfect courses just for you! ✨
      </p>

      <div
        className="
          mx-auto
          flex
          flex-wrap
          justify-center
          gap-2
          text-[12px]
          font-normal
        "
      >
        {[
          "1-2",
          "2-3",
          "3-4",
          "4-5",
          "5-6",
          "6-7",
          "7-8",
          "8-9",
          "9-10",
          "10-11",
          "11-12",
          "12-13",
          "13-14",
          "14-15",
          "15-16",
          "16-17",
          "17-18",
          "18-19",
          "19-20",
        ].map((age) => (
          <div
            key={age}
            className="
              w-[58px]
              h-[54px]
              border-2
              border-[#FFD400]
              px-3
              py-2
              rounded-xl
              flex
              flex-col
              justify-center
              items-center
              cursor-pointer
              hover:bg-[#FFD400]/10
              transition
            "
          >
            <p className="leading-none">{age}</p>
            <p className="leading-none">Years</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Age;
