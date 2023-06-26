import React from "react";
import TinderCard from "react-tinder-card";
import { AiFillCheckCircle } from "react-icons/ai";
import { IconButton } from "../components";

const DatingCards = ({ peoples }) => {
  return (
    <div className="flex flex-1 justify-center max-w-full relative h-full">
      {peoples?.map((people) => (
        <TinderCard
          key={people.name}
          preventSwipe={["up", "down"]}
          className="absolute w-full h-full"
        >
          <div className="bg-primary h-full w-full rounded-xl shadow p-2">
            <div
              className="bg-center relative bg-cover h-[70%] rounded-xl"
              style={{ backgroundImage: `url(${people.url})` }}
            >
              <div className="absolute top-3 right-3 bg-primary font-normal text-sm text-white/70 rounded-lg px-3 py-0.5">
                {people.distance} {people.distanceType}{" "}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 mt-3 px-2">
              <div className="flex gap-2 items-center">
                <h2 className="text-gray-100 text-xl">{people.name}</h2>
                <AiFillCheckCircle className="text-light-blue text-xl" />
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar">
                <div className="rounded-lg text-rose-300 font-normal text-sm px-3 py-1 border border-rose-400">
                  {" "}
                  Acting{" "}
                </div>
                <div className="rounded-lg text-rose-300 font-normal text-sm px-3 py-1 border border-rose-400">
                  {" "}
                  Singing{" "}
                </div>
                <div className="rounded-lg text-rose-300 font-normal text-sm px-3 py-1 border border-rose-400">
                  {" "}
                  Painting{" "}
                </div>
              </div>
              <p className="flex flex-wrap text-xs text-gray-400">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                vel quo minima aperiam.{" "}
              </p>

              <div className="flex justify-between w-[70%] mx-auto">
                <IconButton icon="AiOutlineClose" className="h-14 w-14 bg-slate-900 text-white hover:bg-slate-600" iconClass="text-2xl" />
                <IconButton icon="AiTwotoneBook" className="h-14 w-14 bg-slate-900 text-white hover:bg-slate-600" iconClass="text-2xl"  />
                <IconButton icon="AiFillHeart" className="h-14 w-14 bg-slate-900 text-white hover:bg-slate-600" iconClass="text-2xl"  />
              </div>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default DatingCards;
