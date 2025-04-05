"use client";

import BackToHome from "./back-to-home";
import { ProjectNavigation } from "./nextproject";

interface SubpageHeaderProps {
  title: string;
  subtitle: string;
}

const SubpageHeader: React.FC<SubpageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div>
      <header className="relative w-full h-96">
        {/* Back Button */}
        <BackToHome />
        <div className="absolute mt-14 top-4 left-4 mb-12">
          <ProjectNavigation />
        </div>
        {/* Header bg div styling */}
        <div className=" items-center flex inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 mt-6 flex items-center justify-center">
          <div className="flex basis-full flex-col p-1 items-center tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
            <h3 className="max-w-2xl !pb-2 flex !m-0 font-semibold text-center text-5xl text-slate-700">
              {title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">{subtitle}</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SubpageHeader;
