import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Message from '../Stores/MessageStore';
import User from '../Stores/UserStore';

function Messages() {
  let id: any = window.location.search
    .slice(1)
    .split('&')
    .find(x => x.includes('id='))
    ?.replace('id=', '');
  console.log('id movie', id);
  let message: any;
  let isModerator = User.isModerator;
  console.log('is moderator in message', isModerator);

  useEffect(() => {
    console.log('local storage data;', localStorage);

    Message.loadMessages(id);
  }, []);

  return (
    <>
      <div className="container mx-auto w-1/2 border heig h-96">
        <div className=" lg:col-span-2 lg:block">
          <div className="relative   p-6 overflow-y-auto h-[20rem]">
            <ul className="space-y-2">
              {Message.listMessages.map(data => (
                <li className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">{data.message}</span>
                  </div>
                  {isModerator && (
                    <button
                      className="button p-3 border border-gray-300  
                 inline-flex items-center px-4 py-2 bg-red-600
                  hover:bg-red-700 text-white text-sm font-medium rounded-md"
                      type="submit"
                      onClick={() => Message.deleteMessage(id)}
                    >
                      Delete
                    </button>
                  )}
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
              className=" p-3 border border-gray-300  rounded-full outline-nonehover:bg-gray-100"
              type="submit"
              onClick={() => Message.addMessage(message, id)}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="p-3 justify-center flex row-auto">
        <button
          className="p-3 border border-gray-300  hover:visible hover:bg-gray-100 "
          onClick={() => User.isModeratortrue()}
        >
          Moderator
        </button>
        <button
          className="p-3 border border-gray-300  hover:visible hover:bg-gray-100"
          onClick={() => User.isViewertrue()}
        >
          Viewer
        </button>
      </div>
    </>
  );
}

export default observer(Messages);
