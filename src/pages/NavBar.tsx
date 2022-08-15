import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { rootStore } from '../Stores/RootStore';
import UserStore from '../Stores/UserStore';

function NavBar() {
  const { userStore } = rootStore;
  useEffect(() => {
   // rootStore.userStore.loadUser();
  }, []);
  
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full ">
        <div className="container flex flex-wrap justify-between items-center mx-auto bg-gray-100 ">
          <div
            className="  flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
            id="navbar-default"
          >
            <button>
              <Link
                to="/"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
                aria-current="page"
              >
                Home
              </Link>
            </button>
           
            {!userStore.user? (
              <div>
              <button>
                <Link
                  to="/login"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
                >
                  Login
                </Link>
              </button>

              <button>
              <Link
                to="/signup"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
                aria-current="page"
              >
                Sgin up
              </Link>
            </button>

              </div>
            ) : (
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-end '>
              <button
                
                  onClick={()=> userStore.logout()}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
                  >
                  Logout
                  
                
              </button>
              {userStore.user ? (<p>Hi , {userStore.user?.userName} </p>) : (<p>You are not logged.</p>)}
             </div>
            )}
          </div>
        </div>
      
      </nav>
    </>
  );
}
export default observer(NavBar);
