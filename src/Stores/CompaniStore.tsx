import { makeAutoObservable, makeObservable } from 'mobx';
import { ThemeConsumer } from 'styled-components';
import { GetCompaniData } from '../data/CompanieData';

class CompanieStore {
  step = 1;
  step1data: any;
  companies: any[] = [];

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  next(data: any) {
    this.step = 2;
    this.step1data = data;
    localStorage.setItem('step1', JSON.stringify(this.step1data));
    console.log(localStorage);
  }

  back() {
    this.step = 1;
  }

  getDataById(id: Number) {
    
    this.companies = JSON.parse(localStorage.getItem('companies') as any);
    return this.companies.find(x => x.companyId == id) as any;
  }

  finish(data: any) {
    let temp: any = {
      companyId: this.step1data.companyId,
      companyName: this.step1data.companyName,
      address: data.address,
      contactPerson: data.contactPerson,
    };
    this.back();
    this.step1data = '';

    localStorage.setItem('step1', JSON.stringify(temp));
    this.companies.push(temp);
    localStorage.setItem('companies', JSON.stringify(this.companies));
    console.log('ono sto salemo u finish', data);
  }
  loadCompanies() {
    if (
      localStorage.getItem('companies') != undefined &&
      localStorage.getItem('companies') != null
    ) {
      this.companies = JSON.parse(localStorage.getItem('companies') as any);
    }
  }

  deleteCompanie(id: number) {
    this.companies = this.companies.filter(x => x.companyId != id);
    localStorage.setItem('companies', JSON.stringify(this.companies));
    this.loadCompanies();
  }

  editCompany(id: any, newData: any) {
  
    const idx = this.companies.findIndex( x => x.companyId == id,
    );
    this.companies[idx] = newData;
    localStorage.setItem('companies', JSON.stringify(this.companies));
    this.loadCompanies();
  }
}

export default CompanieStore;
