import React, { useEffect, useState } from 'react'
import crack from '../assets/cracks/crack3.png'
import leaf2 from '../assets/leaves/leaf2.png';
import { motion } from 'framer-motion';
import AshFade from './AshFade';

const Landing = () => {
  const [showimg, setshowimg] = useState(false);

  useEffect(() => {
    setTimeout(() => setshowimg(true), 5400);
  }, []); // ← added missing dependency array

  return (
    <div className='h-screen w-full bg-gray-200 pt-1 relative overflow-hidden'>
      {showimg && (
        <img
          src={crack}
          className='absolute w-[200vw]  sm:w-[50dvw]  sm:rotate-0 rotate-[90deg] left-0  sm:top-0 top-[-10vw] crack-animate'
          alt='Glass Crack'
        />
      )}
     
      <motion.img
        src={leaf2}
        alt="Falling Leaf"
        className="absolute  sm:top-40  sm:left-[75%] left-[10%] top-[50%] z-100  sm:w-90 w-60 pointer-events-none opacity-90 drop-shadow-[0_8px_6px_rgba(0,0,0,0.3)]"
        initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
        animate={{
          y: [0, 60, 140, 220, 300],
          x: [0, -10, 10, -2, 0],
          rotate: [0, 15, -10, 8, 0],
          opacity: [1],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
        }}
      />
      

      <div className='textstructure  sm:mt-40  sm:px-10 absolute  sm:left-190  sm:top-0 top-[43%] left-5 text-5xl'>
        <div className='masker'>
          <h1 className=' sm:text-9xl text-6xl leading-tight  sm:leading-[8vw] tracking-tight font-chomsky font-semibold text-b2gray drop-shadow-[2px_4px_3px_rgba(0,0,0,0.3)] backdrop-blur-sm transition duration-1000 hover:scale-[1.02]'>
            Read What
          </h1>
        </div>
        <div className='masker'>
        
          <h1 className=' sm:text-9xl text-6xl leading-tight  sm:leading-[8vw] tracking-tight font-chomsky font-bold text-b2gray drop-shadow-[2px_4px_3px_rgba(0,0,0,0.3)] backdrop-blur-sm transition duration-1000 hover:scale-[1.02]'>
            They <span className='text-orange-700'>Don't</span>
          </h1>
        </div>
        <div className='masker'>
          <h1 className=' sm:text-9xl text-6xl leading-tight  sm:leading-[8vw] tracking-tight font-semibold font-chomsky text-b2gray drop-shadow-[2px_4px_3px_rgba(0,0,0,0.3)] backdrop-blur-sm transition duration-1000 hover:scale-[1.02]'>
            Want You To...
          </h1>
        </div>
      </div>

      <div className=' sm:hidden bg-orange-700 absolute w-screen flex justify-center items-center top-[75%] py-4'>
        <button className='px-6 text-gray-100 font-chomsky text-xl drop-shadow-[2px_4px_3px_rgba(0,0,0,0.3)]'>
          Swipe to read
        </button>
      </div>

      <div className='border-t-4 py-6 my-6 w-screen absolute  sm:bottom-10 top-[85%] border-orange-700'></div>
    </div>
  )
}

export default Landing
