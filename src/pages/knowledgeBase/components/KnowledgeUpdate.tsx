import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function KnowledgeUpdate() {
  return (
    <div className="px-6 md:px-10 py-10 ">
      <div className="border-2 relative w- mt-20 flex flex-col md:flex-row space-y-4 md:space-x-10 border-blue-100 p-5 ms:p-10 rounded md:justify-between ">
        <div className="space-y-5 flex-1 text-left my-12">
          <p className="text-black text-3xl font-bold">Keep up to date</p>
          <p className="text-black text-lg">
            Join the CIS mailing list for the very latest industry news, offers
            and IT expertise.
          </p>
        </div>

        <div className="flex flex-col  items-center md:px-0 md:flex-row mb-10 space-x-3 ">
          <input
            type="text"
            placeholder="Email Address"
            className="flex-1 py-3 px-4  placeholder:text-black rounded-full bg-gray-200 text-black outline-blue-400"
          />
          <div className="rounded-full mt-3 p-3 border-2   cursor-pointer border-blue-400">
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
}
