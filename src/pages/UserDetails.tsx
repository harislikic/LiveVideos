import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { rootStore } from '../Stores/RootStore';
import { MdChevronLeft } from 'react-icons/md';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import UserStore from '../Stores/UserStore';
import { values } from 'mobx';
import { Role } from '../data/UserData';

const { userStore } = rootStore;

const schema = yup
  .object({
    id: yup.number().required(),
    userName: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required(),
    Role: yup.string().required(),
  })
  .required();

function UserDetails() {
  let { id } = useParams();

  let detailsUser = userStore.getUserById(id as any);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  let navigate = useNavigate();

  const onSubmit = (data: any) => {
    userStore.editUser(id, data);
 
    return navigate('/users');
  };

 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container phone:w-full desktop:w-1/2 phone:mt-auto bg-grey-lighter min-h-screen flex flex-col w-1/2 ">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <Link to="/users">
                <MdChevronLeft
                  className="opacity-50 cursor-pointer hover:opacity-100"
                  size={40}
                />
              </Link>
              <h1 className="mb-8 text-3xl text-center">
                {detailsUser?.userName}
              </h1>

              <input
                {...register('id')}
                readOnly
                value={detailsUser?.id}
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="id"
                placeholder="User Id"
              />
              <p className="text-red-600 text-xs">
                {errors.id?.message as string}
              </p>

              <input
                {...register('userName')}
                defaultValue={detailsUser?.userName}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="userName"
                placeholder="User Name"
              />
              <p className="text-red-600 text-xs">
                {errors.userName?.message as string}
              </p>

              <input
                {...register('firstName')}
                defaultValue={detailsUser?.firstName}
                type="text"
                className="inline border border-grey-light w-full p-3 rounded mb-4"
                name="firstName"
                placeholder="First name"
              />
              <p className="text-red-600 text-xs">
                {errors.firstName?.message as string}
              </p>
              <input
                {...register('lastName')}
                defaultValue={detailsUser?.lastName}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lastName"
                placeholder="Last name"
              />
              <p className="text-red-600 text-xs">
                {errors.lastName?.message as string}
              </p>
              <input
                {...register('password')}
                defaultValue={detailsUser?.password}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <p className="text-red-600 text-xs">
                {errors.lastName?.message as string}
              </p>
              <div>
                <p className="text-bold">Role:{detailsUser?.Role}</p>

                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Select role:
                </label>
                <select {...register('Role')}>
                  <option value={Role.User}>User</option>
                  <option value={Role.Moderator}>Moderator</option>
                </select>
              </div>
              <div>
                <Link to="/users">
                  <button className=' w-1/2 text-center py-3 rounded bg-green text-black bg-gray-200 hover:bg-bg-white focus:outline-none my-1"'>
                    Cancle
                  </button>
                </Link>
                <button
                  type="submit"
                  className="w-1/2 text-center py-3 rounded bg-green text-black  bg-green-200 hover:bg-green-dark focus:outline-none my-1"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default observer(UserDetails);
