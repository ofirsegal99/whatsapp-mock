import type { Metadata } from 'next'
import './globals.css'
import SubContent from '@/layout/SubContent'
import { Toaster } from 'sonner'
import ContentList from '@/layout/ContentList'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import Loading from '@/components/Loading'
import { ReduxProvider } from '@/redux/provider'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  return (
  <SessionProvider session={session}>
    <html lang="en"> 
      <body className='h-dvh'>
        <ReduxProvider>
      <Toaster richColors/>
      <div className='bg-WDS-emerald-500 h-1/6 absolute top-0 right-0 left-0 z-10'/>
        <div className=' bg-[#f0f2f5] shadow-lg z-20 absolute h-[calc(100%-2.375rem)] w-[calc(100%-2.375rem)] top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] flex'>
            <SubContent>
              <ContentList>
                <Loading/>
              </ContentList>
              </SubContent>
            <div className='flex w-9/12 border-solid border-l-[0.8px] border-[#d1d7db]'>
              {children}
            </div>
        </div>
        </ReduxProvider>
      </body>
    </html>
  </SessionProvider>
  )
}
