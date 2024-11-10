import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl text-yellow-400 font-bold'>Get in Touch</h2>
          <p className='text-grey-600 text-[18px] pt-2'>
            Drop me a line,give me a call or send me as messeage by submitting the form
          </p>
          <div className='flex gap-3 items-center'>
          <MdMailOutline  size={30}/>mbushra628@gmail.com
          </div>
          <div className='flex gap-3 items-center'>
          <BsFillTelephoneOutboundFill size={30} />(+932)000-0000
          </div>

        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text" className='h-[40px] bg-transparent border border-grey-900 ' id='name' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="text" className='h-[40px] bg-transparent border border-grey-900 ' id='email' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="msg">Message</label>
                <textarea  className='bg-transparent border border-grey-900 ' id='msg' rows={8}>
                </textarea>
            </div>
            <button className='bg-yellow-400 p-2 px-6'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
