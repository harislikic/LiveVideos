import { observer } from "mobx-react";
import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { rootStore } from "../Stores/RootStore";

const { videoStore } = rootStore;
function MobileSearch()
{
  const [state, setState] = useState('');
  
  const handleSearch = (e: any) => {
    setState(e.target.value);
  };

  const searchVideo = () => {
    videoStore.searchResult(state);
  };
  
    return(
        <>
        <div className="relative w-full phone:mt-5 laptop:invisible desktop:invisible">
        <Link to={`/`}>
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={40}
            />
          </Link>
              <div className=" flex justify-center">
                <input
                onChange={handleSearch}
                  type="text"
                  id="simple-search"
                  className="laptop:w-[50%] tablet:w-1/2 phone:w-4/5 desktop:visible float-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                />
                  <button
                onClick={() => searchVideo()}
                type="submit"
                className="laptop:w-[5%]  tablet:w-[5%] laptop:invisible phone:w-1/5 flex p-2.5 text-sm font-medium text-black bg-gray-100 rounded-r-lg laptop:rounded-l-none  mobile:rounded-l-lg border border-gray-300 hover:bg-gray-200 focus:outline-none  desktop:visible "
              >
                <i   className="bx bx-search text-base"></i>
              </button>
              </div>
              </div>
              <div className=' mobile:invisible laptop:visible border border-[#6441a5] rounded-xl shadow-xl mb-5'>
      <p className="flex justify-center items-center text-[#6441a5] text-xl my-1">
      Search result..
      </p>
      <div className="grid laptop:grid-cols-3  place-content-center  laptop:grid-rows-1 mobile:grid-cols-1">
        {videoStore.searchVideos?.map((item:any) => (
          <div className='w-1/2  cursor-pointer  shadow-sm  hover:scale-105'>
                <Link to={`/video/${item.id}`} key={Math.random()} 
              
                 draggable='false'>
                   <img src={item.thumbnail} alt="" />
                   
                   <h1 className='items-center text-xl'>{item.name}</h1>
               
                </Link>
                </div>
              ))}
      </div>
    </div>
        </>
    )
}

export default observer(MobileSearch);