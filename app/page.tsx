import Age from "@/components/Age";
import Cards from "@/components/Cards";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Teacher from "@/components/Teacher";
import React from "react";

import laptop from "@/assets/laptop.png";
import obj from "@/assets/OBJECTS.png";
import horse from "@/assets/Horse_figure.png";
import grp from "@/assets/Group.png";
import grp1 from "@/assets/Group (1).png";
import Filter from "@/components/Filter";

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Age />

      <Cards
        bg="bg-[linear-gradient(113.73deg,rgba(242,245,255,0.45)_1%,rgba(237,230,255,0.45)_98.92%)]"
        head="New Launches ⭐"
        para="Our most loved courses that kids absolutely adore!"
        show={true}
      />

      <Cards
        bg=""
        head="Featured Courses ⭐"
        para="Our most loved courses that kids absolutely adore!"
        show={false}
      />

      <Teacher />

      <Cards
        bg="bg-[linear-gradient(113.73deg,rgba(242,245,255,0.45)_1%,rgba(237,230,255,0.45)_98.92%)]"
        head="-----> Webinar starting within 24 hrs <-----"
        para=""
        show={false}
      />

      <section className="py-16 px-4">
        <h1 className="font-poppins font-normal text-[28px] sm:text-[32px] md:text-[40px] text-[#171717] text-center mb-4">
          Popular Categories
        </h1>

        <p className="font-poppins text-[14px] sm:text-[16px] font-normal text-[#171717] text-center mb-12">
          Pick what you love most! These categories have everything you need to
          learn something awesome ✨
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Categories
            dp={laptop}
            title="Coding"
            bg="bg-[#FF7824]"
            text="text-white"
            pos="-top-[43px] left-[63px]"
          />

          <Categories
            dp={obj}
            title="Public Speaking"
            bg="bg-white"
            text="text-black"
            pos="-top-[60px] left-[90px]"
          />

          <Categories
            dp={horse}
            title="Chess"
            bg="bg-white"
            text="text-black"
            pos="-top-[60px] left-[100px]"
          />

          <Categories
            dp={grp}
            title="Home Work Help"
            bg="bg-white"
            text="text-black"
            pos="-top-[60px] left-[80px]"
          />

          <Categories
            dp={grp1}
            title="App building"
            bg="bg-white"
            text="text-black"
            pos="-top-[60px] left-[87px]"
          />
        </div>
      </section>

      <Cards bg="" head="" para="" show={true} />

      <Filter />
    </div>
  );
}

export default Page;
