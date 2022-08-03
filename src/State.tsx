import { action, makeAutoObservable, makeObservable, observable } from "mobx";

class State{
    playVideo: boolean=false;
    constructor(){
        makeAutoObservable(this, undefined, { autoBind: true });
    }
    play() {
        this.playVideo=true;
    }
    pause(){
        this.playVideo=false;
    }
}
const state= new State();
export default {state};
