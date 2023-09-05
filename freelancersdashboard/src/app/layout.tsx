import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen layout">{children}</body>
    </html>
  )
}
