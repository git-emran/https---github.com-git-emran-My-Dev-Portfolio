'use client'

import SubpageHeader from "@/components/subpage-header";
import HoverCard from "@/components/ui/hoverCard";
import React from "react";

function OtherProjects() {
  return (
    <div className="min-h-screen sm:top-20 flex flex-col">
      <SubpageHeader
        title="A Glimpse into the Years"
        subtitle="How it all got started"
      />
      {/* Start of the Body   */}
      <div>

        <HoverCard imageSrc="/genie2.gif" altText="Hover card Image" title="MarketTime B2B" subtitle="Merging 2 Products to create a brand new experience" />

      </div>
     
    </div>
  );
}

export default OtherProjects;
