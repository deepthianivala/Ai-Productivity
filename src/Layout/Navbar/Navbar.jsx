import React from "react";
import Searchlogo from "../../assets/searchlogo.png";
import Notificationslogo from "../../assets/notifications.png";

const Navbar = ({ notesdummydata, setnotesdata }) => {
  //  {
  //     id: 1,
  //     title: "Project Apollo: Q3 Roadmap",
  //     summary:
  //       "Focus on scaling the infrastructure to support 1M+ users. Priorities include Database Sharding, Edge Functions implementation, and a complete UI overhaul for the mobile app.",
  //     tags: ["WORK", "STRATEGY"],
  //     aiSummarized: true,
  //   },
  const handlenewnote = () => {
    // onclick handler for the "New Note" button. When the button is clicked, this function will be executed.
    console.log("new note added");
    const freshnote = {
      id: notesdummydata.length + 1,
      title: "New Note",
      summary: "This is a new note. Click to edit.",
      tags: ["#Mynew note"],
      aiSummarized: false,
    };

    setnotesdata([...notesdummydata, freshnote]); //spread operator is used to create a new array that includes all the existing notes from notesdummydata, followed by the new note (freshnote). This way, we are not mutating the original array but creating a new one with the added note.
  };

  return (
    <div className=" p-4 flex justify-around ">
      <div className="border border-[#d1ded0] w-[75%] p-2 rounded-xl flex">
        <img src={Searchlogo} />
        <input className="ml-5 w-full outline-none" placeholder="Search..." />
      </div>
      <div
        onClick={handlenewnote}
        className="bg-[#e07a5f] w-[12%] rounded-xl text-white font-inter flex justify-center items-center"
      >
        + New Note
      </div>

      <div className="w-[5%] flex justify-center items-center">
        <img src={Notificationslogo} />
      </div>
    </div>
  );
};
export default Navbar;
