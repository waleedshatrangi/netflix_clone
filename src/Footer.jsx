import React from 'react'

function Footer() {
  return (
    <div className='pb-20 text-[14px] md:text-[16px] text-gray-400'>
      <div className='mb-5'>Questions? Contact Us.</div>
      
      {/* Grid: Mobile pe 2 column, Desktop pe 4 column */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 underline list-none'>
        <div>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </div>
        <div>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </div>
        <div>
          <li>Account</li>
          <li>Redeem Gift Cards</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </div>
        <div>
          <li>Media Center</li>
          <li>Cookie Preferences</li>
          <li>Buy Gift Cards</li>
          <li>Legal Notices</li>
        </div>
      </div>

      <div>
        <select className='text-white border border-gray-500 py-1 px-2 pr-10 my-5 rounded bg-black' name='' id=''>
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
      <div className='mt-5'>Netflix UAE</div>
      <div className='text-[12px] mt-4'>
        This page is protected by Google reCAPTCHA... <span className='text-blue-500 underline cursor-pointer'>Learn more.</span>
      </div>
    </div>
  )
}

export default Footer