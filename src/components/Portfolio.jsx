import React, { useEffect, useState } from "react";
import json from "/public/portfolio.json";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(json.mobile);
  }, []);

  return (
    <div>
      <div className="gap-[24px] flex flex-col mt-[48px] text-white px-10">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="relative h-[311px] bg-no-repeat bg-cover content-end"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {/* Superposición */}
              <div className="absolute inset-0 bg-green-950 contrast-200 bg-opacity-20 z-10"></div>

              {/* Contenido */}
              <div className="relative z-20 w-[200px] p-[24px]">
                <h1 className="text-4xl text-nowrap font-bold">
                  {project.title}
                </h1>
                <p className="text-2xl text-nowrap">{project.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
