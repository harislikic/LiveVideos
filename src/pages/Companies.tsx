import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { rootStore } from '../Stores/RootStore';
import { MdDelete } from 'react-icons/md';
import { Role } from '../data/UserData';

function Companies() {
  const { userStore, companieStore } = rootStore;



  return (
    <>
      <div className="    container mx-auto  phone:mt-20 phone:w-full    desktop:w-1/3  w-1/2 bg-stone-100 justify-center 	">
        <div className="container mx-auto grid h-3/4 place-items-center text-4xl ">
          Companies
        </div>

        <div className="grid place-items-center justify-end ">
          <Link
            to="/companies/add"
            className="	items-center   inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-gray-200 mt-4 bg-gray-200 lg:mt-0"
          >
            +Add
          </Link>
        </div>
        <div className="overflow-scroll h-52 flex justify-center bg-slate-100 w-full  px-4 py-2 text-gray-700 rounded shadow  ">
          <ul className="bg-white   rounded-lg border border-gray-200 w-96 text-gray-900  ">
            {companieStore.companies?.map(data => (
              <li
                key={data.companyId}
                className="  flex flex-row py-1 px-1 w-full rounded-t-lg border-b border-gray-300 dark:border-gray-600"
              >
                <Link
                  className=" w-full"
                  to={`/companies/details/${data.companyId}`}
                  key={data.companyId}
                >
                  {data.companyName}
                </Link>

                {userStore.user?.Role === Role.Moderator && (
                  <MdDelete
                    className="button  cursor-pointer"
                    type="submit"
                    onClick={() => {
                      if (window.confirm('Confirm deleting?')) {
                        companieStore.deleteCompanie(data.companyId);
                      }
                    }}
                  ></MdDelete>
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

export default observer(Companies);
