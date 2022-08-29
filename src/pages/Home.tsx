import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { rootStore } from '../Stores/RootStore';
import Carousel from './Carousel';
import { Item } from './Components';
import { observer } from 'mobx-react';

function Home() {
  const { videoStore } = rootStore;
  const [online, setStatus] = useState(navigator.onLine);

  setTimeout(() => {
    const box = document.getElementById('footerDivOnline');
    if (box != null) box.style.display = 'none';
  }, 3000);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setStatus(false);
    });
    window.addEventListener('online', () => {
      setStatus(true);
    });

    return () => {
      window.removeEventListener('offline', () => {
        setStatus(false);
      });
      window.removeEventListener('online', () => {
        setStatus(true);
      });
    };
  }, []);

  return (
    <>
      <div className="  mt-5 mobile:invisible     laptop:visible border border-[#6441a5] rounded-xl shadow-xl mb-8">
        {videoStore.searchVideos && (
          <p className="flex justify-center items-center text-[#6441a5] text-xl my-1">
            Search results...
          </p>
        )}
        <div className="w-full bg-gray-100  overflow-y-scroll    grid m-4 p-2 scroll  laptop:grid-cols-4  mt-2 	  place-content-center  laptop:grid-rows-3 mobile:grid-cols-1">
          {videoStore.searchVideos?.map((item: any) => (
            <div className="w-4/5  mt-4 p-2  bg-violet-100  cursor-pointer  shadow-sm  hover:scale-105 ">
              <Link
                to={`/video/${item.id}`}
                key={Math.random()}
                draggable="false"
              >
                <img src={item.thumbnail} alt="" className="w-[520px] h-[160px]" />

                <h1 className="items-center text-xl">{item.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1080px] phone:w-full  desktop:mt-8 phone:mt-2 desktop:w-4/5 inline  container mx-auto bg-stone-100	h-full ">
        <br />

        <div className=" relative flex items-center justify-end w-full   ">
          <div
            id="scrollableDiv"
            className="flex flex-row overflow-x-scroll  w-4/5 h-full  scroll  scroll-smooth  scrollbar-hide"
          >
            <Carousel>
              {videoStore.allVideos?.map((video: any) => (
                <Link to={`/video/${video.id}`} key={video.id}>
                  <Item
                    className="w-[320px] h-[220px]  	 bg-gray-200  hover:scale-105  "
                    img={video.thumbnail}
                  >
                    <h1 className="items-center text-xl">{video.name}</h1>
                  </Item>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {online ? (
        <footer>
          <div
            id="footerDivOnline"
            className="fixed z-50 bottom-0 h-6 bg-green-200 w-full flex justify-center"
          >
            <h1>You are online!</h1>
          </div>
        </footer>
      ) : (
        <footer className="fixed z-50 bottom-0 bg-red-200 w-full h-6 flex justify-center">
          <div className='className="fixed z-50 bottom-0 h-6 bg-green-200 w-full flex justify-center'>
            Offline, please connect to internet!
          </div>
        </footer>
      )}
    </>
  );
}

export default observer(Home);
