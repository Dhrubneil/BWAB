import React, { useState } from 'react'
import Loading from '../../components/loading/loading'
import Navbar from '../../components/navbar/navbar'

function Login() {
  const [loading, setLoading] = useState(true)

  // infinite loop
const show = () => {
  setTimeout(() => {
    setLoading(false)
  }, 2000)
}
  // infinite loop

  return loading? (
    <>
    
    <Navbar />
    <div className='center'>
      <Loading />
    </div>

    {show()}
    
    </>
  ):
  <>
   <Navbar />
    <div>Login</div>
  </>
}

export default Login