import React from "react";
import Man from "../../images/man.svg";
import Popper from "../../images/popper.svg";
import "./referral.css";
import TimeLine from "../timeline/TimeLine";

const Referral = ({ referral, gray }) => {
  const states = ["Referred", "Interviewed", "Hired", "Joined"];
  const status = {
    referred: 1,
    interviewed: 2,
    hired: 3,
    joined: 4,
  };
  const [expand, setExpand] = React.useState(false);

  return (
    <div className={`${gray && "bg-gray-100"} rounded-sm py-2`}>
      <div className={`${expand ? "hidden" : "flex"} p-2 md:hidden`}>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
          onClick={() => setExpand((prev) => !prev)}
        >
          Show
        </button>

        <div className="">
          <img src={Man} alt="check" className="h-15 w-15" />
        </div>
        <div className="">
          <span>{referral.candidate.name}</span>
          <br />
          <span className="text-gray-400">{referral.candidate.profession}</span>
        </div>
      </div>

      <ul
        className={`${
          !expand ? "hidden" : "flex"
        } flex-col justify-start md:flex md:flex-row md:justify-start`}
      >
        {/* First item for desktop view */}
        <li className="hidden md:w-1/6 md:flex md:py-2">
          <div className="">
            <img src={Man} alt="check" className="h-15 w-15" />
          </div>
          <div className="">
            <span>{referral.candidate.name}</span>
            <br />
            <span className="text-gray-400">
              {referral.candidate.profession}
            </span>
          </div>
        </li>
        {/* First Item for Mobile view */}
        <li className="flex justify-end md:hidden">
          <div className="w-1/3">
            <button
              type="button"
              class="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
              onClick={() => setExpand((prev) => !prev)}
            >
              Hide
            </button>
          </div>

          <div className="w-1/3 flex flex-col items-center md:flex-row after:content-[''] after:h-[50px] md:after:h-1 after:w-1 md:after:w-full  after:border-[#0ED746] after:border-2">
            <img src={Man} alt="man" className="h-15 w-15" />
          </div>
          <p className="w-1/3 md:hidden">text</p>
        </li>
        {states.map((state, idx) => {
          return (
            <TimeLine
              curr={state.toLowerCase() === referral.status.toLowerCase()}
              first={state.toLowerCase() === "referred"}
              last={state.toLowerCase() == "joined"}
              visited={idx + 1 < status[referral.status.toLowerCase()]}
              description={state}
              credited={referral.reward.credit}
            />
          );
        })}
        <li className="md:w-1/6 md:py-2 flex items-center justify-center md:justify-start">
          {referral.reward.credit ? (
            <div className="flex">
              <span className="text-green-400 font-bold text-2xl mx-2">
                {referral.reward.amount}
              </span>
              <img src={Popper} alt="popper" />
            </div>
          ) : (
            <span className="md:flex text-gray-400 font-light text-2xl ml-2">
              {referral.reward.amount}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Referral;
