import React from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser,FaEarlybirds} from 'react-icons/fa'
import { Link , useNavigate} from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { logout,reset } from '../features/auth/authSlice'


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)

    const onLogout = ()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'> <FaEarlybirds className='logo-symbol'/></Link>
            <h4 className='logo-content'>SkyLine Flights</h4>
        </div>
        <ul>
            {user ? (<>
                <li>
                    <button className='btn' onClick={onLogout}>
                    <FaSignOutAlt/> Logout
                    </button>
              
          </li>
            </>) : (<>
              <li>
              <Link to='/login'>
                  <FaSignInAlt/> Login
              </Link>
          </li>
          <li>
              <Link to='/register'>
                  <FaUser/> Register
              </Link>
          </li>
             </>)}
          
        </ul>
    </header>
  )
}

export default Header