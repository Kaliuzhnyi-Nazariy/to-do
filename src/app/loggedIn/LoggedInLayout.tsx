"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../redux/auth/selectors";
import { useRouter } from "next/navigation";

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  const isLoggedInStatus = useSelector(isLoggedIn);
  const route = useRouter();

  useEffect(() => {
    if (isLoggedInStatus) {
      return route.push("/todo");
    } else {
      return route.push("/auth/signin");
    }
  }, [isLoggedInStatus, route]);

  return <>{children}</>;
};

export default LoggedInLayout;
