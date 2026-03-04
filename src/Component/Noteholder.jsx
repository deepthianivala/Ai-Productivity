import react, { useState } from "react";

const Noteholder = () => {
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
    <div className=" grid grid-cols-3 gap-4">
      {notedata &&
        notedata.map((note) => (
          <div className="rounded-md bg-white shadow-md w-full p-4">
            <div className="text-md font-semibold font-inter">{note.title}</div>
            <div className="mt-4 text-sm text-gray-400">{note.summary}</div>
            <div className="flex mt-4">
              {note.tags.map((tag, idx) => {
                return (
                  <div
                    className={`font-interborder text-xs rounded-md p-2     ${idx > 0 ? "ml-2" : "bg-[#fcf2ef]  border-[#fcf2ef]"} `}
                  >
                    #{tag}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
};
export default Noteholder;
