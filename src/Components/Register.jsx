import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Register() {

  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '',email: '',password: '',  confirmPassword: ''})


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert("Password And Confirm Password is Not Same")
      return
    }
    alert('Registered successfully!')
    navigate('Login', { state: form })

  }

  return (
    <div style={{ width: 400, margin: '40px', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12, marginLeft:12}}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Email:</label><br />
          <input type="email" name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Confirm Password:</label><br />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px' }}>Register</button>
      </form>
    </div>

  )
}

export default Register