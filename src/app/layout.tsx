import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bousselham Glila - Portfolio',
  description: 'Portfolio of Bousselham Glila - Full Stack Web Developer',
  viewport: "width=device-width, initial-scale=1.0",
  keywords: "Bousselham Glila, Portfolio, Full Stack Web Developer, Web Development",
  robots: "index, follow",
  authors: [{ name: "Bousselham Glila" }],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

        <meta name="googlebot" content="index, follow" />
      </head>
      <body className={`${inter.className} text-md bg-gradient-to-tr from-slate-950 to-slate-800 text-blue-100 `}>

        <div className='max-w-screen-xl min-h-screen mx-auto '>
          <NavBar />

          <main>
            {children}
          </main>
        </div>

      </body>
    </html>
  )
}
