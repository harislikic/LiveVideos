const userData = [
  {
    id: 1,
    firstName : 'haris',
    lastName : 'haris',
    userName: 'haris',
    password: 'haris',
    isAdmin  : false, 
   
  
  },
  {
    id: 2,
    firstName : 'haris',
    lastName : 'haris',
    userName: 'test',
    password: 'test',
    isAdmin : false ,
  },
  {
    id: 3,
    firstName : 'haris',
    lastName : 'haris',
    userName: 'admin',
    password: 'admin',
    isAdmin : true
   
  },
];

export function GetUsersData() {
  return userData;
}

export function  GetUserById(id? : number)
{
 return userData.find(x=>x.id == id)
}

export function getByuserNameAndPassword(username : any, password : any)
{
   return userData.find(x=>x.userName == username && x.password == password);
}

