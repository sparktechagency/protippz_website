"use client";

import { Pagination } from "antd";
import { useRouter } from "next/navigation";

interface PaginationInterface {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}
const PaginationComponents = ({
  paginationData,
}: {
  paginationData: PaginationInterface;
}) => {
  const router = useRouter();

  return (
    <Pagination
      className="my-3 mb-10"
      showSizeChanger={false}
      total={paginationData?.total || 0}
      pageSize={paginationData?.limit || 10}
      onChange={(page) => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.set("page", page?.toString());
        router.replace(`?${currentParams?.toString()}`, { scroll: false });
      }}
    />
  );
};

export default PaginationComponents;
