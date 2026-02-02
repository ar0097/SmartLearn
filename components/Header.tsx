import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-[0_4px_20px_rgba(100,100,111,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="h-16 sm:h-18 flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-11">
            <h1 className="text-[#090909] font-baloo text-xl sm:text-2xl leading-8 tracking-[0.02em]">
              Logo
            </h1>

            <div className="hidden sm:flex flex-col items-center py-1 px-2 relative">
              <p className="text-[#7010CD] font-poppins text-base font-medium leading-6">
                Course
              </p>
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#7110CC] to-[#FA127B]" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hover:bg-[#FAFAFB] px-3 py-2 rounded-3xl font-poppins text-sm font-medium leading-5">
              Login
            </button>

            <button className="h-9 px-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#57029C] to-[#F700AC] text-white font-poppins text-sm font-medium">
              <span className="hidden sm:inline">Register for free</span>
              <span className="sm:hidden">Register</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
