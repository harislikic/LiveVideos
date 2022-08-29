import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { rootStore } from '../Stores/RootStore';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const { companieStore } = rootStore;

const schemaStep1 = yup
  .object({
    companyId: yup.number().required(),
    companyName: yup.string().required(),
  })
  .required();

function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaStep1),
  });

  const onSubmit = (data: any) => {
     let chechkId = companieStore.getDataById(data.companyId);
    
     if(chechkId)
     alert('Id alredy exist!')
     else
     companieStore.next(data);
  };

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-16 phone:w-full bg-grey-lighter w-2/3 flex mr-auto justify-center  ">
        <div className=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white   px-6 py-8 rounded shadow-md text-black w-full">
          
            <input
              {...register('companyId')}
              defaultValue={companieStore.step1data?.companyId}
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="companyId"
              placeholder="Company Id"
            />
            
            <p className="text-red-600 text-xs">
              {errors.companyId?.message as string}
            </p>

            <input
              {...register('companyName')}
              defaultValue={companieStore.step1data?.companyName}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="companyName"
              placeholder="Company Name"
            />
            <p className="text-red-600 text-xs">
              {errors.companyName?.message as string}
            </p>

            <div>
              <Link to="/companies">
                <button className=' w-1/2 text-center py-3 rounded bg-green text-black bg-gray-200 hover:bg-bg-white focus:outline-none my-1"'>
                  Cancle
                </button>
              </Link>
              <button
                type="submit"
                className="w-1/2 text-center py-3 rounded bg-green text-black  bg-green-100 hover:bg-green-dark focus:outline-none my-1"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default observer(Step1);
