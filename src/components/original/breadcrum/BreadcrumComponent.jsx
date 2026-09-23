import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const BreadcrumComponent = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter((x) => x); // remove ""  ["","product","id"]
  console.log(pathname);
  let loc = "";

  return (
    <div className="text-white my-6 p-2 font-extrabold">
      <div>
        
        <div>
          {pathname!=="/" && <Link to={"/"} className="hover:text-blue-800">home / </Link>}
          {path.map((d, index) => {
            console.log(d);
            
              loc += `/${d}`;
         const isLast=index == path.length - 1
            return isLast
             ? (
              <span key={d}>
                 {"   "} {d}
              </span>
            ) : (
              <span key={d} >
                <Link to={loc} className="hover:text-blue-800">{d}</Link>   / 
              </span>
            );
          })}
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default BreadcrumComponent;
