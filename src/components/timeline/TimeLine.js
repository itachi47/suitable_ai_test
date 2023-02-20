import React from "react";
import Check from "../../images/check.svg";
import Man from "../../images/man.svg";
import UnCheck from "../../images/uncheck.svg";

const TimeLine = ({
  curr,
  description,
  date,
  visited,
  first,
  last,
  credited,
}) => {
  console.log(credited);
  return visited ? (
    <li className="flex justify-end md:py-2 md:w-1/6  md:flex-col md:justify-center">
      <div className="w-1/3 md:w-full flex flex-col items-center md:flex-row after:content-[''] after:h-[50px] md:after:h-1 after:w-1 md:after:w-full  after:border-[#0ED746] after:border-2">
        <img src={Check} alt="check" className="h-5 w-5" />
      </div>
      <p className="w-1/3 md:hidden">text</p>
    </li>
  ) : curr ? (
    <li className="md:py-2 md:w-1/6 flex justify-end md:justify-center md:flex-col">
      <div
        className={`w-1/3 md:w-full flex flex-col items-center md:flex-row after:content-[''] after:h-[50px] md:after:h-1 after:w-1 md:after:w-full  ${
          credited ? "after:border-[#0ED746]" : "after:border-[#989898]"
        } after:border-2`}
      >
        <img
          src={Man}
          alt="man"
          className="hidden md:flex h-10 w-10 ring-4 rounded-full ring-green-400"
        />
        <img src={Check} alt="check" className="md:hidden h-5 w-5" />
      </div>
      <p className="w-1/3 md:hidden">
        <span>text</span>
      </p>
    </li>
  ) : (
    <li className="md:py-2 md:w-1/6 flex justify-end md:justify-center md:flex-col">
      <div className="w-1/3 md:w-full flex flex-col items-center md:flex-row after:content-[''] after:h-[50px] md:after:h-1 after:w-1 md:after:w-full  after:border-[#989898] after:border-2">
        <img src={UnCheck} alt="uncheck" className="h-5 w-5" />
      </div>
      <p className="w-1/3 md:w-full md:hidden">text</p>
    </li>
  );
};

export default TimeLine;
