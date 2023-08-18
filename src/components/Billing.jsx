import React from 'react'
import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'

const Billing = () => (
  <section  id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='billing' 
      className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%]
        h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%]
        h-[50%] rounded-full pink__gradient'/>
    </div>

    {/* Section Content */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden'
        /> billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         At HooBank, we are committed to providing you with seamless
         and personalized banking experiences. We understand that managing
         your finances is not just about transactions, but about the control
         you have over your financial interactions. That's why we're excited
         to introduce our enhanced billing and invoicing features that put you
         in the driver's seat.
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img  src={apple} alt='app_store' className='w-[128px] h-[42px]
         object-contain mr-5 cursor-pointer'/>
        <img  src={google} alt='google_store' className='w-[128px] h-[42px]
         object-contain  cursor-pointer'/>
         
      </div>
      
    </div>

    

  </section>
  )


export default Billing
