import { useState } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);
  async function fetchingfn(...args) {
    try {
      setLoding(true);
      const fetching = await fetch(api);
      const response = await fetching.json();
      setData(response)
      console.log(data);
    } catch (error) {
      setLoding(false);
      setError(error);
      console.log(error);
    } finally {
      setLoding(false);
    }
  }

  return { data, loding, error, fetchingfn };
};

export default useFetch;
