import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { rootStore } from '../Stores/RootStore';

function SideBar() {
  const { companieStore, userStore } = rootStore;
  const counterCompany = companieStore.companies.length;
  const counterUsers = userStore.allUsers.length;

  return (
    <>
      <aside
        className="container   max-w-[1280px]  phone:w-full phone:justify-center desktop:w-1/5 laptop:w-1/2    phone:text-left  flex  phone:grid-rows-4 flex-wrap  desktop:float-left"
        aria-label="Sidebar"
      >
        <div
          id="sideBarDiv"
          className="tablet:mt-2 iPad:mt-14 desktop:mt-0 desktop:top-14   phone:mt-14 z-20 phone:absolute phone:h-1/3  phone:hidden   laptop:w-1/5 laptop:left-0  phone:w-full  overflow-y-auto py-3  h-full bg-gray-50 rounded dark:bg-gray-800"
        >
          <ul className="  space-y-2 phone:w-full ">
            {!userStore.user && (
              <li className=" phone:visible laptop:invisible desktop:invisible text-center ">
                <Link
                  to="/login"
                  className="flex items-center p-2 phone:text-left text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className=" h-6 w-6  text-2xl bx bx-log-in"></i>
                  <span className="flex-1 ml-3 whitespace-nowrap">Log in</span>
                  <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                </Link>
              </li>
            )}
            {!userStore.user && (
              <li className="phone:visible laptop:invisible desktop:invisible  text-center ">
                <Link
                  to="/signup"
                  className="flex items-center p-2 phone:text-left text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className=" text-2xl  bx bx-user-plus"></i>
                  <span className="flex-1 ml-3 whitespace-nowrap">Sing up</span>
                  <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                </Link>
              </li>
            )}

            <li className=" text-center ">
              <Link
                to="/"
                className="flex items-center p-2 phone:text-left text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <i className="bx bx-video text-xl"></i>
                <span className="flex-1 ml-3 whitespace-nowrap">Videos</span>
                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </Link>
            </li>
            {userStore.user && (
              <>
                <li>
                  <Link
                    to={`/profile/${userStore.user?.id}`}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <i className="bx bx-user-pin text-xl"></i>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Profile
                    </span>
                    <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                  </Link>
                </li>

                <li>
                  <button
                    onClick={() => userStore.logout()}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <i className=" text-2xl  bx bx-log-out-circle"></i>
                    <span className="flex-1  ml-3 whitespace-nowrap">
                      Log out
                    </span>
                    <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                  </button>
                </li>
              </>
            )}

            {userStore.user?.Role == 'moderator' && (
              <div>
                <li>
                  <Link
                    to="/companies"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <i className="bx bx-building-house text-xl"></i>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Companies
                    </span>
                    <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      {counterCompany}
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/users"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <i className="bx bx-user text-xl"></i>
                    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                    <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      {counterUsers}
                    </span>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default observer(SideBar);
