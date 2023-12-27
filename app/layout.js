import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      
      
    <Script src="assets/vendor/purecounter/purecounter_vanilla.js" />
  <Script src="assets/vendor/aos/aos.js" />
  <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
  <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
  <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
  <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
  <Script src="assets/vendor/typed.js/typed.umd.js" />
  <Script src="assets/vendor/waypoints/noframework.waypoints.js" />
  <Script src="assets/vendor/php-email-form/validate.js" />

 
  <Script src="assets/js/main.js" />

      <Script>
        alert ("hello guys")
      </Script>
      </body>
    </html>
  )
}
