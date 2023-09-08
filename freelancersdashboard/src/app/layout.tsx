import './globals.css'
import NavBar from "@/components/navigation/NavBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen layout">
      {children}
      </body>
    </html>
  )
}
