import UserStore from "../Stores/UserStore";
import MesageStore from '../Stores/MessageStore'

class RootStore {
    //VideoStore:VideoStore
   // MesageStore : MessageStore
  

}
class VideoStore{

    root:RootStore
    constructor(root:RootStore)
    {
        this.root= root;
    }
    function1(){

    }
}
class MessageStore{
    root:RootStore
    constructor(root:RootStore)
    {
        this.root = root;
    }
}

export default RootStore;
