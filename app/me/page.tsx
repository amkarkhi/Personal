import Visitcard from "@/components/visitcard/Visitcard";
import BinaryView from "@/components/visitcard/views/BinaryView";
import MainView from "@/components/visitcard/views/MainView";

export default function Home() {
   return (

      <MainView>
         <Visitcard/>
         <BinaryView/>
      </MainView>
   )
}
