import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ErrorComp(props: any) {
  return (
    <div className="mt-2 bg-[var(--errbg)] border-2 border-[var(--markcolor)] px-5 rounded-[25px] w-[240px]">
      <p>{props.children}</p>
    </div>
  );
}
