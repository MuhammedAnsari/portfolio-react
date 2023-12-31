import React from 'react';
import AFC from '../assets/projects/afc.png';
import DYN from '../assets/projects/dynnite.png';
import ALGHAD from '../assets/projects/itsoln.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Works</p>
            <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div 
         className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32'>
            <div style={{backgroundImage: `url(${AFC})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        AFC
                    </span>
                    <div className='pt-8 text-center'>
                      <a href='https://afc.world/' target='_blank' rel='noreferrer'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                      </a>
                      {/* <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a> */}
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${DYN})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Dynnite
                    </span>
                    <div className='pt-8 text-center'>
                      <a href='https://dynnite.com/' target='_blank' rel='noreferrer'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                      </a>
                      {/* <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a> */}
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${ALGHAD})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Itsolutions4u
                    </span>
                    <div className='pt-8 text-center'>
                      <a href='https://www.itsolutions4u.co/' target='_blank' rel='noreferrer'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                      </a>
                      {/* <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works
