import { observer } from 'mobx-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { rootStore } from '../Stores/RootStore';
const { userStore, videoStore } = rootStore;

function NavBar() {
  const [searchVideoText, setSearchVideoText] = useState('');

  function myFunction() {
    const x = document.getElementById('sideBarDiv') as any;
    if (x?.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }
  const showDetails = () => {
    const x = document.getElementById('userIconDropDown') as any;
    if (x?.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  };

  const handleSearch = (e: any) => {
    setSearchVideoText(e.target.value);
  };

  const searchVideo = () => {
    videoStore.searchResult(searchVideoText);
    setSearchVideoText('');
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />
      <nav className=" z-50 fixed top-0 bg-white border shadow-md py-1 text-base h-14 ">
        <div className="grid grid-cols-7 mt-1">
          <div className="grid-span-1 pt-2">
            <div className="flex flex-row items-center">
              <Link to="/" className="">
                <div className="flex w-full hover:scale-110 mr-12 phone:pb-2 ">
                  <img
                    src="https://www.freepnglogos.com/uploads/twitch-app-logo-png-3.png"
                    className="desktop:w-1/2 desktop:h-1/2 phone:w-auto phone:h-auto phone:inline"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="/" className="absolute left-16">
                <i className="  bx bx-devices text-gray-700 text-3xl pointer mobile:visible laptop:invisible desktop:invisible"></i>
              </Link>
              <p className=" phone:invisible mb-1 pointer underline text-xl underline-offset-8 laptop:ml-3 text-[#6441a5] font-bold laptop:visible desktop:visible mobile:invisible">
                Browse
              </p>
              <button className="">
                <i
                  onClick={() => myFunction()}
                  className=" phone:invisible pointer bx bx-dots-vertical-rounded mr-2 ml-3 text-black text-3xl rounded-ful mobile:invisible laptop:visible hover:bg-gray-200 rounded"
                ></i>
              </button>
            </div>
          </div>
          <div className="col-start-3 col-end-6 mx-2">
            <div className="flex w-full justify-center items-center">
              <input
                value={searchVideoText}
                onChange={handleSearch}
                type="search"
                className="phone:invisible p-2.5 w-2/3 h-2/3 text-sm text-black bg-gray-200 focus:bg-white hover:border-gray-300 rounded-l-lg mr-0.5 border outline-[#6441a5] placeholder-gray-600 laptop:visible desktop:visible "
                placeholder="Search..."
                required
              />
              <button
                onClick={() => searchVideo()}
                type="submit"
                className=" phone:invisible  flex p-2.5 text-sm font-medium text-black bg-gray-100 rounded-r-lg laptop:rounded-l-none  mobile:rounded-l-lg border border-gray-300 hover:bg-gray-200 focus:outline-none desktop:visible laptop:visible"
              >
                <i className=" bx bx-search text-base"></i>
              </button>

              <Link
                to="/search"
                className="phone:visible desktop:invisible laptop:invisible absolute right-10 p-2 font-medium text-black focus:ring-4 focus:outline-none"
              >
                <i className="phone:invisible bx  bx-search text-base"></i>
              </Link>

              <i
                onClick={() => myFunction()}
                className=" bx bx-dots-vertical-rounded mr-2 ml-5 absolute right-0 text-black-500 text-3xl pointer mobile:visible laptop:invisible"
              ></i>
            </div>
          </div>
          <div className="col-start-6 col-end-8 flex justify-end items-center laptop:visible desktop:visible mobile:invisible">
            <i className=" phone:invisible desktop:visible laptop:visible bx bx-crown mr-1 text-black-500 text-xl mx-2 hover:bg-gray-100 rounded p-1.5"></i>
            <button
              onClick={() => searchVideo()}
              type="submit"
              className=" phone:invisible flex p-2.5 text-sm font-medium text-black bg-gray-100 rounded-r-lg laptop:rounded-l-none  phone:rounded-l-lg border border-gray-300 hover:bg-gray-200 focus:outline-none  desktop:inivisble laptop:inivisble tablet:inivisble"
            >
              <i className=" bx bx-search text-base"></i>
            </button>

            {!userStore.user && (
              <div className="phone:invisible desktop:visible   flex flex-row h-3/4 items-center">
                <Link to="/login">
                  <button className="border font-semibold text-xs  laptop:h-8 bg-gray-200 hover:bg-gray-300 rounded px-4 mx-1 py-0.7">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="border font-semibold text-xs laptop:h-8 bg-[#9147ff] hover:bg-[#6441a5] text-white rounded  px-2 mx-1 py-0.7">
                    Sign up
                  </button>
                </Link>
              </div>
            )}

            <button
              onClick={() => searchVideo()}
              type="submit"
              className=" phone:visible flex p-0  font-medium text-black  rounded-r-lg laptop:rounded-l-none  phone:rounded-l-lg  hover:bg-gray-200 focus:outline-none tablet:invisible  desktop:invisible laptop:invisible"
            >
              <i className=" bx text-3xl bx-search "></i>
            </button>

            {!userStore.user ? (
              <button>
                <i
                  onClick={showDetails}
                  className=" phone:invisible bx bx-user mr-2 text-black-500 text-2xl mx-2 hover:bg-gray-300 p-1 rounded-md pointer"
                ></i>
              </button>
            ) : (
              <button>
                <i
                  onClick={() => showDetails()}
                  className="phone:invisible laptop:visible desktop:visible bx bx-user p-1 rounded-2xl mr-2 text-black-500 text-2xl mx-2 bg-red-400 pointer"
                ></i>
              </button>
            )}
          </div>
        </div>
      </nav>

      <SideBar />
    </>
  );
}

const SideBar = () => (
  <div
    id="userIconDropDown"
    className="fixed  phone:mt-16 laptop:mt-16 tablet:mt-16 desktop:mt-0 desktop:top-14   z-50 hidden right-1 rounded border shadow-md  text-sm bg-white"
  >
    <ul className="p-2">
      <li className="my-1 pointer hover:bg-gray-100 py-1 flex">
        {' '}
        <i className="bx bx-moon mr-1 py-1 text-black-500 text-xl mx-2 mb-3"></i>
        <p className="py-1">Dark theme</p>
        <i className="bx bx-toggle-left ml-7 text-black-500 text-3xl mx-2 mb-3"></i>
      </li>

      {userStore.user ? (
        <li
          onClick={() => userStore.logout()}
          className="my-1 border-t-2 pointer hover:bg-gray-100 py-1"
        >
          {' '}
          <i className="bx bx-log-out mr-2 text-black-500 text-xl mx-2"></i>
          Logout
        </li>
      ) : (
        <Link
          to="/login"
          className="flex w-full my-1 border-t-2 pointer hover:bg-gray-100 py-1"
        >
          <i className="bx bx-log-in mr-2 text-black-500 text-xl mx-2"></i>
          Login
        </Link>
      )}
    </ul>
  </div>
);
export default observer(NavBar);
