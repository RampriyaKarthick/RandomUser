import React, { useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');

  const getRandomUser = async (genderParam) => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=1${genderParam}`);
      const userData = response.data.results[0];
      const newUser = {
        id: userData.login.uuid, 
        name: `${userData.name.first} ${userData.name.last}`,
        email: userData.email,
        image: userData.picture.large,
        dob: userData.dob.date,
        age: userData.dob.age,
        gender: userData.gender,
        location: `${userData.location.city}, ${userData.location.country}`,
        phone: userData.phone,
        password: userData.login.password,
      };
      setUsers(prevUsers => [...prevUsers, newUser]);
    } catch (error) {
      console.error('Error fetching random user:', error.message);
    }
  };

  const handleGetUsers = () => {
    for (let i = 0; i < 10; i++) {
      getRandomUser();
    }
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div >
      <h1 className="title">Random User Generator</h1>
      <div>
      <button className="get-user-button" onClick={getRandomUser}>
          Get Random User
        </button>
        <button className="get-users-button" onClick={handleGetUsers}>Get 10 Random Users</button>
      </div>
      {users
          .filter(user => selectedGender ? user.gender === selectedGender : true) // Apply gender filter
          .map((user, index) => (
            <div className="card" key={user.id}>
              <div className="banner"></div>
              <div className='card-details'>
                <div className='image-container'>
                  <img src={user.image} alt={`${user.name}`} className="rounded-image" />
                </div>
                
                <button className="delete-button" onClick={() => deleteUser(user.id)}>
                  Remove User
                </button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default App;
