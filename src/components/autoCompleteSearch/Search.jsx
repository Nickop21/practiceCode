import React, { useEffect, useState } from "react";
import useApi from "../pagination/useApi";
import "./search.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const { resultData, error, loading } = useApi(debouncedValue,"search");

  function onChangeData(e) {
    setSearchText(e.target.value);
  }
  useEffect(() => {
    const timer = setTimeout(()=>{setDebouncedValue(searchText)}, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (

    
    <div className="bg-gray-950 text-white">
      <input
        type="text"
        className=" input-search bg-gray-900 "
        placeholder="Search the web"
        value={searchText}
        onChange={(e) => onChangeData(e)}
      />
      {
          resultData?.recipes.length==0 || !resultData ? <div className="p-4 rounded-b-2xl">No Data</div> :
          
          <div className="search-result bg-gray-900">
        {resultData?.recipes?.map((data) => (
          <div className="result-child" key={data.id}>
            <p>{data?.name}</p>
            <div className="side-banner"></div>
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default Search;
