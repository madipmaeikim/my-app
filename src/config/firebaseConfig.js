import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC1Gda_zgHnKR8ZEghtuWMukVl6arfH9tA",
  authDomain: "freenet-42215.firebaseapp.com",
  projectId: "freenet-42215",
  storageBucket: "freenet-42215.appspot.com",
  messagingSenderId: "980462344560",
  appId: "1:980462344560:android:6374729935ada2287217b5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default firebase;
