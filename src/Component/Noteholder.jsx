import react, { useState } from "react";

const Noteholder = ({ notesdummydata }) => {
  return (
    <div className=" grid grid-cols-3 gap-4">
      {notesdummydata &&
        notesdummydata.map((note) => (
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
