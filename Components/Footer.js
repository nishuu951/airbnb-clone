import React from 'react'

const Footer = () => {
  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 rounded-2xl shadow-xl'>
          <div className='space-y-4 text-xs text-gray-600'>
              <h5 className='font-bold'>ABOUT</h5>
              <p className='hover:text-red-400 cursor-pointer'>How Airbnb works</p>
              <p className='hover:text-red-400 cursor-pointer'>Newsroom</p>
              <p className='hover:text-red-400 cursor-pointer'>Investors</p>
              <p className='hover:text-red-400 cursor-pointer'>Airbnb Plus</p>
              <p className='hover:text-red-400 cursor-pointer'>Airbnb Luxe</p>
          </div>
          <div className='space-y-4 text-xs text-gray-600'>
              <h5 className='font-bold'>COMMUNITY</h5>
              <p className='hover:text-red-400 cursor-pointer'>Accessibility</p>
              <p className='hover:text-red-400 cursor-pointer'>This is not a real site</p>
              <p className='hover:text-red-400 cursor-pointer'>Its a pretty awesome clone</p>
              <p className='hover:text-red-400 cursor-pointer'>Referrals accepted</p>
              <p className='hover:text-red-400 cursor-pointer'>Airbnb clone</p>
          </div>
          <div className='space-y-4 text-xs text-gray-600'>
              <h5 className='font-bold'>HOST</h5>
              <p className='hover:text-red-400 cursor-pointer'>How Airbnb works</p>
              <p className='hover:text-red-400 cursor-pointer'>Newsroom</p>
              <p className='hover:text-red-400 cursor-pointer'>Investors</p>
              <p className='hover:text-red-400 cursor-pointer'>Airbnb Plus</p>
              <p className='hover:text-red-400 cursor-pointer'>Airbnb Luxe</p>
          </div>
          <div className='space-y-4 text-xs text-gray-600'>
              <h5 className='font-bold'>SUPPORT</h5>
              <p className='hover:text-red-400 cursor-pointer'>Help center</p>
              <p className='hover:text-red-400 cursor-pointer'>Trust & Safety</p>
              <p className='hover:text-red-400 cursor-pointer'>Cancellation Policy</p>
              <p className='hover:text-red-400 cursor-pointer'>Terms</p>
              <p className='hover:text-red-400 cursor-pointer'>Conditions</p>
          </div>
      
    </div>
  )
}

export default Footer
