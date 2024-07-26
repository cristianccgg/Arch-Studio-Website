import React, { useEffect, useState } from "react";
import json from "/public/portfolio.json";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setProjects(isMobile ? json.mobile : json.desktop);
  }, [isMobile]);

  return (
    <div>
      <div className="gap-[24px] flex flex-col lg:grid lg:grid-cols-3 mt-[48px] text-white px-10 sm:px-0 relative">
        <div className="hidden sm:flex gap-5 text-lightGrey items-center rotate-90 absolute -top-5 -left-60">
          <hr className="w-[104px]" />
          <h1 className="tracking-[18px]">PORTFOLIO</h1>
        </div>
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="relative h-[311px] lg:h-[560px] sm:h-[240px] bg-no-repeat bg-cover bg-center flex flex-col justify-end"
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
        {projects.map((projectDesk) => {
          return (
            <div
              key={projectDesk.id}
              className="hidden lg:flex relative h-[311px] lg:h-[560px] sm:h-[240px] bg-no-repeat bg-cover content-end flex-col justify-end"
              style={{ backgroundImage: `url(${projectDesk.image})` }}
            >
              {/* Superposición */}
              <div className="absolute inset-0 bg-green-950 contrast-200 bg-opacity-20 z-10"></div>

              {/* Contenido */}
              <div className="relative z-20 w-[211px] p-[24px]">
                <h1 className="text-[32px] font-bold">{projectDesk.title}</h1>
                <p className="text-[18px] text-nowrap">{projectDesk.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
