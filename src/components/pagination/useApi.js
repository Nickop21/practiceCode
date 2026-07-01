import { useEffect, useState } from "react";

const useApi = (searchText) => {
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cachData, setCacheData] = useState({});

  const fetchData = async () => {
    setLoading(true);
    if (!searchText.trim()) {
      setResultData(null);
      return null;
    }
    if (cachData[searchText]) {
      console.log("caching", searchText);

      setResultData(cachData[searchText]);
      return;
    }

    try {
      const response = await fetch(
        "https://dummyjson.com/recipes/search?q=" + searchText,
      );
      const json = await response.json();
      setResultData(json);
      setCacheData((prev) => ({
        ...prev,
        [searchText]: json,
      }));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    console.log(searchText);
    console.log(resultData);
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  return { resultData, error, loading };
};

export default useApi;
