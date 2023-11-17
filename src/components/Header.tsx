import { useState, useEffect } from "react";

import { IoMdMenu } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];


const Header = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    let day = new Date().getDate();
    console.log(new Date())
    let month = new Date().getMonth();
    setData(`${day} ${months[month]}`)
  }, [])
  
  return (
    <header>
      <div className="flex justify-between mt-6"> 
        <IoMdMenu className="w-6 h-6"/>
        <MdOutlineSettings className="w-6 h-6"/>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p>{data}</p>
          <p className="text-xl font-bold">Today</p>
        </div>
        <div>
          <button className="bg-green py-1.5 px-3.5 rounded-full text-white hover:bg-dark-green duration-300 active:bg-dark-green">
            Add task
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
