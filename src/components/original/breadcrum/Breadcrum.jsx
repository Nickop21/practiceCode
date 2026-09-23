import React, { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import BreadcrumComponent from "./BreadcrumComponent";

const Breadcrum = () => {
//   const [dataResponse, setDataResponse] = useState(null);
  const { data, error, loding, fetchingfn } = useFetch(
    "https://dummyjson.com/product",
  );

  useEffect(() => {
    fetchingfn();
    
  }, []);

  return  loding?(<Loader/>):(
    <>
    <BreadcrumComponent/>
    <div className="flex flex-wrap w-full">
      {data?.products.slice(0,10)?.map((data) => (
        <Link to={`/product/${data.id}`} className="bg-white w-[27%] rounded p-10 m-2 mb-8 " key={data.id} >
        
        {/* <div > */}
          <img src={data.images[0]} alt="" />
          <span className="text-black line-clamp-1">{data.title}</span>
        {/* </div> */}
        </Link>
      ))}
    </div>
    </>
  );
};

export default Breadcrum;
