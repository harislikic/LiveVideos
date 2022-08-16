import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';


const schemaStep1 = yup
  .object({
    comapnyId: yup.number().required(),
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
        console.log('data:', data);
      };
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <input
              {...register('comapnyId')}
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="comapnyId"
              placeholder="Comapny Id"
            />
            <p className="text-red-600 text-xs">
              {errors.comapnyId?.message as string}
            </p>

            <input
              {...register('companyName')}
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
                className="w-1/2 text-center py-3 rounded bg-green text-black  bg-green-200 hover:bg-green-dark focus:outline-none my-1"
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

export default Step1;
