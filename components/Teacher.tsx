import teacherImage from "@/assets/teachers.jpg";
import Image from "next/image";
import Cards from "./Cards";

const teachers = [
  {
    name: "Andy Brew",
    credentials: "M.Sc, B.Ed",
    years: "15+ Years",
    students: "1000+ Students",
    subject: "Computer science",
  },
  {
    name: "Andy Brew",
    credentials: "M.Sc, B.Ed",
    years: "15+ Years",
    students: "1000+ Students",
    subject: "English",
  },
  {
    name: "Andy Brew",
    credentials: "M.Sc, B.Ed",
    years: "15+ Years",
    students: "1000+ Students",
    subject: "Early educator",
  },
  {
    name: "Andy Brew",
    credentials: "M.Sc, B.Ed",
    years: "15+ Years",
    students: "1000+ Students",
    subject: "Coding",
  },
  {
    name: "Andy Brew",
    credentials: "M.Sc, B.Ed",
    years: "15+ Years",
    students: "1000+ Students",
    subject: "Computer science",
  },
  {
    name: "Andy Brew",
    credentials: "M.Sc, B.Ed",
    years: "15+ Years",
    students: "1000+ Students",
    subject: "Computer science",
  },
];

const Teacher = () => {
  return (
    <>
      <section className="py-16 md:py-5 sm:py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#171717] mb-3">
              Learn from Top Teachers
            </h1>
            <p className="text-[#171717] text-sm sm:text-base">
              Expert instructors who make learning fun and engaging for every
              child
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center
                w-full max-w-[170px]
                border-2 border-[#E5E5E5] rounded-xl my-5 md:my-0 sm:my-0
                pt-12 px-4 pb-4 bg-white"
              >
                <div className="absolute -top-8 w-[64px] h-[64px] rounded-full border-2 border-[#E5E5E5] bg-white shadow-sm flex items-center justify-center">
                  <Image
                    src={teacherImage}
                    alt={teacher.name}
                    className="w-[56px] h-[56px] object-cover rounded-full"
                  />
                </div>

                <h3 className="font-medium text-[#000000] text-sm sm:text-base mb-1">
                  {teacher.name}
                </h3>

                <p className="text-[#696969] text-[10px] mb-1">
                  {teacher.credentials} | {teacher.years}
                </p>

                <p className="text-[#696969] text-[10px] mb-3">
                  {teacher.students}
                </p>

                <span className="bg-[#EFEFEF] py-1 px-2 text-[#000000] text-[10px] rounded-full font-medium">
                  {teacher.subject}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <Cards head="" para="" bg="" show={false} />
      </section>
    </>
  );
};

export default Teacher;
