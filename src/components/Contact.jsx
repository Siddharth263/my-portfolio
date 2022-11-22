import React from "react";
import Title from './Title';

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center item-center">
        <form action="https://getform.io/f/b0c89ce7-8534-485a-b491-3447c1f5f3e9"
        method="post"
        className="flex flex-col w-full md:w-7/12">
          <Title>Contact</Title>
          <input type="text" 
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md foucus:outline-none"
          />
          <input type="email" 
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md foucus:outline-none"
          />
          <textarea name="message"
            placeholder="Message" 
            id="" 
            cols="30" 
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md foucus:outline-none"
          />
          <button type="button"
            className="text-center inline-block
            px-8 py-3 w-max text-base font-medium rounded-md text-white 
            bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md
            hover:stroke-white"
          >
          Work With Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;