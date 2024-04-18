import React from "react";
import { FiUsers } from "react-icons/fi";
import { FaHouseUser, FaUserAlt } from "react-icons/fa";

import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";


function AsideUser() {
 

  return (
    <div className="w-auto fixed top-20 h-full">
      <aside className=" hidden md:inline-block  md:w-full  overflow-y-clip -z-10   left-0 top-0  shadow-right shadow-xl rounded-full shadow-blue-4050  h-full ">
        <div className="p-1 h-full overflow-y-clip ">
          <div className="relative h-full flex-wrap space-y-10 justify-center items-center">
            {/* replace with orofile picture */}
           
           
            <div className="cursor-pointer flex justify-center items-center">
              <Link to="/">
                <div className="  flex-wrap">
                  <div className="flex justify-center">
                    <FaHouseUser size={24} className="blue " />
                  </div>
                  <div className="text-xs font-light">Home</div>
                </div>
              </Link>
            </div>
            
             <div className="cursor-pointer flex justify-center items-center">
              <Link to="/user-profile">
                <div className="  flex-wrap">
                  <div className="flex justify-center items-center">
                   
                    <FaUserAlt size={24} className="blue " />
                  </div>
                  <div className="text-xs font-light">Profile</div>
                </div>
              </Link>
            </div>

            

          
            <div className="cursor-pointer flex justify-center items-center">
              <Link to="/following">
                <div className="  flex-wrap">
                  <div className="flex justify-center">
                    <FiUsers size={24} className="blue " />
                  </div>
                  <div className="text-xs font-light">Friends</div>
                </div>
              </Link>
            </div>


            <div className="cursor-pointer flex justify-center items-center">
              <Link to="/search-user">
              <div className="  flex-wrap">
                <div className="flex justify-center">
                  <GoSearch
                    size={24}
                    className="blue "
                  />
                </div>
                <div className="text-xs font-light">Find User</div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default AsideUser;
