import Heading from "@/components/Shared/Heading";
import Link from "next/link";
import React from "react";

const StorePage = () => {
  return (
    <div>
      <Heading headingText="STORE" subHeadingText="Coming Soon" />
      <Link
        target="_blank"
        href={`https://www.protippz.store`}
        className="px-6 py-3 bg-[#053697] rounded-md text-white"
      >
        see more
      </Link>
    </div>
  );
};

export default StorePage;
