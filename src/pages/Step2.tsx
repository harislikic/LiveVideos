import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { rootStore } from '../Stores/RootStore';
import { Link } from 'react-router-dom';

const schemaStep2 = yup
  .object({
    address: yup.string().required(),
    contactPerson: yup.string().required(),
  })
  .required();

function Step2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaStep2),
  });

  const onSubmit = (data: any) => {
    console.log('data:', data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <input
                {...register('address')}
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
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="contactPerson"
                placeholder="Contact Person"
              />
              <p className="text-red-600 text-xs">
                {errors.contactPerson?.message as string}
              </p>

              <div>
                <button className='w-1/2 text-center py-3 rounded bg-green bg-gray-200 text-black hover:bg-green-dark focus:outline-none my-1"'>
                  Back
                </button>

                <button
                  type="submit"
                  className="w-1/2 text-center py-3 rounded bg-green text-black bg-green-300 hover:bg-green-dark focus:outline-none my-1"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Step2;
