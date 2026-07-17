import React, { useEffect, useState } from "react";
import Observer from "./Observer";
import "./infinite.css";

const Infinite = () => {
  const [data, setData] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [loading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);

    try {
      const imgData = await fetch(
        `https://picsum.photos/v2/list?page=${pageno}&limit=3`,
      );

      const response = await imgData.json();

      setData((prev) => [...prev, ...response]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
    console.log(data);
  }, [pageno]);

  return (
    <div>
      <Observer Imagesdata={data} setPageno={setPageno} />
    </div>
  );
};

export default Infinite;
