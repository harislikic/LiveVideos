
interface IGetData {
  id: number;
  link: string;
  name: string;
  thumbnail: string;
  private :boolean;
}

const data: IGetData[] = [
  {
    id: 1,
    link: 'https://devstreaming-cdn.apple.com/videos/wwdc/2020/10231/3/2F8E5799-0623-407E-A395-57E1DE70D4D0/master.m3u8',
    name: 'Movie one',
    thumbnail:
      'https://i.pinimg.com/originals/0e/3d/ef/0e3def7616bd70746affa159e210bca0.jpg',
      private:true,
  },
  {
    id: 2,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie two',
    thumbnail:
      'https://www.techsmith.com/blog/wp-content/uploads/2021/02/TSC-thumbnail-example-1024x576.png',
      private:true,
  },
  {
    id: 3,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie three',
    thumbnail:
      'https://d3ui957tjb5bqd.cloudfront.net/uploads/2021/03/29073730/1530x900-horizontal-8.jpg',
      private:false,
  },
  {
    id: 4,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie four',
    thumbnail: 'https://i.ytimg.com/vi/Sp3dFF-Bts0/maxresdefault.jpg',
    private:false,
  },
  {
    id: 5,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie five',
    thumbnail:
      'https://redmoonrecord.co.uk/tech/wp-content/uploads/2019/11/YouTube-thumbnail-size-guide-best-practices-top-examples.png',
      private:false,
  },
  {
    id: 6,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie 6',
    thumbnail: 'https://i.ytimg.com/vi/cEmlaDsK7GQ/maxresdefault.jpg',
    private:true,
  },
  {
    id: 7,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie 7',
    thumbnail:
      'https://louisem.com/wp-content/uploads/2017/06/youtube-thumbnail-FB.jpg',
      private:false,
  },
  {
    id: 8,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie 8',
    thumbnail:
      'https://i.easil.com/wp-content/uploads/20190508125321/the_science_of_fear_rhino_illustration_template_youtube_thumbnail-800x450.jpg',
      private:true,
  },
  {
    id: 9,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Movie 9',
    thumbnail:
      'https://www.thoughtco.com/thmb/-RVhEGinDzvijmJ8f00ZIQa7s2k=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/Paint3DExample2-ed38ee63269d4e9d9096e6bbca582245.jpg',
      private:true,
  },
  {
    id: 10,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'aestetic x forut',
    thumbnail:
      'https://images.unsplash.com/photo-1609171712489-45b6ba7051a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      private:false,
  },
  {
    id: 11,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    name: 'Film saraejvo',
    thumbnail:
      'https://images.pexels.com/photos/3910065/pexels-photo-3910065.jpeg?cs=srgb&dl=pexels-valeriia-miller-3910065.jpg&fm=jpg',
      private:false,
  },
  {
    id: 12,
    link: 'https://devstreaming-cdn.apple.com/videos/wwdc/2020/10231/3/2F8E5799-0623-407E-A395-57E1DE70D4D0/master.m3u8',
    name: 'Movie twelfe',
    thumbnail:
      'https://i.pinimg.com/originals/0e/3d/ef/0e3def7616bd70746affa159e210bca0.jpg',
      private:true,
  },
 
];

export function privateVideoData()
{
   return data.filter((x:any) =>x.private === true)
}

export function getData() {
  return data;
}
export function getDataById(id: number) {
  return data.find(x => x.id == id);
}

export function getNextId(id: number) {
  const index = data.findIndex(x => x.id == id);

  if (data.length > index + 1) {
    return data[index + 1];
  }
  return data[0];
}

export function getPrevoiusId(id: number) {
  const index = data.findIndex(x => x.id == id);

  if (index > 0) {
    return data[index - 1];
  }
  return data[data.length - 1];
}
