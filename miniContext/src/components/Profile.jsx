import React,{useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return (
        <div 
        className='border max-w-lg mt-10 mx-90 my-50 bg-gray-200 px-6 py-3 font-bold rounded-lg'
        >
            Please login
        </div>
    )

    return( 
        <div
        className='border max-w-lg mt-10 mx-90 my-50 bg-gray-200 px-6 py-3 font-bold rounded-lg'
        >
            Welcome {user.username}!
        </div>
    )
}

export default Profile