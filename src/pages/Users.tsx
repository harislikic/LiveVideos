import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { rootStore } from '../Stores/RootStore';
import { MdDelete } from 'react-icons/md';
import { Role } from '../data/UserData';
function Users() {
  const { userStore } = rootStore;

  useEffect(() => {}, []);

  return (
    <>
      <div className="container mx-auto w-1/2 phone:mt-20 phone:w-full  desktop:w-1/2 bg-stone-100 justify-center 	">
        <div className="container mx-auto grid h-3/4 place-items-center text-4xl ">
          Users
        </div>

        <div className=" grid place-items-center justify-center "></div>
        <div className=" flex justify-center items-center bg-slate-100 w-full  px-4 py-2 text-gray-700 rounded shadow  ">
          <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
            {userStore.allUsers?.map(data => (
              <li
                key={data.id}
                className="flex flex-row py-1 px-1 w-full rounded-t-lg border-b border-gray-300 dark:border-gray-600"
              >
                <Link
                  className="w-full"
                  to={`/users/details/${data.id}`}
                  key={data.id}
                >
                  {data.userName}
                </Link>
                {userStore.user?.Role ===  Role.Moderator && (
                  <MdDelete
                    onClick={() => {
                      if (window.confirm('Confirm deleting?')) {
                        userStore.deleteUser(data.id);
                      }
                    }}
                    className="button cursor-pointer"
                    type="submit"
                  >
                    Delete
                  </MdDelete>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 justify-center flex row-auto "></div>
      </div>
    </>
  );
}

export default observer(Users);
