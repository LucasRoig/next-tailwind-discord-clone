import {NextPage} from "next";
import React from "react";
import {useRouter} from "next/router";
import * as Icons from "../../../../components/icons";

import data from "../../../../data.json"
import Link from "next/link";

const Server1: NextPage = () => {
  let router = useRouter()
  let useState
  return (
    <>

      <div className="bg-gray-800 w-60 flex flex-col">
        <button
          className="px-4 h-12 flex items-center shadow-sm flex-shrink-0 font-title text-white text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative h-4 w-4 mr-1">
            <Icons.Verified className="h-4 w-4 absolute text-gray-550"/>
            <Icons.Check className="h-4 w-4 absolute"/>
          </div>
          Tailwind css
          <Icons.Chevron className='w-[18px] h-[18px] opacity-80 ml-auto'/>
        </button>

        <div className='text-gray-300 flex-1 overflow-y-scroll scrollbar font-medium pt-3 space-y-[21px]'>
          {data['1'].categories.map(category => (
            <div key={category.id}>
              {category.label &&
                  <button className="px-0.5 flex items-center text-xs font-title uppercase tracking-wide hover:text-gray-100 w-full">
                      <Icons.Arrow className="w-3 h-3 mr-0.5"/>
                    {category.label}
                  </button>
              }
              <div className="space-y-0.5 mt-[5px]">
                {category.channels.map(channel => (
                  <ChannelLink channel={channel} key={channel.id}/>
                ))}
              </div>
            </div>
          ))}


        </div>

      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-sm font-title text-white">general</div>
        <div className='flex-1 p-3 overflow-y-scroll space-y-2 scrollbar'>
          {[...Array(30)].map((_, i) => (
            <div key={i}>
              <div className="max-w-lg">
                <div className="flex hover:bg-gray-900 hover:bg-opacity-30 px-4 py-1">
                  <img className="w-10 h-10 rounded-full mr-4"
                       src="https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
                       alt=""/>
                  <div>
                    <p className="flex items-baseline">
                      <span className="text-green-500 mr-2 text-sm font-medium">lucas</span>
                      <span className="text-xs text-gray-500">01/12/2021</span>
                    </p>
                    <p className="">
                      lorem ipsum
                    </p>
                  </div>
                </div>
                <div className='mt-1 hover:bg-gray-900 hover:bg-opacity-30 px-4 py-1'>
                  <p className='pl-14'>
                    Lorem ipsum 18
                  </p>
                </div>
                <div className='mt-1 hover:bg-gray-900 hover:bg-opacity-30 px-4 py-1'>
                  <p className='pl-14'>
                    Lorem ipsum 75
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

const ChannelLink: React.FC<{ channel: any }> = ({channel}) => {
  let Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;
  let router = useRouter();
  let active = "" + channel.id === router.query.cid
  let classes = {
    active: 'text-white bg-gray-550/[0.32]',
    inactiveUnread: 'text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
    inactiveRead: 'text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100 active:bg-gray-550/[0.24]'
  }
  let state: keyof typeof classes = active ? 'active' : channel.unread ? 'inactiveUnread' : 'inactiveRead'
  return (
    <Link href={`/servers/${router.query.sid}/channels/${channel.id}`}>
      <a key={channel.id} href="#"
         className={`${classes[state]} flex items-center  px-2 mx-2 py-1 rounded group relative`}>
        {state === 'inactiveUnread' &&
            <div className="absolute w-1 h-2 bg-white left-0 rounded-r-full -ml-2"/>
        }

        <Icon className="w-5 h-5 text-gray-400 mr-1.5"/>
        {channel.label}
        <Icons.AddPerson
          className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100"/>
      </a>
    </Link>
  )
}

export default Server1;
