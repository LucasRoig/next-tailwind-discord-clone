import type { NextPage } from 'next'
import React from "react";
import {useRouter} from "next/router";

const Home: NextPage = () => {
  return (
    <>

      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md flex-shrink-0 font-title text-white">Dashboard</div>

        <div className='text-gray-300 flex-1 p-3 space-y-2 overflow-y-scroll scrollbar font-medium'>
          <p className="text-white">Friends</p>
        </div>

      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">

      </div>
    </>
  )
}
export default Home
