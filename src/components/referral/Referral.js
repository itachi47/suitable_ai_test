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
    <div className={`py-3 ${gray && "bg-gray-100"} rounded-sm `}>
      <ul className="md:flex">
        <li className="md:w-1/6">
          <div className="md:stepper-solid">2</div>
          <p>text</p>
        </li>
        <li className="md:w-1/6 flex justify-center md:flex-col">
          <div className="md:flex md:justify-end md:items-center stepper-solid ">
            <img src={Check} alt="check" className="" />
          </div>
          <p className="md:hidden">text</p>
        </li>
        <li className="md:w-1/6 flex justify-center md:flex-col">
          <div className="md:flex md:justify-end md:items-center stepper-solid stepper-solid-before">
            <img src={Check} alt="check" className="" />
          </div>
          <p className="md:hidden">text</p>
        </li>
        <li className="md:w-1/6 flex justify-center md:flex-col">
          <div className="md:flex md:justify-end md:items-center stepper-solid stepper-solid-before">
            <img src={Check} alt="check" className="" />
          </div>
          <p className="md:hidden">text</p>
        </li>
        <li className="md:w-1/6 flex justify-center md:flex-col">
          <div className="md:flex md:justify-end md:items-center stepper-solid stepper-solid-before">
            <img src={Check} alt="check" className="" />
          </div>
          <p className="md:hidden">text</p>
        </li>
        <li className="md:w-1/6 flex justify-center md:flex-col">
          <div className="md:flex md:justify-end md:items-center stepper-solid">
            <img src={Check} alt="check" className="" />
          </div>
          <p className="md:hidden">text</p>
        </li>
      </ul>
    </div>
  );
};

export default Referral;
