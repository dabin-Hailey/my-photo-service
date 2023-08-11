import { getStorage, ref } from "firebase/storage";

//참조 만들기

// storage points to Cloud Storage Bucket (Root)
const storage = getStorage();

// imagesRef now points to 'images'
const imagesRef = ref(storage, 'images');

// spaceRef now points to "images/space.jpg"
const spaceRef = ref(storage, 'images/space.jpg');

