import { isValidElement, useEffect, useRef, useState } from 'react';
import { getData } from '../data/data';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { rootStore } from '../Stores/RootStore';
import InfiniteScroll from 'react-infinite-scroll-component';

function Home() {
  


  let data = getData();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    if (slider != null) slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    if (slider != null) slider.scrollLeft = slider.scrollLeft + 500;
  };

  


  return (
    <>
      <div className="container mx-auto bg-stone-100	">
        <div className="container mx-auto grid h-3/4 place-items-center text-4xl ">
          Live videos!
        </div>
        <br />

        <div className="relative flex items-center   ">
          <div className="bg-gray-200 rounded-xl">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
            />
          </div>
          <div
            id="slider" 
            className="cursor-grabbing block border-10  w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  scrollbar-hide"
          >
         
            {data.map(item => (
              
              <a href={'video/id=' + item.id} key={item.id}>
                
                <img
                  className="w-[220px] h-[150px]   inline-block cursor-pointer hover:scale-105  ease-in-out duration-300"
                  src={item.thumbnail}
                  alt=""
                />

                 
              </a>
             
            ))}
          
        
          </div>
          <div className="bg-gray-200 rounded-xl">
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRight}
              size={40}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
