import { getStorage, ref } from "firebase/storage";

//참조 만들기

// storage points to Cloud Storage Bucket (Root)
const storage = getStorage();

// imagesRef now points to 'images'
const imagesRef = ref(storage, 'images');

// spaceRef now points to "images/space.jpg"
const spaceRef = ref(storage, 'images/space.jpg');


const artistList = document.getElementById('artist-list')
const artist = document.createElement('tr')
const artistDesc = document.createElement('td')


const artistData = [
  {
    photo : ;
    name : "https://www.daangn.com/policy/terms",
    birthday : ;
    country : ;
    instagram : ;
          <th>국적</th>
    content : "이용약관",
    id : 1,
  },
  {
    href : "https://privacy.daangn.com",
    content : "개인정보처리방침",
    id : 2,
  },
  {
    href : "https://www.daangn.com/policy/location",
    content : "위치기반서비스 이용약관",
    id : 3,
  },
  {
    href : "https://www.daangn.com/wv/faqs/3994",
    content : "이용자보호 비전과 계획",
    id : 4,
  },
  {
    href : "https://www.daangn.com/wv/faqs/9010",
    content : "청소년보호정책",
    id : 5,
  },
]







artistList.append(artist)
artist.append(artistDesc)