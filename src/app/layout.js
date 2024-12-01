import './globals.css'
import { Outfit } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Newnavbar from './components/newnavbar/newnavbar'
import Script from 'next/script'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C9CS0QEC9W"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C9CS0QEC9W');
          `}
        </Script>
      </head>
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
