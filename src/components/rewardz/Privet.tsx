"use client";
import { useContextData } from "@/provider/ContextProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Private({ children }) {
  const router = useRouter();
  const user = useContextData();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return children;
}

export default Private;
