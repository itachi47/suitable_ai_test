import React from "react";
import arrowLeft from "../../images/lefticon.svg";
import arrowDown from "../../images/downicon.svg";
import Man from "../../images/man.svg";
import Check from "../../images/check.svg";
import Uncheck from "../../images/uncheck.svg";
import MoneySack from "../../images/money_sack.svg";

const MobileReferral = ({ referral, gray }) => {
  const [expand, setExpand] = React.useState(false);
  const stagesCompleted = referral.stagesCompleted;
  return (
    <div className={`${gray && "bg-gray-100"} rounded-sm`}>
      <div className="flex p-5">
        <div>
          <button className="w-10" onClick={() => setExpand((prev) => !prev)}>
            {expand ? (
              <img src={arrowDown} alt="arrown down" />
            ) : (
              <img src={arrowLeft} alt="arrow left" />
            )}
          </button>
        </div>
        <div className={`${expand ? "hidden" : "flex"} w-full`}>
          <div className="w-2/6 flex justify-center">
            <img src={Man} alt="man icon" />
            <div>title</div>
          </div>
        </div>
        <div className={`${!expand && "hidden"} w-full`}>
          <div className="flex">
            <div className="w-2/6 flex flex-col items-center after:content-[''] after:h-[50px] md:after:h-1 after:w-1 md:after:w-full  after:border-[#0ED746] after:border-2">
              <img src={Man} alt="man icon h-15 w-15" />
            </div>
            <div>title</div>
          </div>
          {stagesCompleted.map((stage, idx) => {
            return (
              <div className="flex">
                <div
                  className={`w-2/6 flex flex-col items-center after:content-[''] after:h-[50px] md:after:h-1 after:w-1 md:after:w-full  ${
                    stage.status
                      ? "after:border-[#0ED746]"
                      : "after:border-[#989898]"
                  } after:border-2`}
                >
                  {stage.status ? (
                    <img src={Check} alt="check icon" className="h-5 w-5" />
                  ) : (
                    <img src={Uncheck} alt="uncheck icon" className="h-5 w-5" />
                  )}
                </div>
                <div className="flex">
                  <div>{stage.stageName}</div>
                  <div>{stage.date}</div>
                </div>
              </div>
            );
          })}
          <div className="w-2/6 flex justify-center">
            <img src={MoneySack} alt="money sack icon" className="h-10 w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileReferral;
