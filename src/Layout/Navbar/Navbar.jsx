import React from "react";
import Searchlogo from "../../assets/searchlogo.png";
import Notificationslogo from "../../assets/notifications.png";

const Navbar = () => {
  return (
    <div className=" p-4 flex justify-around ">
      <div className="border border-[#d1ded0] w-[75%] p-2 rounded-xl flex">
        <img src={Searchlogo} />
        <input className="ml-5 w-full outline-none" placeholder="Search..." />
      </div>
      <div className="bg-[#e07a5f] w-[12%] rounded-xl text-white font-inter flex justify-center items-center">
        + New Note
      </div>

      <div className="w-[5%] flex justify-center items-center">
        <img src={Notificationslogo} />
      </div>
    </div>
  );
};
export default Navbar;
