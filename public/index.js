// import { getStorage, ref } from "firebase/storage";

// //참조 만들기

// // storage points to Cloud Storage Bucket (Root)
// const storage = getStorage();

// // imagesRef now points to 'images'
// const imagesRef = ref(storage, 'images');

// // spaceRef now points to "images/space.jpg"
// const spaceRef = ref(storage, 'images/space.jpg');

const artistData = [
  {
    photo : "assets/images/셔누.jpg",
    name : "셔누",
    birthday : "1992-06-18",
    hometown : "서울",
    group : "몬스타엑스",
    instagram : "https://www.instagram.com/shownuayo/"
  },
  {
    photo : "assets/images/민혁.jpg",
    name : "민혁",
    birthday : "1993-11-03",
    hometown : "서울",
    group : "몬스타엑스",
    instagram : "https://www.instagram.com/go5rae/"
  },
  {
    photo : "assets/images/기현.jpg",
    name : "기현",
    birthday : "1993-11-22",
    hometown : "서울",
    group : "몬스타엑스",
    instagram : "https://www.instagram.com/yookihhh/"
  },
  {
    photo : "assets/images/형원.jpg",
    name : "형원",
    birthday : "1994-01-15",
    hometown : "광주",
    group : "몬스타엑스",
    instagram : "https://www.instagram.com/coenffl/"
  },
  {
    photo : "assets/images/주헌.jpg",
    name : "주헌",
    birthday : "1994-10-06",
    hometown : "서울",
    group : "몬스타엑스",
    instagram : "https://www.instagram.com/joohoneywalker/"
  },
  {
    photo : "assets/images/창균.jpg",
    name : "아이엠",
    birthday : "1996-01-26",
    hometown : "광주",
    group : "몬스타엑스",
    instagram : "https://www.instagram.com/imnameim/"
  },
  {
    photo : "assets/images/설아.jpg",
    name : "설아",
    birthday : "1994-12-24",
    hometown : "서울",
    group : "우주소녀",
    instagram : "https://www.instagram.com/seola_s/"
  },
  {
    photo : "assets/images/보나.jpg",
    name : "보나",
    birthday : "1995-08-19",
    hometown : "대구",
    group : "우주소녀",
    instagram : "https://www.instagram.com/bn_95819/"
  },
  {
    photo : "assets/images/엑시.jpg",
    name : "엑시",
    birthday : "1995-11-06",
    hometown : "부산",
    group : "우주소녀",
    instagram : "https://www.instagram.com/exy_s2/"
  },
  {
    photo : "assets/images/수빈.jpg",
    name : "수빈",
    birthday : "1996-07-14",
    hometown : "서울",
    group : "우주소녀",
    instagram : "https://www.instagram.com/soobly_s2/"
  },
  {
    photo : "assets/images/은서.jpg",
    name : "은서",
    birthday : "1998-05-27",
    hometown : "인천",
    group : "우주소녀",
    instagram : "https://www.instagram.com/eeunseo._.v/"
  },
  {
    photo : "assets/images/여름.jpg",
    name : "여름",
    birthday : "1999-01-10",
    hometown : "하남",
    group : "우주소녀",
    instagram : "https://www.instagram.com/yeolum_e/"
  },
  {
    photo : "assets/images/다영.jpg",
    name : "여름",
    birthday : "1999-05-14",
    hometown : "제주",
    group : "우주소녀",
    instagram : "https://www.instagram.com/dayomi99/"
  },
  {
    photo : "assets/images/연정.jpg",
    name : "연정",
    birthday : "1999-08-03",
    hometown : "광명",
    group : "우주소녀",
    instagram : "https://www.instagram.com/uyj__0803/"
  },
]


const artistList = document.getElementById('artist-list')

artistData.forEach(data => {
  //aartist-list 테이블의 tr, td를 만들고 클래스를 추가한다.
  const artistTr = document.createElement('tr');
  // artistTr.classList.add('클래스명');
  const artistSelect = document.createElement('td')
  artistSelect.innerHTML = '<input type="checkbox" />';
  // const artistPhoto = document.createElement('td');
  // 사진은 파이어베이스 사용해야되니까 비워두고
  // artistPhoto.textContent = data.photo;
  const artistName = document.createElement('td');
  const artistBirthday = document.createElement('td');
  const artistHometown = document.createElement('td');
  const artistGroup = document.createElement('td');
  const artistInstagramTd = document.createElement('td');
  const artistInstagramA = document.createElement('a');
  artistName.textContent = data.name;
  artistBirthday.textContent = data.birthday;
  artistHometown.textContent = data.hometown;
  artistGroup.textContent = data.group;
  artistInstagramA.textContent = data.name + " 인스타그램";
  artistInstagramA.href = data.instagram;
  artistInstagramA.target = "_blank";

  artistInstagramTd.append(artistInstagramA);
  artistTr.append(artistSelect, artistName, artistBirthday, artistHometown, artistGroup, artistInstagramTd);
  artistList.append(artistTr);
})
