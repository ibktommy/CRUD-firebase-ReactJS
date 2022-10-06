import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
	// App State
	const [users, setUsers] = useState([]);
	const [username, setUsername] = useState();
	const [userAge, setUserAge] = useState(0);
	const [userHobby, setUserHobby] = useState("");

	// Getting Data-Collection from cloud-firestore
	const usersCollectionRef = collection(db, "users");

	// Function to Get Data from Cloud-Firestore
	const getUsers = async () => {
		try {
			const usersCloudData = await getDocs(usersCollectionRef);
			console.log(usersCloudData);

			// Add data from Cloud-Firestore to Users-App-State
			setUsers(
				usersCloudData.docs.map((userDoc) => {
					return { ...userDoc.data(), id: userDoc.id };
				}),
			);
		} catch (error) {
			console.log(error.message);
		}
	};
	// Function To Create Data
	const createUser = async () => {};

	// UseEffect Hook Functionality that runs after the component renders
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="container">
			<input
				type="text"
				placeholder="Enter Name"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Enter Age"
				value={userAge}
				onChange={(e) => setUserAge(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Enter Hobby"
				value={userHobby}
				onChange={(e) => setUserHobby(e.target.value)}
			/>
			<button onClick={createUser}>Create User</button>
      
			{users.map((user) => (
				<div key={user.id} className="row-flex">
					<h4>Name: {user.name}</h4>
					<p>Age: {user.age}</p>
					<p>Hobby: {user.hobby}</p>
				</div>
			))}
		</div>
	);
}

export default App;
