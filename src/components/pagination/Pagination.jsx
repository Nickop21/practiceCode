import React, { useEffect, useState } from "react";
import Card from "./Card";
import useApi from "./useApi";
import Pages from "./Pages";

const Pagination = () => {
  const { resultData, error, loading } = useApi();
  const [currentPage, setCurrentPage] = useState(0);
  const Page_Size = 6;
  const totalProduct = resultData?.limit;
  const totalNumberOfPages = Math.ceil(totalProduct / Page_Size);
  const startIndex = currentPage * Page_Size;
  const EndIndex = startIndex + Page_Size;


  function pageChange(pagenum) {
    setCurrentPage(pagenum);
  }

  return (
    <div className="text-white">
      {totalNumberOfPages > 0 && (
        <Pages
          totalPages={totalNumberOfPages}
          pageChange={pageChange}
          currPage={currentPage}
        />
      )}
      <div className=" flex flex-row flex-wrap justify-between ">
        {resultData?.recipes?.slice(startIndex, EndIndex)?.map((data) => (
          <div key={data.name} className="w-[48%] md:w-[30%] lg:w-[23%] ">
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
