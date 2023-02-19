import React from "react";
import ManIcon from "../manIcon/ManIcon";
import Check from "../../images/check.svg";
import UnCheck from "../../images/uncheck.svg";
import Popper from "../../images/popper.svg";
import "./referral.css";

const Referral = ({ referral, gray }) => {
  const status = {
    referred: 1,
    interviewed: 2,
    hired: 3,
    joined: 4,
  };
  const currStatus = status[referral.status];

  return (
    <div className={`py-3 ${gray && "bg-gray-100"} rounded-sm`}>
      <ol className="md:flex items-center">
        <li className="flex w-1/6 items-center">
          <ManIcon />
          <div>
            <span className="font-medium text-[18px]">
              {referral.candidate.name}
            </span>
            <br />
            <span className="font-medium text-[18px] text-[#989898]">
              {referral.candidate.profession}
            </span>
          </div>
        </li>
        {/* Referred  */}
        <li
          className={`flex w-1/6 items-center ${
            currStatus === 1
              ? "stepper-line-solid-gray-after"
              : "stepper-line-solid-after"
          } justify-end`}
        >
          {currStatus === 1 ? (
            <div className="flex items-center justify-center w-10 h-10 border-4 border-[#0ED746] rounded-full">
              <ManIcon />
            </div>
          ) : (
            <div className="flex items-center justify-center w-5 h-5">
              <img src={Check} alt="check" />
            </div>
          )}
        </li>
        {/* Interviewed */}
        <li
          className={`flex w-1/6 items-center ${
            currStatus === 2
              ? "stepper-line-solid-gray-after stepper-line-solid-before"
              : currStatus < 2
              ? "stepper-line-solid-gray-after stepper-line-solid-gray-before"
              : "stepper-line-solid-after stepper-line-solid-before"
          } justify-end`}
        >
          {currStatus === 2 ? (
            <div className="flex items-center justify-center w-10 h-10 border-4 border-[#0ED746] rounded-full">
              <ManIcon />
            </div>
          ) : currStatus < 2 ? (
            <div className="flex items-center justify-center w-5 h-5">
              <img src={UnCheck} alt="uncheck" />
            </div>
          ) : (
            <div className="flex items-center justify-center w-5 h-5">
              <img src={Check} alt="check" />
            </div>
          )}
        </li>
        {/* Hired */}
        <li
          className={`flex w-1/6 items-center ${
            currStatus === 3
              ? "stepper-line-solid-gray-after stepper-line-solid-before"
              : currStatus < 3
              ? "stepper-line-solid-gray-after stepper-line-solid-gray-before"
              : "stepper-line-solid-after stepper-line-solid-before"
          } justify-end`}
        >
          {currStatus === 3 ? (
            <div className="flex items-center justify-center w-10 h-10 border-4 border-[#0ED746] rounded-full">
              <ManIcon />
            </div>
          ) : currStatus < 3 ? (
            <div className="flex items-center justify-center w-5 h-5">
              <img src={UnCheck} alt="uncheck" />
            </div>
          ) : (
            <div className="flex items-center justify-center w-5 h-5">
              <img src={Check} alt="check" />
            </div>
          )}
        </li>
        {/* Joined */}
        <li
          className={`flex w-1/6 items-center ${
            currStatus === 4
              ? "stepper-line-solid-after stepper-line-solid-before"
              : currStatus < 4
              ? "stepper-line-solid-gray-after stepper-line-solid-gray-before after:border-dashed"
              : "stepper-line-solid-after stepper-line-solid-before after:border-dashed"
          } justify-end`}
        >
          {currStatus === 4 ? (
            <div className="flex items-center justify-center w-10 h-10 border-4 border-[#0ED746] rounded-full">
              <ManIcon />
            </div>
          ) : currStatus < 4 ? (
            <div className="flex items-center justify-center w-5 h-5">
              <img src={UnCheck} alt="uncheck" />
            </div>
          ) : (
            <div className="flex items-center justify-center w-5 h-5">
              <img src={Check} alt="check" />
            </div>
          )}
        </li>
        {/* Credit  */}
        <li
          className={`flex w-1/6 items-center ${
            referral.reward.credit
              ? "stepper-line-solid-before"
              : "stepper-line-solid-gray-before before:border-dashed "
          }  justify-start`}
        >
          <div className="flex items-center justify-center">
            <span
              className={`ml-2 text-[24px]  ${
                referral.reward.credit
                  ? "font-bold text-[#0ED746]"
                  : "font-light text-[#989898]"
              }`}
            >
              ${referral.reward.amount}
            </span>
            {referral.reward.credit && (
              <img className="h-10 w-10 ml-1" src={Popper} alt="popper" />
            )}
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Referral;
