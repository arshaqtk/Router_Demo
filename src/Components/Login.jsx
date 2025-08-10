import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
function Login() {

    const navigate=useNavigate()
    const location =useLocation()
    const {password}=location.state
  const [Loginform, setLoginForm] = useState({ Logemail: '',Logpassword: '',  })
  

  const handleChange = (e) => {
    setLoginForm({ ...Loginform, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Loginform.Logpassword !==password) {
      alert("Password  is Not Same")
      return
    }
    alert('Logined successfully!')
    navigate('/Home')

  }

  return (
    <div style={{ width: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="Logemail"
            value={Loginform.Logemail}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="Logpassword"
            value={Loginform.Logpassword}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        
        <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
      </form>
    </div>

 )
}

export default Login