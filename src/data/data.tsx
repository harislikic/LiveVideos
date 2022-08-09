const data: IGetData[] = [
  {
    id: '1',
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie one',
  },
  {
    id: '2',
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie two',
  },
  {
    id: '3',
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie three',
  },
  {
    id: '4',
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie four',
  },
  {
    id: '5',
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie five',
  },
];

export function getData() {
  return data;

  
}
export function getDataById(id? : string) {
  return data.find(x=>x.id == id);

  
}
interface IGetData{
  id: string
  link: string
  name: string
}