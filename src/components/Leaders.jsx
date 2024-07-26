import React, { useEffect, useState } from "react";
import leadersJson from "/public/leaders.json";
import linkedinIcon from "/public/images/icons/icon-linkedin.svg";
import twitterIcon from "/public/images/icons/icon-twitter.svg";

export const Leaders = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    setLeaders(leadersJson.leaders);
  }, []);

  return (
    <div className="mt-[55px] xl:mt-0 xl:w-[730px] flex flex-col gap-[79px] sm:grid sm:grid-cols-2 sm:gap-2">
      {leaders.map((leader) => (
        <div key={leader.id} className="space-y-3 sm:mb-20 w-full">
          <div className="relative group w-full">
            <img className="w-full " src={leader.avatar} alt="avatar" />
            <div className="absolute inset-0 bg-black bg-opacity-30 gap-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                className="filter invert"
                src={linkedinIcon}
                alt="linkedin-icon"
              />
              <img
                className="filter invert"
                src={twitterIcon}
                alt="linkedin-icon"
              />
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl">{leader.name}</h1>
            <p className="text-xs">{leader.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
