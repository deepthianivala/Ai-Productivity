import React from "react";
import Navbar from "../Navbar/Navbar";
import Display from "../Display/Display";
import Noteholder from "../../Component/Noteholder";

const Main = () => {
  return (
    <div className="border border-red-900 ml-60 w-full bg-[#fcfaf7] min-h-screen">
      <Navbar />
      <div className="p-8 flex flex-col">
        <Display />
        <Noteholder />
      </div>
    </div>
  );
};

export default Main;
