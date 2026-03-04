import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Display from "../Display/Display";
import Noteholder from "../../Component/Noteholder";

const Main = () => {
  const [notedata, setnotesdata] = useState([
    {
      id: 1,
      title: "Project Apollo: Q3 Roadmap",
      summary:
        "Focus on scaling the infrastructure to support 1M+ users. Priorities include Database Sharding, Edge Functions implementation, and a complete UI overhaul for the mobile app.",
      tags: ["WORK", "STRATEGY"],
      aiSummarized: true,
    },
    {
      id: 2,
      title: "Customer Retention Plan",
      summary:
        "Analyze churn patterns and introduce loyalty programs. Plan includes personalized notifications and targeted discounts.",
      tags: ["MARKETING", "ANALYTICS"],
      aiSummarized: true,
    },
    {
      id: 3,
      title: "AI Productivity Tool",
      summary:
        "Develop an internal AI tool that summarizes long documents and extracts key action points for teams.",
      tags: ["AI", "PRODUCTIVITY"],
      aiSummarized: true,
    },
    {
      id: 3,
      title: "AI Productivity Tool",
      summary:
        "Develop an internal AI tool that summarizes long documents and extracts key action points for teams.",
      tags: ["AI", "PRODUCTIVITY"],
      aiSummarized: true,
    },
  ]);
  return (
    <div className="border border-red-900 ml-60 w-full bg-[#fcfaf7] min-h-screen">
      <Navbar notesdummydata={notedata} setnotesdata={setnotesdata} />
      <div className="p-8 flex flex-col">
        <Display />
        <Noteholder notesdummydata={notedata} />
      </div>
    </div>
  );
};

export default Main;
