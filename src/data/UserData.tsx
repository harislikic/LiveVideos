const userData = [
  {
    id: 1,
    username: 'haris',
    password: 'haris',
  
  },
  {
    id: 2,
    username: 'test',
    password: 'test',
   
  },
];

export function GetUsersData() {
  return userData;
}

export function  GetUserById(id? : number)
{
 return userData.find(x=>x.id == id)
}