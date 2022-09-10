import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from './firebaseConfig'

function App() {
  // App State 
  const [users, setUsers] = useState([])

  // Function to Fetch Data
  async function getUsers() {
    const usersCollectionRef = collection(db, 'users')
    console.log(usersCollectionRef)
  }

  // Fetching Data From FireStore in UseEffect Hook whenever the page renders
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <h1>CRUD APP: REACT/FIREBASE</h1>
  );
}

export default App;
