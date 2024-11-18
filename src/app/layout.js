import './globals.css'
import { Outfit } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Newnavbar from './components/newnavbar/newnavbar'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: './',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className='container'>
          <Newnavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
