import{ Header } from '@/app/components/header'
import "./globals.css";
import { Footer } from './components/footer';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-screen flex-col bg-yellow-300">
        <Header />
        
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

