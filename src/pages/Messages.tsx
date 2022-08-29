import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Role } from '../data/UserData';
import { rootStore } from '../Stores/RootStore';

function Messages(id: any) {
  const { userStore, messageStore } = rootStore;
  const [message, SetMessage] = useState('');

  const handleChange = (e: any) => {
    SetMessage(e.target.value);
  };

  const handleClick = (e: any) => {
    messageStore.addMessage(message, id.id, userStore.user.userName);
    SetMessage('');
  };

  useEffect(() => {
    messageStore.loadMessages(id.id);
    console.log('loged user', userStore.user?.userName);
  }, [id]);

  return (
    <>
      <div
        id="myDIV"
        className=" phone:w-full p-0  phone:h-1/3 laptop:w-[30%] container mx-auto w-1/4 border  h-96   "
      >
        <div className=" lg:col-span-2 lg:block">
          <div className=" relative  phone:w-full  p-4 overflow-y-auto h-[20rem]">
            <ul className="space-y-2">
              {messageStore.listMessages[id.id]?.map((data: any) => (
                <li key={data.id} className=" flex justify-start">
                  <span className="block max-w-xl px-0 py-2 mr-2">
                    {data.userName}:
                  </span>
                  <div className="  block max-w-xl px-4 py-2 text-gray-700 rounded drop-shadow-md	 hover:bg-sky-100 hover:scale-105">
                    {data.message}
                  </div>
                  {userStore.user?.Role === 'moderator' && (
                    <MdDelete
                      size={25}
                      className="button  ml-0 rounded-full mt-2  "
                      type="submit"
                      onClick={() => messageStore.deleteMessage(data, id.id)}
                    >
                      Delete
                    </MdDelete>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {userStore.user ? (
            <div className="phone:w-full phone:h-1/3   bg-violet-300 flex items-center justify-between p-1 border-t ">
              <input
               
                value={message}
                onChange={handleChange}
                type="text"
                placeholder="Message"
                className="  block w-full py-1 pl-4 mx-1 bg-gray-50 rounded-full outline-none focus:text-gray-700"
                name="message"
                required
                id="messageInput"
              />

              <button
                className="transition-duration: 150ms bg-gray-50 p-2 border border-gray-100  rounded-full outline-none hover:bg-gray-100"
                type="submit"
                onClick={handleClick}
              >
                Send
              </button>
            </div>
          ) : (
            <div
              className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span className="font-medium">Error!</span> Need to be logged!
            </div>
          )}
        </div>
      </div>
      <div className="p-3 justify-center flex row-auto ">
        {userStore.user?.Role === Role.Moderator && (
          <div>
            <button
              className="p-3 border border-gray-300  hover:visible hover:bg-gray-100 "
              onClick={() => messageStore.ToogleChat()}
            >
              {messageStore.showChat ? 'Show chat ' : 'Hide chat'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default observer(Messages);
