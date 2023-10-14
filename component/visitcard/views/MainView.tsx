import { PropsWithChildren } from "react"

const MainView = (props: PropsWithChildren) => {
   return (

      <div className="w-screen h-screen flex flex-col items-center justify-between">
         <div
            style={{ height: "70%" }}
            className="absolute  inset-0 w-full h-2/3 flex flex-col items-center justify-center bg-red-500 ">
            {props.children}
         </div>
         <div style={{
            height: "30%", borderTop: "2px solid white",
            transform: "rotateX(60deg)",
            filter: "blur(5px)"
         }}
            className="absolute inset-0 w-full flex flex-col items-center justify-center">
            {props.children}
         </div>
      </div>


   )
}

export default MainView
