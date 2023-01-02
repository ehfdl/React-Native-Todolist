import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyBQ6JSyRv3JfemYp7dE5S59JKY9PWIozKQ",
  authDomain: "react-native-tasklist.firebaseapp.com",
  projectId: "react-native-tasklist",
  storageBucket: "react-native-tasklist.appspot.com",
  messagingSenderId: "388843330148",
  appId: "1:388843330148:web:d28fc932712bd0e17e1d71",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app); // fireStore 이용을 위한 변수!
