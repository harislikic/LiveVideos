import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { UNSAFE_LocationContext } from 'react-router-dom';
import Message from '../Stores/MessageStore';

function Messages() {
  let id: any = window.location.search
    .slice(1)
    .split('&')
    .find(x => x.includes('id='))
    ?.replace('id=', '');
  let message: any;

 
//  useEffect(() => {
 //  for (var i in localStorage) {
  //   console.log('message', localStorage);
  //   Message.listMessages  = JSON.parse(localStorage.getItem('message') as any);
 //   }
//  },[]);

  useEffect(() => {  
     console.log('message', localStorage);
     Message.listMessages  = JSON.parse(localStorage.getItem('message') as any);
  },[]);

 
  return (
    <>
      <div className="container mx-auto w-1/2 border heig h-96">
        <div className="hidden lg:col-span-2 lg:block">
          <div className="relative   p-6 overflow-y-auto h-[20rem]">
            <ul className="space-y-2">
              {Message.listMessages.map(data => (
                <li className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">{data.message}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between w-full p-3 border-t">
            <input
              type="text"
              placeholder="Message"
              className="block w-full py-1 pl-4 mx-1 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message"
              required
              onChangeCapture={e => (message = (e.target as any).value)}
            />

            <button
              className=" p-3 border border-gray-300 "
              type="submit"
              onClick={() => Message.addMessage(message, id)}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(Messages);
