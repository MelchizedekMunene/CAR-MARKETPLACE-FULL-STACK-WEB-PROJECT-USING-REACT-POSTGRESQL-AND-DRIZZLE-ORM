import { UserButton, useUser, SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom'

function Header() {
  const {user, isSignedIn} = useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
      {/* Logo */}
      <div className='logo'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={95} height={65}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4CAF50" />
            <stop offset="100%" stop-color="#2E7D32" />
          </linearGradient>
        </defs>
  
         <g>
          <path fill="url(#gradient)" d="M256,64C150.13,64,64,150.13,64,256s86.13,192,192,192s192-86.13,192-192S361.87,64,256,64z M256,416 c-88.22,0-160-71.78-160-160S167.78,96,256,96s160,71.78,160,160S344.22,416,256,416z"/>
    
          <path fill="url(#gradient)" d="M300.91,178.51c-6.77-11.54-23.14-11.54-29.91,0l-39.2,66.82h-45.56v-16.29c0-8.28-6.72-15-15-15h-18.08 c-8.28,0-15,6.72-15,15v16.29H151.2c-7.75,0-14.05,6.3-14.05,14.05c0,7.75,6.3,14.05,14.05,14.05h172.49 c7.75,0,14.05-6.3,14.05-14.05C352.73,190.82,328.45,178.51,300.91,178.51z"/>
    
          <path fill="url(#gradient)" d="M225.25,298.87c0,16.56-13.44,30-30,30s-30-13.44-30-30s13.44-30,30-30S225.25,282.31,225.25,298.87z"/>
    
          <path fill="url(#gradient)" d="M346.75,298.87c0,16.56-13.44,30-30,30s-30-13.44-30-30s13.44-30,30-30S346.75,282.31,346.75,298.87z"/>
        </g>
      </svg>
      </div>
      
      <ul className='flex gap-16'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Pre-Owned</li>
      </ul>

      {isSignedIn ? (
        <div className='flex items-center gap-5'>
          <UserButton/>
          <Link to={'/AdminLogin'}>
          <Button>Submit listing</Button>
          </Link>
        </div>
      ) : (
        <div className='flex items-center gap-5'>
          <SignInButton mode="modal">
            <Button variant="ghost">Sign In</Button>
          </SignInButton>
          <Button>Submit Listing</Button>
        </div>
      )}
    </div>
  )
}

export default Header