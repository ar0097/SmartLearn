import Image from "next/image";
import React from "react";

interface CateTypes {
  dp: any;
  title: string;
  bg: string;
  text: string;
  pos: string;
}
function Categories({ dp, title, bg, text, pos }: CateTypes) {
  return (
    <div className="max-h-196.25 px-[40px] py-8 ">
      <div
        className={`relative w-54.5 border border-[#E5E5E5] h-25.75 rounded-[16px] pt-6 pb-3 px-6 ${bg}`}
      >
        <h1 className={`absolute bottom-3 ${text} font-semibold text-[16px]`}>
          {title}
        </h1>
        <Image
          src={dp}
          alt=""
          width={0}
          height={0}
          className={`w-[158.1px] object-contain h-[134.09px] absolute ${pos}`}
        />
      </div>
    </div>
  );
}

export default Categories;
