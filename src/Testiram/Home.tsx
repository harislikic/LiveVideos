import { observer } from 'mobx-react-lite';
import Probastore from './ProbaStore'
import React, { useEffect } from 'react';

function Home() {
  let ime: any;
  let prezime: any;


  useEffect(()=>{
    console.log('proba local sotrage',localStorage);
    Probastore.loadCars();
  },[]);

  return (
    <>
    <div className='container flex items-center justify-between w-full p-3 border-t '>
        <div className=' items-center space-x-1'>
        {Probastore.listofCars.map(data=> 
        <table>
            <tr key={data.id}>

                <td> {data.ime} </td>
                <br />
                <td> {data.prezime} </td>
            </tr>
        </table>
         )}
        </div>
       
    </div>
    <br />
      <p>unesi ime i prezime</p>
      <input
        type="text"
        placeholder="Message"
        className="block w-full py-1 pl-4 mx-1 bg-gray-100 rounded-full outline-none focus:text-gray-700"
        name="message"
        required
        onChange={e => (ime = (e.target as any).value)}
      />
      <br />
      <input
        type="text"
        placeholder="Message"
        className="block w-full py-1 pl-4 mx-1 bg-gray-100 rounded-full outline-none focus:text-gray-700"
        name="message"
        required
        onChange={e => (prezime = (e.target as any).value)}
      />
       <button
              className=" p-3 border border-gray-300  rounded-full outline-nonehover:bg-gray-100"
              type="submit"
              onClick={() => Probastore.addCar(ime, prezime)}
            >
              Posalji podatke
            </button>
    </>
  );
}

export default observer(Home);
