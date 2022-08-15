import { isValidElement, useEffect, useRef, useState } from 'react';
import { getData } from '../data/data';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { rootStore } from '../Stores/RootStore';

function Home() {
  let data = getData();
  const [Data, setData] = useState(data);
  const { userStore } = rootStore;

  useEffect(() => {
     userStore.loadUser();
    console.log('home app',localStorage);
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById('scrollableDiv');
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft - 500;
     
    }
  };
  const slideRight = () => {
    var slider = document.getElementById('scrollableDiv') as any;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const getMoreData = () => {
    setData(d => d.concat(data));
    console.log('get more data funkcija');
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
              onClick={() => slideLeft()}
              size={40}
            />
          </div>
          <div
            id='scrollableDiv'
            className="flex flex-row border-10 overflow-x-scroll  w-full h-full  scroll whitespace-nowrap scroll-smooth  scrollbar-hide"
          >
            <InfiniteScroll
              dataLength={Data.length}
              next={() => getMoreData()}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              height={400}
              scrollableTarget="scrollableDiv"
            >
              {Data.map(item => (
                <Link to={`/video/${item.id}`} key={Math.random()}>
                  <img
                    className="w-[220px] h-[150px]  inline-block cursor-pointer hover:scale-105  ease-in-out duration-300"
                    src={item.thumbnail}
                    alt=""
                  />
                </Link>
              ))}
            </InfiniteScroll>
          </div>
          <div className="bg-gray-200 rounded-xl">
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={() => slideRight()}
              size={40}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
