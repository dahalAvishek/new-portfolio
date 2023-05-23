import React from 'react'
import styles from "../aboutContent/aboutContent.module.css"
import '../../style/globals.css'

const Form = () => {
  return (
    <div className={styles.form}>
        <h2 className='text-3xl'>Contact Us</h2>
        <form className='grid grid-flow-row'>
            <div className='flex gap-3 flex-wrap justify-between'>
              <label className='pb-4'><input placeholder='Name' required className='h-10 px-4 text-xl input-section border-b-2 focus:border-b-amber-400'></input></label>
              <label className='pb-4'><input placeholder='Email' required className='h-10 px-4 text-xl input-section border-b-2 focus:border-b-amber-400'></input></label>
            </div>
            <label className='px-1 block pt-5 text-2xl'><p>Message</p><textarea className='w-full input-section border-b-2 focus:border-b-amber-400'></textarea></label>
            <button className="w-fit mx-auto text-3xl pt-4 hover:border-b-2">send</button>
        </form>
    </div>
  )
}

export default Form