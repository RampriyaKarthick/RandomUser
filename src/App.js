import React, { useState} from 'react';
import axios from 'axios';
import './App.css';
import IconList from './components/IconList';

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

  const sortUsersByName = () => {
    const sortedUsers = [...users].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    setUsers(sortedUsers);
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

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    setUsers([]); 
  };


  
  return (
    <div >
      <h1 className="title">Random User Generator</h1>
      <div>
      <label>
            Choose Gender:
            <select value={selectedGender} onChange={(e) => handleGenderChange(e.target.value)}>
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
      <button className="get-user-button" onClick={getRandomUser}>
          Get Random User
        </button>
        <button className="get-users-button" onClick={handleGetUsers}>Get 10 Random Users</button>
        <button className="sort-button" onClick={sortUsersByName}>
          Sort by Name
        </button>
        <label>
            Choose Gender:
            <select value={selectedGender} onChange={(e) => handleGenderChange(e.target.value)}>
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
      <div className="card-container">
        {users
          .filter(user => selectedGender ? user.gender === selectedGender : true) 
          .map((user, index) => (
            <div className="card" key={user.id}>
              <div className="banner"></div>
              <div className='card-details'>
                <div className='image-container'>
                  <img src={user.image} alt={`${user.name}`} className="rounded-image" />
                </div>
                <div className="bottom-icons">
                  <IconList userData={user} />
                </div>
                <button className="delete-button" onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
