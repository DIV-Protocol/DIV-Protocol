import './globals.css'
import { Sora } from 'next/font/google'

const font = Sora({ subsets: ['latin'] })

export const metadata = {
  title: 'DIV Protocol',
  description: 'Innovative way to handle your identity !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
