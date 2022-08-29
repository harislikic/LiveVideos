
import { Link} from 'react-router-dom';
import { rootStore } from '../Stores/RootStore';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Login() {
  const { userStore } = rootStore;

  const schema = yup
    .object({
      userName: yup.string().required(),
      password: yup.string().required().min(4, '4 charachters min'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    userStore.checkDataForLogin(data);
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="phone:w-full  bg-grey-lighter min-h-screen flex w-1/2  justify-center">
          <div className="container max-w-sm mx-auto flex flex-row items-center justify-center px-2">
            <div className="bg-gray-100 px-6 py-8 justify-center rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign in</h1>

              <input
                {...register('userName')}
                type="text"
                className="inline  border border-grey-light w-full p-3 rounded mb-4"
                name="userName"
                placeholder="User Name"
              />
              <p className="text-red-600 text-xs">
                {errors.userName?.message as string}
              </p>

              <input
                {...register('password')}
                type="password"
                className="inline  border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <p className="text-red-600 text-xs">
                {errors.password?.message as string}
              </p>

              <button
                type="submit"
                className="w-1/2 text-center py-3 rounded bg-green text-black  bg-green-200 hover:bg-green-dark focus:outline-none my-1"
              >
                Log in
              </button>
              <Link to="/">
                <span className="inline-block ml-1">Back to home page!</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Login;
