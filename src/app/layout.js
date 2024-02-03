export const metadata = {
  title: 'Syntax Error Studios',
  description: 'Company Website',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
