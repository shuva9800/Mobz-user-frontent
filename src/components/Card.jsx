import React from 'react'

export default function Card({item}) {
 const {firstName, lastName, email, password, mobileNo,street, city, state, country,loginId} = item
  return (
    <div className='flex justify-center items-center'>
       
        <div className='border-4 text-start' >
            <p>Name:-<span>{firstName + lastName}</span></p>
            <p>Email:-<span>{email}</span></p>
            <p>Phone Number:-<span>{mobileNo}</span></p>
            <p>{`Country:- ${country}`}</p>
            <p>{`State:- ${state}`}</p>
            <p>{`City:- ${city}`}</p>
            <p>{`Street:- ${street}`}</p>
            <p>{`Login ID:- ${loginId}`}</p>
            <p>{`Password:- ${password}`}</p>

            
        </div>

    </div>
  )
}
