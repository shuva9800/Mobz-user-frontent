
// export default LiveUsers;
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function LiveUsers({ users }) {
    console.log("live user details is", users)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  

  //fetch user data
  // async function fetchuserdata(id){
  //   try{
  //     // const response = await fetch(`http://localhost:4000/api/v1/userdata/${id}`);
  //     const response = await fetch(`http://localhost:4000/api/v1/getdata`);
  //     // console.log(response)
  //     const value = response.json();
  //     console.log(value);
      

  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }
 

  const openModal = (user) => {
    // fetchuserdata(user);
   
    setSelectedUser(user);
    
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>Live Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.socketId}>
            <button onClick={() => openModal(user)}>User ID: {user.id}</button>
            , Email: {user.email}
            , <button onClick={() => openModal(user)}>Socket ID: {user.socketId}</button>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            padding: '20px',
            maxWidth: '500px',
            margin: 'auto',
          },
        }}
      >
        {selectedUser && (
          <div>
            <h2>User Details</h2>
            <p>Name:<span>{selectedUser.firstName}</span> <span>{selectedUser.lastName}</span>  </p>
            <p>User ID: {selectedUser.id}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Socket ID: {selectedUser.socketId}</p>
            <p>Phone: {selectedUser.mobileNo}</p>
            <p>city: {selectedUser.city}</p>
            <p>state {selectedUser.state}</p>
            <p>state {selectedUser.state}</p>
            <p>Country {selectedUser.country}</p>
            <p>Login ID: {selectedUser.loginId}</p>

            <button onClick={closeModal} className='bg-slate-600'>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default LiveUsers;


