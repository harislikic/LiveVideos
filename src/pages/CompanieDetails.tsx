import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { rootStore } from '../Stores/RootStore';
import { MdChevronLeft } from 'react-icons/md';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';

const { companieStore } = rootStore;

const schema = yup
  .object({
    companyId: yup.number().required(),
    companyName: yup.string().required(),
    address: yup.string().required(),
    contactPerson: yup.string().required(),
  })
  .required();

function CompaniesDetails() {
  let { id } = useParams();

  let company = companieStore.getDataById(id as any);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  let navigate = useNavigate();

  const onSubmit = (data: any) => {
    companieStore.editCompany(id, data);
    
    return navigate('/companies');
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" justify-center container phone:w-full desktop:w-1/2 phone:mt-auto bg-grey-lighter min-h-screen flex flex-col ">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <Link to="/companies">
                <MdChevronLeft
                  className="opacity-50 cursor-pointer hover:opacity-100"
                  size={40}
                />
              </Link>

              <h1 className="mb-8 text-3xl text-center">
                {company.companyName}
              </h1>

              <input
                {...register('companyId')}
                readOnly
                value={company.companyId}
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="companyId"
                placeholder="Comapny Id"
              />
              <p className="text-red-600 text-xs">
                {errors.companyId?.message as string}
              </p>

              <input
                {...register('companyName')}
                defaultValue={company.companyName}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="companyName"
                placeholder="Company Name"
              />
              <p className="text-red-600 text-xs">
                {errors.companyName?.message as string}
              </p>

              <input
                {...register('address')}
                defaultValue={company.address}
                type="text"
                className="inline border border-grey-light w-full p-3 rounded mb-4"
                name="address"
                placeholder="Adress"
              />
              <p className="text-red-600 text-xs">
                {errors.address?.message as string}
              </p>
              <input
                {...register('contactPerson')}
                defaultValue={company.contactPerson}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="contactPerson"
                placeholder="Contact Person"
              />
              <p className="text-red-600 text-xs">
                {errors.contactPerson?.message as string}
              </p>

              <div>
                <Link to="/companies">
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

export default observer(CompaniesDetails);
