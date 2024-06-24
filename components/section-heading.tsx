import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold capitalize mb-10 text-center pt-20">
      {children}
    </h2>
  );
}
