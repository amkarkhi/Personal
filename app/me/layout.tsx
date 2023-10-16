import BinaryView from '@/components/visitcard/views/BinaryView'
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
      <section className="h-screen w-screen relative overflow-hidden">{children}</section>
   )
}
