import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/userSlice';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }

  return (
    <div className='w-full h-25 bg-sky-800'>
        <div className='flex flex-row justify-around items-center py-4 px-1 mx-auto'>
            <Link to="/">
                <div className='text-white font-combo font-bold px-10 -mx-8'>
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg" className='w-30 h-12'/>
            </div>
            </Link>
            <button onClick={(e) => handleLogout(e)}>
              <div className='text-white font-combo font-bold px-10 -mx-8'>
                    Sign out
              </div>
            </button>
            <div className='text-white font-Exo font-semibold px-12 flex flex-row'>
                <h1>SITE LANGUAGE: ENGLISH</h1> 
                <div className='text-lg text-white'><RiArrowDropDownLine />
                    </div>
            </div>
        </div>
    </div>
  )
}
