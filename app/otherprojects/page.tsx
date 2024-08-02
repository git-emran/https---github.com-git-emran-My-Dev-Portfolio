'use client'

import SubpageHeader from "@/components/subpage-header";
import { ExpandableCardDemo } from "@/components/ui/expandableCard";
import HoverCard from "@/components/ui/hoverCard";
import React from "react";

function OtherProjects() {
  return (
    <div className="min-h-screen sm:top-20 flex flex-col">
    
      {/* Start of the Body   */}
     <section>
      <h1 className="font-bold text-4xl flex items-center justify-center mt-20">
        Other Fun Projects That I worked On
      </h1>
     </section>
      <section className="mt-20 flex">
<ExpandableCardDemo />
      </section>
      
  
    </div>
  );
}

export default OtherProjects;
