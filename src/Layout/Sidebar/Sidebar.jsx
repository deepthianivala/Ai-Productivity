import React from "react";
import applogo from "../../assets/logo.png";
import "./Sidebar.css";
import allnotes from "../../assets/Noteslogo.png";
import worklogo from "../../assets/work.png";
import personallogo from "../../assets/personal.png";
import studylogo from "../../assets/study.png";
import idealogo from "../../assets/idea.png";
import importantlogo from "../../assets/important.png";
import archivelogo from "../../assets/archive.png";
import profilelogo from "../../assets/profile.png";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen fixed left-0 top-0 bg-[#e8f0e6] p-4 flex flex-col justify-between">
      <div>
        <div className="flex border-b border-[#818693] mt-3 ">
          <img src={applogo} />
          <div>
            <div className="font-inter font-bold text-[#3d405b]">
              SMART NOTES
            </div>
            <div className="font-inter text-sm text-[#818693] tracking-[2px] font-bold">
              AI Productivity
            </div>
          </div>
        </div>

        <div className="flex shadow-md p-2 bg-[#f4f7f2] rounded-lg items-center font-inter mt-4">
          <img src={allnotes} className="w-4 h-5 ml-4" />
          <div className="ml-4 "> All Notes</div>
        </div>

        <div>
          <div className="font-inter text-sm text-[#818693] tracking-[2px] font-bold mt-7 ml-2">
            CATEGORIES
          </div>
          <div className="flex mt-4 font-inter items-center">
            <img src={worklogo} className="w-5 h-5 ml-2" />
            <div className="ml-5"> Work</div>
            <div className="text-sm rounded-full bg-[#e7e4d8] text-[#e07a5f] px-2 ml-19 border-1">
              12
            </div>
          </div>

          <div>
            <div className="flex mt-4 font-inter items-center">
              <img src={personallogo} className="w-5 h-5 ml-2" />
              <div className="ml-5"> Personal </div>
              <div className="text-sm rounded-full bg-[#d7ded8] text-[#3d405b] px-2 ml-13 border-1">
                8
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-4 font-inter items-center">
              <img src={studylogo} className="w-4 h-4 ml-2" />
              <div className="ml-5"> Study </div>
            </div>
          </div>

          <div className="flex mt-4 font-inter items-center">
            <img src={idealogo} className="w-4 h-4 ml-2" />
            <div className="ml-5"> Idea </div>
          </div>

          <div>
            <div className="font-inter text-sm text-[#818693] tracking-[2px] font-bold mt-7 ml-2">
              SYSTEM
            </div>
            <div className="flex mt-4 font-inter items-center">
              <img src={importantlogo} className="w-5 h-5 ml-2" />
              <div className="ml-5"> Important </div>
            </div>
            <div className="flex mt-4 font-inter items-center">
              <img src={archivelogo} className="w-5 h-5 ml-2" />
              <div className="ml-5"> Archive</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between shadow-md p-2 bg-[#f4f7f2] rounded-lg  font-inter]">
        <img src={profilelogo} className="w-6h-4 ml-2" rounded />

        <div>
          <div> Alex Rivera</div>
          <div className="text-sm text-[#818693] font-bold">
            PRO SUBSCRIPTION
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
