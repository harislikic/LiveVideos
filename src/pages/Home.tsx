import { getData } from '/Users/indiigo_o/Desktop/valens-player/src/data/data';

function Home() {
  let data = getData();
  return (
    <div className="container mx-auto grid h-screen place-items-center">
      Welcome to React HLS player!
      <div>
        {data.map(d => (
          <a className="block" href={`?id=${d.id}`} key={d.id}>
            {d.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
