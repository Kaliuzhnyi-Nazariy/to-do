"use client";

import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [showdropdown, isShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        isShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="grid row-start-1 row-end-3 justify-self-end self-center w-20 relative"
    >
      <button
        className="text-[12px] text-center items-center w-20 h-[30px] bg-[var(--darkpurple)] rounded-[12px] "
        onClick={() => isShowDropdown(!showdropdown)}
      >
        username ▼
      </button>
      {showdropdown ? (
        <ul className="w-[150px] h-[90px] bg-[var(--darkpurple)] absolute top-[30px] right-[11px] z-2">
          <li className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white">
            <button>Update</button>
          </li>
          <li className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white">
            <button>Log out</button>
          </li>
          <li className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white">
            <button>Delete</button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
