import { observer } from 'mobx-react-lite';
import Message from '../Stores/Message'

function Messages() {
  return (
    <>
    
      <div className="container mx-auto w-1/2 border heig h-96">
    
          <div className="hidden lg:col-span-2 lg:block">
            
              <div className="relative   p-6 overflow-y-auto h-[20rem]">
                <ul className="space-y-2">
                  <li className="flex justify-start" >
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                      <span className="block">{Message.Message}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between w-full p-3 border-t">
                <input
                  type="text"
                  placeholder="Message"
                  className="block w-full py-1 pl-4 mx-1 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                  name="message"
                  required
                />

                <button className=" p-3 border border-gray-300 "  type="submit" onClick={Message.addMessage} >
                 
                  Send
                </button>
              </div>
           
          </div>
        
      </div>
    </>
  );
}

export default observer(Messages);
