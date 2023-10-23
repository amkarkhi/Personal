"use client"

import { useEffect, useState } from "react"

const LoadingComponent = () => {
   const [opacity, setopacity] = useState(1)

   useEffect(() => {
      if (opacity)
         setopacity(0);
   }, [opacity]);

   return <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#000',
      opacity,
      zIndex: 1000,
      content: "",
      transition: "all ease 200s"
   }} />
}



export default LoadingComponent
