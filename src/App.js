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

      // Add data from Cloud-Firestore to Users-App-State
      setUsers(usersCloudData.docs.map((userDoc) => {
        return { ...userDoc.data(), id: userDoc.id }
      }))
    } catch (error) {
      console.log(error.message)
    }
  }

  // UseEffect Hook Functionality that runs after the component renders
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <input type="text" placeholder='Enter Name' />
      <input type="number" placeholder='Enter Age' />
      <input type="text" placeholder='Enter Hobby' />
      <button>Create User</button>
      {
        users.map((user) => (
          <div key={user.id} className='row-flex'>
            <h4>{user.name}</h4>
            <p>{user.age}</p>
            <p>{user.hobby}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
