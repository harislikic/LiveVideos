import { Link } from 'react-router-dom';

function Home() {
  const data = {
    id: 1,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  };

  return (
    <div className="container mx-auto grid h-screen place-items-center">
      Welcome to React HLS player!
      <div>
        <Link to={`/videos/${data.id}`}>Video Link</Link>
        <br></br>
        <Link to="*">Error Link</Link>
      </div>
    </div>
  );
}

export default Home;
