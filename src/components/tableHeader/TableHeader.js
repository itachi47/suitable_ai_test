import React from "react";
import "./table-header.css";

const TableHeader = () => {
  const headerItem = [
    "Candidate",
    "Referred",
    "Interviewed",
    "Hired",
    "Joined",
    "Reward",
  ];
  return (
    <ol className="hidden md:flex items-center header-container">
      {headerItem.map((item, idx) => {
        return (
          <li class="flex w-full items-center justify-around">
            <span class="header-item">{item}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default TableHeader;
