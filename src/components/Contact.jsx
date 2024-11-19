import React from 'react'

export const Contact = () => {
  return (
    <div className=' bg-custom-blue flex flex-col justify-center items-center h-screen px-8'>
      <h2 className='text-custom-red font-bold text-2xl'>Contact Me </h2>
      <p className=' text-custom-white text-xl '>Do you have any questions or proposals? Don't hesitate to contact me. I'll be happy to hear from you.</p>
      <div>
        <h3>Contact Information</h3>
        <ul>
          <li>email</li>
          <li>Number</li>
          <li>City</li>
          <ul>
            <li>Social1</li>
            <li>Social2</li>
            <li>Social3</li>
          </ul>
        </ul>
      </div>
      <form action="">
        <input type="text" name="" id="" />
        <input type="email" />
        <textarea name="" id=""></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  )
}
