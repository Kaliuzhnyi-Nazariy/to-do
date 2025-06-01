import React from "react";

export default function HeaderField({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-[20px] mb-[10px] capitalize md:text-[32px] md:h-10">
      {children}
    </h3>
  );
}
