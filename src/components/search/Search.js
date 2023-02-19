import React from "react";
import "./search.css";

const Search = ({ referrals, setReferrals }) => {
  const handleChange = (event) => {
    const newData = referrals.filter((referral) =>
      referral.candidate.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setReferrals(newData);
  };
  return (
    <div className="search-container">
      <input
        className="input-box"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
