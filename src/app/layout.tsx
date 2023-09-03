import NavBar from '@/components/NavBar'
import type { Metadata } from 'next'
import AnimatedBackground from '@/components/animated-background/AnimatedBackground'
import './globals.css'

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
      <body className={`text-md bg-gradient-to-tr from-black to-slate-950 text-blue-100 `}>


        {/* animated background  */}
        <AnimatedBackground />

        <div className='max-w-screen-xl z-1 min-h-screen mx-auto position-relative'>
          <NavBar />

          <main>
            {children}
          </main>
        </div>

      </body>
    </html>
  )
}
