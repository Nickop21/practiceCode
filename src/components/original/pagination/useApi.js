import { useEffect, useState } from "react";

const useApi = (searchText = "", type = "default") => {
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cachData, setCacheData] = useState({});

  const fetchData = async () => {
    setLoading(true);
    const url =
      type !== "search"
        ? "https://dummyjson.com/recipes"
        : "https://dummyjson.com/recipes/search?q" + searchText;
    if (!searchText.trim() && type == "search") {
      setResultData(null);
      return null;
    }
    if (cachData[searchText] && type == "search") {
      setResultData(cachData[searchText]);
      return;
    }

    try {
      const response = await fetch(url);
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

  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  return { resultData, error, loading };
};

export default useApi;
