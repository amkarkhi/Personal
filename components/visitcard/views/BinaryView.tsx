"use client"

import React, { useEffect, useRef } from 'react'

const BinaryView = () => {

   const ref = useRef<HTMLDivElement>(null)
   useEffect(() => {
      const t = setInterval(() => {
         if (ref.current) {
            ref.current.innerText = `${generaterandomStrong(ref.current.getBoundingClientRect().width * ref.current.getBoundingClientRect().height / 100)}`
         }
      }, 100)
      return () => { clearInterval(t) }
   }, [ref]);

   return (
      <div className="bg-black fixed inset-0 z-0 break-words w-screen h-screen text-red-500 overflow-hidden isolate" >
         <div ref={ref}
            style={{
               WebkitMaskImage: "radial-gradient(circle at 50% 50%,black 10%, transparent 80%)",
               WebkitMaskSize: ".8em .4em",
               textShadow: ".9em .3em 1px red",
            }} className="bg-black fixed inset-0 z-0 break-words w-screen h-screen text-red-500 overflow-hidden isolate" />

         <div style={{
            zIndex: 2,
            content: "",
            WebkitMaskImage: "radial-gradient(grey ,black)",
            background: "radial-gradient(black 50%,red 80% )",
            WebkitMaskSize: "1em 1em",
            backgroundPosition: "50vw 33vh",
         }} className="absolute inset-0 break-words w-screen h-screen overflow-hidden opacity-40" />

         <div
            style={{
               zIndex: 3,
               content: "",
               background: "radial-gradient(transparent 30% , black 65%)",
            }} className="absolute inset-0 break-words w-screen h-screen overflow-hidden" />

      </div >
   )
}

const AllAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generaterandomStrong(length: number) {
   let result = '';
   const charactersLength = AllAlphabets.length;
   for (let i = 0; i < length; i++) {
      result += AllAlphabets.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

export default BinaryView
