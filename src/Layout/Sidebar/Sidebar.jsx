import React from "react";
import applogo from "../../assets/logo.png";
import "./Sidebar.css";
import allnotes from "../../assets/Noteslogo.png";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen fixed left-0 top-0 bg-[#e8f0e6] p-4">
      <div className="flex border-b border-[#818693] mt-3 ">
        <img src={applogo} />
        <div>
          <div className="font-inter font-bold text-[#3d405b]">SMART NOTES</div>
          <div className="font-inter text-sm text-[#818693] tracking-[2px] font-bold">
            AI Productivity
          </div>
        </div>
      </div>

      <div className="flex shadow-md p-2 bg-[#f4f7f2] rounded-lg items-center font-inter mt-4">
        <img src={allnotes} className="w-4 h-5 ml-4" />
        <div className="ml-4 "> All Notes</div>
      </div>

      <div>z</div>
    </div>
  );
};

export default Sidebar;
