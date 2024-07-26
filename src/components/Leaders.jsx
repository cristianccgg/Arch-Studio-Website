import React, { useEffect, useState } from "react";
import leadersJson from "/public/leaders.json";

export const Leaders = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    setLeaders(leadersJson.leaders);
  }, []);

  return (
    <div className="mt-[55px] xl:mt-0 xl:w-[730px] flex flex-col gap-[79px] sm:grid sm:grid-cols-2 sm:gap-2">
      {leaders.map((leader) => (
        <div key={leader.id} className="space-y-3 sm:mb-20 w-full">
          <img className="w-full" src={leader.avatar} alt="avatar" />
          <div>
            <h1 className="font-bold text-2xl">{leader.name}</h1>
            <p className="text-xs">{leader.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
