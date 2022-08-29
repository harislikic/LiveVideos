import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import SideBar from './pages/SideBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import ModeratorButton from './pages/ModeratorButton';
import { rootStore } from './Stores/RootStore';
import { AnonymousRoute, ModeratorRoute, UserRoute } from './Routes/Routes';
import { useEffect } from 'react';
import { Role } from './data/UserData';

const { userStore,companieStore,videoStore } = rootStore;

function App() {
  useEffect(() => {
    userStore.loadUser();
    userStore.loadAllusers();
    companieStore.loadCompanies();
    videoStore.loadVideoData();
  }, []);
  return (
    <div>
     
      <NavBar />
      <SideBar />
      <ModeratorButton />
      <div>
      <Routes>
        {!userStore.user && <Route path="/*" element={<AnonymousRoute />} />}

        {userStore.user?.Role === Role.Moderator && (
          <Route path="/*" element={<ModeratorRoute />} />
        )}
        {userStore.user?.Role === Role.User && userStore.companiesAllowed ? (
          <Route path="/*" element={<ModeratorRoute />} />
        ) : (
          <Route path="/*" element={<UserRoute />} />
        )}

        {userStore.user && <Route path="/*" element={<UserRoute />} />}
      </Routes>
      </div>
    </div>
  );
}

export default observer(App);
