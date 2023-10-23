"use client";
import Visitcard from "@/components/visitcard/Visitcard";
import { useEffect, useState } from "react";

export default function Home() {
   const [loading, setloading] = useState(true)
   useEffect(() => {
      const t = setTimeout(() => {
         setloading(false);
      }, 1000);
      return () => {
         clearTimeout(t);
      }

   }, []);


   return loading ? false : <div className="animate-fade-in"
   ><Visitcard /></div>

}
