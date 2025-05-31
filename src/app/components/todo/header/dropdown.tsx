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
import DeleteModal from "../../deleteMessage/DeleteModal";

export default function Dropdown() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const userName = useSelector(username);
  const userEmail = useSelector(email);

  const [showdropdown, isShowDropdown] = useState(false);
  const [openUpdModal, isOpenUpModal] = useState(false);
  const [openDelModal, isOpenDelModal] = useState(false);

  const openUpdModalHandler = () => {
    isOpenUpModal(true);
  };
  const closeUpdModalHandler = () => {
    isOpenUpModal(false);
  };

  const openDelModalHandler = () => {
    isOpenDelModal(true);
  };
  const closeDelModalHandler = () => {
    isOpenDelModal(false);
  };

  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMenuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        isShowDropdown(false);
        setMenuClicked(false);
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
      className="grid row-start-1 row-end-3 justify-self-end self-center w-20 relative md:absolute md:right-[80px]"
    >
      <button
        className={`text-[12px] text-center items-center w-20 h-[30px] rounded-[12px] md:w-[140px] md:h-[50px] md:text-[20px] flex justify-around ${
          isMenuClicked
            ? " bg-white text-[var(--darkpurple)] "
            : " bg-[var(--darkpurple)] "
        }`}
        onClick={() => {
          isShowDropdown(!showdropdown);
          setMenuClicked(!isMenuClicked);
        }}
      >
        <p>{userName}</p> <p>▼</p>
      </button>
      {showdropdown ? (
        <ul className="w-[150px] h-[90px] bg-[var(--darkpurple)] absolute top-[30px] right-[11px] z-2 md:w-[180px] md:h-[120px] md:top-[50px] md:right-[-50px]">
          <li
            className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white md:h-10 md:flex md:items-center"
            onClick={() => openUpdModalHandler()}
          >
            <button>Update</button>
          </li>
          <li
            className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white md:h-10 md:flex md:items-center"
            onClick={async () => {
              await dispatch(logout());
              router.push("/auth/signin");
            }}
          >
            <button>Log out</button>
          </li>
          <li
            className="px-[10px] active:text-[var(--darkpurple)] active:bg-white hover:text-[var(--darkpurple)] hover:bg-white md:h-10 md:flex md:items-center"
            onClick={() => openDelModalHandler()}
          >
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
      <Modal isOpen={openDelModal} onClose={closeDelModalHandler} isDel={true}>
        <DeleteModal handleCloseModal={closeDelModalHandler} />
      </Modal>
    </div>
  );
}
