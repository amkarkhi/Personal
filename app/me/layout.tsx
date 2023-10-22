import BinaryView from '@/components/visitcard/views/BinaryView'
import MainView from '@/components/visitcard/views/MainView'
import type { Metadata } from 'next'


export const metadata: Metadata = {
   title: 'Amin Karkhi',
   description: 'Personal Information',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <section className="h-screen w-screen relative overflow-hidden">
         <MainView>
            {children}
            <BinaryView/>
         </MainView>
      </section>
   )
}
