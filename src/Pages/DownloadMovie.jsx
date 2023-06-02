import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const DownloadMovie = () => {
  return (
    <div className='bg-black'>
    <Navbar />
    <div className="flex justify-center items-center pt-36 pb-36 gap-3">
      <h2 className="text-light font-bold">Download</h2>
      <p className="text-red-600 italic">Maintenance</p>
    </div>
    <Footer />
  </div>
  )
}

export default DownloadMovie