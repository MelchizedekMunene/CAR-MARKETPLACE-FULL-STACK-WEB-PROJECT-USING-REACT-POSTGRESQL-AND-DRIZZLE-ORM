import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Hero from './components/Hero'
import Header from './components/Header'
import Category from './components/Category'
import MostSearchedCars from './components/MostSearchedCars'

function Home() {
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Hero */}
      <Hero/>
      {/*Category*/}
      <Category/>
      {/*Most Searched Car */}
      <MostSearchedCars/>
    </div>
  )
}

export default Home
