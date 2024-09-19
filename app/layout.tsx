import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/Navbar'  // Adjust the import path as needed
import GameBackground from './components/backgrounds/GameBackground'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Angga Radifan Sumarna - Portfolio',
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <GameBackground />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}