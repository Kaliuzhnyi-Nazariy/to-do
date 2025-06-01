"use client";

import React from "react";
import Button from "../form/button";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { deleteUser } from "@/app/redux/user/operations";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { userLoading } from "@/app/redux/user/selectors";

const DeleteModal = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isLoading = useSelector(userLoading);

  return (
    <div className="h-[200px] w-full text-center flex flex-col justify-center md:h-[300px]">
      <h3 className="text-[24px] uppercase md:text-5xl">Delete account</h3>
      <p className="md:text-[32px] md:mb-[60px]">
        If you delete an account all your to-do’s will be lost!
      </p>
      <div className="flex justify-around">
        <Button
          delModal={true}
          additionalStyles="text-[16px] bg-[var(--markcolor)] w-[90px] h-[30px] md:w-[250px] md:h-[60px]"
          onClick={async () => {
            dispatch(deleteUser());
            handleCloseModal();
            router.push("/auth/signup");
          }}
        >
          {isLoading ? "Loading..." : "Delete"}
        </Button>
        <Button
          delModal={true}
          additionalStyles="text-[16px] bg-[var(--btnforcancel)] w-[90px] h-[30px] md:w-[250px] md:h-[60px]"
          onClick={() => handleCloseModal()}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteModal;
