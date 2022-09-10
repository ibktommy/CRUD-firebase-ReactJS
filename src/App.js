import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'

function App() {
  // App State 
  const [users, setUsers] = useState([])

  // Getting Data-Collection from cloud-firestore
  const usersCollectionRef = collection(db, "users")

  // UseEffect Hook Functionality that runs after the component renders
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
    }

    getUsers()
  }, [usersCollectionRef])

  return (
    <h1>CRUD APP: REACT/FIREBASE</h1>
  );
}

export default App;
