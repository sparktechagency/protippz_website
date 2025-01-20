import Heading from "@/components/Shared/Heading";
import Link from "next/link";
import React from "react";

const StorePage = () => {
  return (
    <div>
      <Heading headingText="STORE" subHeadingText="Coming Soon" />
      <Link
        href={`https://www.protippz.store`}
        className="px-4 py-1 bg-blue-500 rounded-md text-white"
      >
        see more
      </Link>
    </div>
  );
};

export default StorePage;
