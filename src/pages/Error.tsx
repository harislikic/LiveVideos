import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto grid h-screen place-items-center">
      <div className="content-center">Oops! Looks like we have a problem!</div>
      <Link to="/">Back to homepage!</Link>
    </div>
  );
}

export default Home;
