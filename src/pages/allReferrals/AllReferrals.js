import React from "react";
import "./all-referrals.css";
import {
  MobileReferral,
  Referral,
  Search,
  TableHeader,
  Title,
} from "../../components";
import Money from "../../images/money.svg";
import { useMediaQuery } from "react-responsive";

const dummy_data = [
  {
    candidate: {
      name: "Anmol Mahajan",
      profession: "Sr. Engineer",
    },
    status: "joined",
    reward: {
      amount: 20000,
      credit: false,
    },
    stagesCompleted: [
      { stageName: "satge1", date: "10 August2021", status: true },
      { stageName: "satge2", date: "10 August2021", status: true },
      { stageName: "satge3", date: "10 August2021", status: true },
      { stageName: "satge3", date: "10 August2021", status: false },
      { stageName: "satge3", date: "10 August2021", status: false },
    ],
    active: true,
  },
  {
    candidate: {
      name: "Bob Mahajan",
      profession: "Sr. Engineer",
    },
    status: "interviewed",
    reward: {
      amount: 20000,
      credit: false,
    },
    stagesCompleted: [
      { stageName: "satge1", date: "10 August2021", status: true },
      { stageName: "satge2", date: "10 August2021", status: true },
      { stageName: "satge3", date: "10 August2021", status: true },
      { stageName: "satge3", date: "10 August2021", status: true },
    ],
    active: true,
  },
  {
    candidate: {
      name: "Anmol Mahajan",
      profession: "Sr. Engineer",
    },
    status: "joined",
    reward: {
      amount: 20000,
      credit: true,
    },
    stagesCompleted: [
      { stageName: "satge1", date: "10 August2021", status: true },
      { stageName: "satge2", date: "10 August2021", status: true },
      { stageName: "satge3", date: "10 August2021", status: false },
    ],
    active: true,
  },
  {
    candidate: {
      name: "Anmol Mahajan",
      profession: "Sr. Engineer",
    },
    status: "hired",
    reward: {
      amount: 20000,
      credit: false,
    },
    stagesCompleted: [
      { stageName: "satge1", date: "10 August2021", status: true },
      { stageName: "satge2", date: "10 August2021", status: false },
      { stageName: "satge3", date: "10 August2021", status: false },
    ],
    active: false,
  },
  {
    candidate: {
      name: "Anmol Mahajan",
      profession: "Sr. Engineer",
    },
    status: "referred",
    reward: {
      amount: 20000,
      credit: false,
    },
    stagesCompleted: [
      { stageName: "satge1", date: "10 August2021", status: true },
      { stageName: "satge2", date: "10 August2021", status: false },
      { stageName: "satge3", date: "10 August2021", status: false },
    ],
    active: true,
  },
];

const AllReferrals = () => {
  const headerItem = [
    "Candidate",
    "Referred",
    "Interviewed",
    "Hired",
    "Joined",
    "Reward",
  ];

  const [referrals, setReferrals] = React.useState(dummy_data);
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <div className="h-[352px] bg-[#63D35B]">
        <div className="container mx-auto">
          <Title description="Referral Status" icon={Money} />
          <Search referrals={dummy_data} setReferrals={setReferrals} />
          <div className="referral-container">
            {!isMobile && <TableHeader />}
            {referrals.map((referral, idx) => {
              return isMobile ? (
                <MobileReferral
                  referral={referral}
                  gray={(idx & 1) == 0 ? true : false}
                />
              ) : (
                <Referral
                  key={idx}
                  referral={referral}
                  gray={(idx & 1) == 0 ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllReferrals;
