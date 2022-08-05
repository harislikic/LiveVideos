import { makeAutoObservable } from 'mobx';



const  car = {
    id : 1,
    ime:'',
    prezime:'',

    newCar : function(ime:any,prezime:any)
    {
        car.ime = ime;
        car.prezime = prezime;
        return car;
    }
}


class Auto{
    listofCars : any[] =[];

    constructor(){
        makeAutoObservable(this,undefined,{autoBind:true});
    }
    addCar(ime:any,prezime:any)
    {
    this.listofCars.push(car.newCar(ime,prezime));
    localStorage.setItem('auta',JSON.stringify(this.listofCars));
    }
    loadCars()
    {
        if(localStorage.getItem('auta')!==null)
        this.listofCars = JSON.parse(localStorage.getItem('auta')as any);
    }

}

const auto = new Auto();
export default auto;