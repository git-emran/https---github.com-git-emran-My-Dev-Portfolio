import React from "react";

const YouTubeEmbed = ({ embedId }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        width="853"
        height="480"
        src={`https://youtu.be/W62B-Zmsm2E${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      />
    </div>
  );
};

export default YouTubeEmbed;
