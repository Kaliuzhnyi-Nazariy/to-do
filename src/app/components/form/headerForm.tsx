import React from "react";

export default function HeaderField({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="text-[20px] mb-[15px] capitalize">{children}</h3>;
}
