import React from 'react'
import UserStats from './UserStats'
import UserLinks from './UserLinks'

const User = ({name, img, username, bio, joined}) => {
    
    function getJoinedDate() {
        const date = new Date(joined).toLocaleDateString('en-us', {year: 'numeric', month: 'short', day: 'numeric'})
        const dateArr = date.replace(',', '').split(' ')
        return `${dateArr[1]} ${dateArr[0]} ${dateArr[2]}`
    }

    return (
        <div className="user">
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <p>{username}</p>
            <p>{bio}</p>
            <p>Joined {getJoinedDate()}</p>
        </div>
    )
}

export default User