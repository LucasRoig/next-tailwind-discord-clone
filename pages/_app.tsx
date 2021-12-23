import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";
import {Discord} from "../components/icons";


let servers = [
  {id: "1", img: "tailwind.png"},
  {id: "2", img: "next.png"},
  {id: "3", img: "mirage.png"},
]

function MyApp({Component, pageProps}: AppProps) {
  let router = useRouter()
  return (
    <>
      <Head><title>Discord clone</title></Head>
      <div className="flex text-gray-100 h-screen">
        <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll scrollbar">
          <NavLink href="/">
            <Discord className="w-7 h-5"/>
          </NavLink>
          <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />
          {servers.map(server => (
            <NavLink href={`/servers/${server.id}/channels/1`} active={router.query.sid === ""+server.id} key={server.id}>
              <img src={"/servers/" + server.img} alt=""/>
            </NavLink>
          ))}
        </div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

const NavLink: React.FC<{ href: string, active?: boolean }> = ({href, active = false, children}) => {
  let router = useRouter();
  active = active || router.asPath === href
  return (
    <Link href={href}>
      <a className="relative block group">
        <div className="flex absolute -left-3 h-full items-center">
          <div className={` ${active
            ? "h-10"
            : "h-5 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"}
                                bg-white w-1 rounded-r origin-left transition-all duration-200`}/>
        </div>
        <div className={` ${active
          ? "rounded-2xl bg-brand text-white"
          : "text-gray-100 group-hover:bg-brand group-hover:text-white bg-gray-700 group-hover:rounded-2xl rounded-3xl"}
                      w-12 h-12 flex justify-center items-center transition-all duration-200 group-active:translate-y-1 overflow-hidden`}>
          {children}
        </div>
      </a>
    </Link>
  )
}
export default MyApp
