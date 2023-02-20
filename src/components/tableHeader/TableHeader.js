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
    <ol className="hidden md:flex my-5 ml-4">
      {headerItem.map((item, idx) => {
        return (
          <li class="md:w-1/6">
            <span class="header-item">{item}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default TableHeader;
