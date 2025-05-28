"use client";

import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { logout } from "@/app/redux/auth/operations";
import { Modal } from "../../../components/modal/Modal";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { UpdateUserData } from "../../form/form/updateUserForm";
import { getMe } from "@/app/redux/user/operations";
import { useSelector } from "react-redux";
import { email, username } from "@/app/redux/user/selectors";

export default function Dropdown() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const userName = useSelector(username);
  const userEmail = useSelector(email);

  const [showdropdown, isShowDropdown] = useState(false);
  const [openUpdModal, isOpenUpModal] = useState(false);

  const openUpdModalHandler = () => {
    isOpenUpModal(true);
  };
  const closeUpdModalHandler = () => {
    isOpenUpModal(false);
  };

  const router = useRouter();

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
        {userName} ▼
      </button>
      {showdropdown ? (
        <ul className="w-[150px] h-[90px] bg-[var(--darkpurple)] absolute top-[30px] right-[11px] z-2">
          <li
            className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white"
            onClick={() => openUpdModalHandler()}
          >
            <button>Update</button>
          </li>
          <li
            className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white"
            onClick={async () => {
              await dispatch(logout());
              router.push("/auth/signin");
            }}
          >
            <button>Log out</button>
          </li>
          <li className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white">
            <button>Delete</button>
          </li>
        </ul>
      ) : (
        ""
      )}
      <Modal isOpen={openUpdModal} onClose={closeUpdModalHandler}>
        <UpdateUserData
          username={userName}
          userEmail={userEmail}
          onClose={closeUpdModalHandler}
        />
      </Modal>
    </div>
  );
}
