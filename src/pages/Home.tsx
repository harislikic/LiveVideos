import { getData } from '../data/data';

function Home() {
  let data = getData() ;
  return (
    <>
    <div className="container mx-auto grid h-screen place-items-center text-6xl">
      Welcome to React HLS player!
      <div className="flex flex-row ">
        {data.map(d => (
          <a
            className="text-xl mx-3 px-2 border-solid border-2 border-indigo-600"
            href={`?id=${d.id}`}
            key={d.id}
          >
            {d.name}
          </a>
        ))}
      </div>
    </div>
    <br />

    </>
  );
}

export default Home;
