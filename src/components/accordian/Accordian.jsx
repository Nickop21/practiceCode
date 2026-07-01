import React, { useState } from "react";
import "./accordian.css";

const Accordian = () => {
  const [activeAccodianIndex, setActiveAccodianIndex] = useState(0);
  const accordianData = [
    {
      title: "What is the accordion used for?",
      description:
        "The accordion is a portable, box-shaped wind instrument used to play melodies, harmonies, and basslines. It produces sound by pumping air with a folding bellows across internal metal reeds. Because it is self-contained and highly versatile, it is a staple in various musical traditions and solo performances. ",
    },
    {
      title: "Is accordion a mnc?",
      description:
        "Accordion is a boutique financial and technology consulting firm that specializes specifically in private equity. Founded in 2009 and headquartered in New York City, the firm primarily operates within the United States with offices in major financial hubs like Boston, Chicago, Dallas, Los Angeles, and San Francisco. ",
    },
    {
      title: "What is the accordion used forr?",
      description:
        "The accordion is a portable, box-shaped wind instrument used to play melodies, harmonies, and basslines. It produces sound by pumping air with a folding bellows across internal metal reeds. Because it is self-contained and highly versatile, it is a staple in various musical traditions and solo performances. ",
    },
    {
      title: "Is accordion a mncc?",
      description:
        "Accordion is a boutique financial and technology consulting firm that specializes specifically in private equity. Founded in 2009 and headquartered in New York City, the firm primarily operates within the United States with offices in major financial hubs like Boston, Chicago, Dallas, Los Angeles, and San Francisco. ",
    },
  ];

  function accordianopen(index) {
    if (activeAccodianIndex !== index) {
      setActiveAccodianIndex(index);
    }else{

        setActiveAccodianIndex(-1);
    }
  }
  return (
    <div className="accodian-parent">
      {accordianData.map((data, index) => (
        <div className="accodian" key={data.title}>
          <div className="accodian-child" onClick={() => accordianopen(index)}>
            <span>{data.title}</span>

            {activeAccodianIndex !== index ? <span>⬇️</span> : <span>⬆️</span>}
          </div>

          <div
            className={`description ${activeAccodianIndex == index && "visible"}`}
          >
            {data.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
