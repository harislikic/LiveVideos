import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { rootStore } from '../Stores/RootStore';

function Messages() {
  const { userStore, messageStore } = rootStore;
  const [message, SetMessage] = useState();

  const handleChange = (e: any) => {
    SetMessage(e.target.value);
  };

  const handleClick = () => {
    rootStore.messageStore.addMessage(message as any);
  };
  

  useEffect(() => {
      messageStore.loadMessages();
  },[])



  return (
    <>
      <div id='myDIV' className="container mx-auto w-1/4 border  h-96   ">
        <div className=" lg:col-span-2 lg:block">
          <div className="relative   p-6 overflow-y-auto h-[20rem]">
            <ul className="space-y-2">
              {messageStore.listMessages[
                rootStore.videoStore.id
              ]?.map((data: any) => (
                <li key={data} className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">{data}</span>
                  </div>
                  {userStore.moderator && (
                    <button
                      className="button p-3 border border-gray-300  
                    inline-flex items-center px-4 py-2 bg-red-600
                  hover:bg-red-700 text-white text-sm font-medium rounded-md"
                      type="submit"
                      onClick={() => messageStore.deleteMessage(data)}
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-200 flex items-center justify-between w-full p-3 border-t">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Message"
              className="  block w-full py-1 pl-4 mx-1 bg-gray-50 rounded-full outline-none focus:text-gray-700"
              name="message"
              required
            />
            <button
              className="transition-duration: 150ms bg-gray-50 p-3 border border-gray-100  rounded-full outline-none hover:bg-gray-100"
              type="submit"
              onClick={handleClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div  className="p-3 justify-center flex row-auto">
        <button
          className="p-3 border border-gray-300  hover:visible hover:bg-gray-100 "
          onClick={() => userStore.isModerator()}
        >
          {userStore.moderator ? 'Turn of Admin ' : 'Turn on Admin  '}
        </button>

        <button 
          className="p-3 border border-gray-300  hover:visible hover:bg-gray-100 "
          onClick={() => messageStore.ToogleChat()}
        >
          {messageStore.showChat ? 'Show chat ' : 'Hide chat'  }
        </button>
      </div>
    </>
  );
}

export default observer(Messages);
