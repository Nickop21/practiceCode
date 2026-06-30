import React, { useEffect, useState } from "react";

const TabSwitcher = ({ activeIndex, activeIndexChange }) => {
  const [formdata, setFormData] = useState([]);
  const profileField = [
    {
      name: "Name",
      placeholder: "Enter Your Name",
      type: "text",
    },
    {
      name: "Age",
      placeholder: "Enter Your Age",
      type: "text",
    },
    {
      name: "Email",
      placeholder: "Enter Your Email Address",
      type: "email",
    },
  ];

  const interstField = [
    {
      name: "Football",
      placeholder: "Enter Your Name",
      type: "radio",
    },
    {
      name: "Cricket",
      placeholder: "Enter Your Age",
      type: "radio",
    },
    {
      name: "gender",
      placeholder: "Enter Your Email Address",
      type: "checkbox",
    },
  ];

  function check(e) {
    console.log(e.target);

    const { name, checked, type, value } = e.target;
    const dataform = {
      [name]: value,
    };
    // formdata.length==0 && setFormData([dataform]);
    const hasNameField = formdata.some((obj) => obj.hasOwnProperty(name));

    if (!hasNameField) {
      setFormData((prev) => [...prev, dataform]);
    }
    // if (type == "radio" || type == "checkbox") {
    //   setFormData((prev) => ([
    //     ...prev,
    //     [name]: checked ? "on" : "off"
    //   ]));
    // }

    console.log(formdata);
  }


  const CommonFormFieldComponent = ({ data, index }) => {
    return (
      <div className="flex justify-start p-4 items-center">
        <span className="w-40 text-start">{data.name}:</span>
        <input
          className="w-full border-2 border-amber-50 p-2 rounded-xl"
          name={data.name}
          placeholder={data?.placeholder}
          type={data.type}
          onChange={(e) => check(e)}
        />
      </div>
    );
  };
  const Profile = () => {
    return (
      <>
        {profileField.map((data, index) => (
          <div key={data.name}>
            <CommonFormFieldComponent data={data} index={index} />
          </div>
        ))}
      </>
    );
  };

  const Interest = () => {
    return (
      <>
        {interstField.map((data, index) => (
          <div key={data.name}>
            <CommonFormFieldComponent data={data} index={index} />
          </div>
        ))}
      </>
    );
  };

  const Settings = () => {
    return (
      <>
        {interstField.map((data, index) => (
          <CommonFormFieldComponent data={data} index={index} />
        ))}
      </>
    );
  };

  const tabs = [
    {
      name: "Profile",
      component: <Profile />,
    },
    {
      name: "Interest",
      component: <Interest />,
    },
    {
      name: "Settings",
      component: <Settings />,
    },
  ];

  return (
    <div className="">
      <div className="flex flex-row ">
        {tabs?.map((data, index) => (
          <div
            className={`  p-4 w-fit   ${index == activeIndex ? "bg-orange-300" : "bg-white"} transition-colors duration-300 ease-in-out`}
            onClick={() => activeIndexChange(index)}
            key={data.name}
          >
            {data.name}
          </div>
        ))}
      </div>
      <div className="bg-orange-300  flex flex-col ">
        {tabs.map((data, index) => (
          <div className={`${index === activeIndex ? "visible" : "hidden"} `}>
            {data.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
