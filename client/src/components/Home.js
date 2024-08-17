import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName)
        navigate("/products")
      }

  return (
    <div>
        <form className='home__form' onSubmit={handleSubmit}>
            <label htmlFor="username">Enter your email address</label>
            <input type="text" 
            name='username' 
            className='home__input' 
            value={userName} 
            onChange={e => setUserName(e.target.value)} 
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            minLength={6}
            title="Please enter a valid email address"
            />
            <span className='home__error'>
            {userName && !userName.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i) && "Please enter a valid email address"}
        </span>
            <button className='home__cta'>SIGN IN</button>
        </form>
    </div>
  )
}

export default Home