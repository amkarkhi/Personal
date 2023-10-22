import { PropsWithChildren } from "react"

const MainView = (props: PropsWithChildren) => {
   return (

      <div className="w-screen h-screen flex flex-col items-center justify-between overflow-hidden">
         <div
            className="absolute inset-0 w-full h-2/3 flex flex-col items-center justify-center rounded-s overflow-hidden">
            {props.children}
         </div>
         <div style={{ transform: "rotateX(130deg) skewX(0deg) skewY(0deg)", bottom: "-7.4%" }}
            className="absolute h-1/2 w-full flex flex-col items-center justify-center blur-sm overflow-hidden bg-black">
            {props.children}
         </div>
      </div>


   )
}

export default MainView
