import React from 'react'

export default function Liveroom({users}) {
  return (
    <div>
      <h2>Live Users</h2>
      <div>
        {
          users.socketId
        }
      </div>
    </div>
  )
}
