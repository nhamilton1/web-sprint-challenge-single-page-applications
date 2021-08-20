import React from 'react'

export default function UserOrder (props) {
    const { user } = props
    return (
        <div className='friend container'>
            <h1>Congrats {user.name}, your {user.size} pizza has been ordered!</h1>
            <p>{user.instructions}</p>
        </div>
    )
}
