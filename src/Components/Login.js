import React from 'react'

function Login() {
    
  return (
    <>
    <h3></h3>
    <form>
      <input type="text" name="email" placeholder='Email' required />
      <input type="password" name="password" placeholder='Enter your password' required />
      <button>Submit</button>
      <p>Don't have an account?  <button>Register here</button></p>

    </form>
    </>
  )
}

export default Login;