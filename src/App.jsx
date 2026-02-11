import React, {useState, useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Loader from './Components/Subcomponents/Loader'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className='App'>
      {loading && <Loader />}
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App