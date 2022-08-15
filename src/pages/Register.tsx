import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { rootStore } from '../Stores/RootStore';

const { userStore } = rootStore;

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    userName: yup.string().required(),
    email: yup.string().required().email('Not valid e-mail!'),
    password: yup.string().required().min(8,'8 charachters min'),
    confirm_password: yup.string().required().oneOf([yup.ref('password'), null], "Does not match with Password!")
    .required(),
   
  })
  .required();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('local storage:', localStorage);
    console.log('data:', data);

    userStore.registration(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <div className='flex flex-row'>
              <input
                {...register('firstName')}
                type="text"
                className="inline  border border-grey-light w-1/2 p-3 rounded mb-4"
                name="firstName"
                placeholder="First Name"
              />
              <p className="text-red-600 text-xs">
                {errors.firstName?.message as string}
              </p>
             
              <input
                {...register('lastName')}
                type="text"
                className="inline  border border-grey-light w-1/2 p-3 rounded mb-4"
                name="lastName"
                placeholder="Last Name"
              />
               <p className="text-red-600 text-xs">
                {errors.lastName?.message as string}
              </p>
              </div>
              <input
                {...register('userName')}
                type="text"
                className="inline border border-grey-light w-full p-3 rounded mb-4"
                name="userName"
                placeholder="User Name"
              />
               <p className="text-red-600 text-xs">
                {errors.userName?.message as string}
              </p>
              <input
                {...register('email')}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />
               <p className="text-red-600 text-xs">
                {errors.email?.message as string}
              </p>

              <input
                {...register('password')}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
               <p className="text-red-600 text-xs">
                {errors.password?.message as string}
              </p>
              <input
                {...register('confirm_password')}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />
               <p className="text-red-600 text-xs">
                {errors.password?.message as string}
              </p>

              <input
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
              />
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link
                className="no-underline border-b border-blue text-blue"
                to="/login"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Register;
