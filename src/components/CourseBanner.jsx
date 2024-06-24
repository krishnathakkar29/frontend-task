import React from 'react'
import courseBanner from '../assets/courseBanner.webp'
function CourseBanner() {
  return (
    <div className='flex items-center justify-center -mb-12 relative hover:-translate-y-3 cursor-pointer transition-all duration-300 ease-linear'>
        <img src={courseBanner} alt="" />
    </div>
  )
}

export default CourseBanner