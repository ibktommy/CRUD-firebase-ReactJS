import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'

function App() {
  // App State 
  const [users, setUsers] = useState([])

  // Getting Data-Collection from cloud-firestore
  const usersCollectionRef = collection(db, "users")

  // Function to Get Data from Cloud-Firestore
  const getUsers = async () => {
    try {
      const usersCloudData = await getDocs(usersCollectionRef)
      console.log(usersCloudData)
    } catch (error) {
      console.log(error.message)
    }
  }

  // UseEffect Hook Functionality that runs after the component renders
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <h1>CRUD APP: REACT/FIREBASE</h1>
  );
}

export default App;
