import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (

    
    <div className='items-center border-lg flex flex-col gap-5 max-w-lg p-20 mt-30 rounded-lg mx-90 my-50 mb-10 shadow-lg bg-gray-200 justify-center'>
        <h2 className='text-3xl  mb-3'>Login</h2>
        <input type="text"
        className='border shodow-lg px-4 py-2 ' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        {"  "}
        <input type="password" 
        className='border shodow-lg px-4 py-2'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button 
        className='bg-blue-400 px-4 py-2 rounded-lg mt-5 hover:bg-blue-800 transition duration-200'
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login