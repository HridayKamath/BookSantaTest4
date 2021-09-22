import firebase from 'firebase';
require('@firebase/firestore')

/*const firebaseConfig = {
    apiKey: "AIzaSyDKyRu9SESIEgdeBUKnr3q81tZF9MrdFrE",
    authDomain: "booksanta-e758b.firebaseapp.com",
    projectId: "booksanta-e758b",
    storageBucket: "booksanta-e758b.appspot.com",
    messagingSenderId: "513208330935",
    appId: "1:513208330935:web:ae557e32d854d85b79bb32"
  };*/
  const firebaseConfig = {
  apiKey: "AIzaSyABu3J3PZst_EKGi8nFhUIMBfpIegIoJM4",
  authDomain: "book-santa-2-38cb8.firebaseapp.com",
  projectId: "book-santa-2-38cb8",
  storageBucket: "book-santa-2-38cb8.appspot.com",
  messagingSenderId: "144456447584",
  appId: "1:144456447584:web:46e7962575869997ca7505"
};

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
