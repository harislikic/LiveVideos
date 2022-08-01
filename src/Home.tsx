import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto grid h-screen place-items-center">
      Welcome to React HLS player!
        <div>
          <Link to="/videos/1">Video Link</Link><br></br>
          <Link to="/videos/2">Error Link</Link>
        </div>
      </div>
  );
}

export default Home;
