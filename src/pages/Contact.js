import React from 'react'
import DButton from "../components/DButton.js";

const Contact = () => {
  return (
        <div>
        <div className='bg-[#13161E] min-h-screen flex flex-wrap  justify-evenly md:items-center md:justify-around pt-20 text-white'>
            <div>
            <div class="container-fluid px-0">
    <img src="https://source.unsplash.com/1200x400/?call" alt="" className="w-full" />
</div>
<div className="container content-center items-center justify-center min-w-full px-3">
    <h1 className="py-3 text-center font-spacemono text-4xl">contact us</h1>
    <div className="">
    <form method="post" action="/contact">
        <div className="mb-3">
            <label for="name" className="form-label font-spacemono px-3">name</label><br />
            <input type="text" className="form-control px-3 mx-3 w-full font-spacemono block p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="name" name="name" placeholder="John Doe" />
            {/* <div id="emailHelp" className="form-text">we'll never share your email with anyone else.</div> */}
          </div>
        <div className="mb-3">
          <label for="email" className="form-label px-3 font-spacemono">email address</label><br />
          <input type="email" className="form-control font-spacemono mx-3 w-full block p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" name="email" aria-describedby="emailHelp" placeholder="abc@example.com" />
          <div id="emailHelp" className="form-text px-3 font-spacemono opacity-30">we'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="phone" className="form-label px-3 font-spacemono">phone number</label><br />
            <input type="number" className="form-control px-3 font-spacemono mx-3 w-full block p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="phone" name="phone" placeholder="+91 XXXXXXXXXX" />
        </div>
        <div className="mb-3">
          
<label for="message" className="block mb-2 font-medium text-white font-spacemono px-3">your message</label>
<textarea id="message" rows="4" className="block p-3 w-full text-sm font-spacemono text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-3" placeholder="Leave a comment..."></textarea>

        </div>
        <div className="mb-3 form-check px-3">
          <input type="checkbox" className="form-check-input px-3" id="exampleCheck1" />
          <label className="form-check-label px-3 font-spacemono" for="exampleCheck1">confirm</label>
        </div>
        <div className="mb-3">
        <div className='flex items-center justify-center'>
        <DButton title="SUBMIT" href="/contact" />
        </div>
        
        </div>
        
      </form>
    </div>
    
</div>
            </div>
            
        </div>
        </div>
        
  )
}

export default Contact