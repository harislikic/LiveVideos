import { observer } from 'mobx-react';
import { rootStore } from '../Stores/RootStore';

const { userStore } = rootStore;

function Profile() {
  return (
    <>
      <div className="container mx-auto  phone:mt-20 phone:w-full  desktop:w-1/2  w-1/2 bg-stone-100 justify-center ">
        <div className="p-8 bg-white shadow mt-24  phone:p-0">
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              First name:{userStore.user?.firstName}
              <br />
              <span className="font-light text-gray-500">
                {' '}
                Last name :{userStore.user?.lastName}
              </span>
            </h1>
            <p className="font-light text-gray-600 mt-3">
              Email:{userStore.user?.email}
            </p>

            <p className="mt-8 text-gray-500">Role:{userStore.user?.Role}</p>
            <p className="mt-2 text-gray-500">
              Password :{userStore.user?.password}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(Profile);
