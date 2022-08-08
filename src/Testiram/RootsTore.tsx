import { makeAutoObservable } from 'mobx';
import ProbaStore from './/ProbaStore';

class RootStore {
  constructor(
    public readonly probaStore = new  ProbaStore()
  ) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
}



const rootStore = new RootStore();
export { rootStore };