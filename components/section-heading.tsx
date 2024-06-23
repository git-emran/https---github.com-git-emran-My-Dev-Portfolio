import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold capitalize mb-2 text-center pt-40">
      {children}
    </h2>
  );
}
