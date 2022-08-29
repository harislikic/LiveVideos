import { rootStore } from '../Stores/RootStore';
import { MdOutlineAspectRatio } from 'react-icons/md';
import { observer } from 'mobx-react';

const { userStore, videoStore } = rootStore;

function ModeratorButton() {
  const showDetails = () => {
    let x = document.getElementById('moderatorPanel') as any;
    if (x?.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  };

  return (
    <>
      {userStore.user?.Role === 'moderator' && (
        <MdOutlineAspectRatio
          size={40}
          onClick={showDetails}
          className=" phone:hover:scale-110 fixed right-0 bottom-10 cursor-pointer  "
        >
          
        </MdOutlineAspectRatio>
      )}

      <div
        id="moderatorPanel"
        className="hover:scale-105    phone:w-1/3 phone:h-1/5  phone:mr-10 desktop:w-[10%] desktop:h-1/5 mr-12 fixed z-50 hidden right-1 bottom-10 rounded border shadow-md mt-1 text-sm bg-gray-100"
      >
        <ul className="pl-2 pt-10 ">
          <li className="my-1 pointer hover:bg-gray-100 py-1 flex  ">
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                onClick={() => videoStore.togleButton()}
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer  hover:scale-125"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Videos
              </span>
            </label>
          </li>

          <li className="my-1 pointer hover:bg-gray-100 py-1 flex">
            <label className="inline-flex relative items-center cursor-pointer">
              {!userStore.companiesAllowed ? (
                <i
                  onClick={() => userStore.toggleCompaniePermission()}
                  className="bx bx-toggle-left text-gray-700 text-4xl pointer hover:scale-125 duration-200"
                ></i>
              ) : (
                <i
                  onClick={() => userStore.toggleCompaniePermission()}
                  className="bx bx-toggle-right text-[#6441a5] text-4xl pointer hover:scale-125 duration-200"
                ></i>
              )}

              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Wizard
              </span>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default observer(ModeratorButton);
