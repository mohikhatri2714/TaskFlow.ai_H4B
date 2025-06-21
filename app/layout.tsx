import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'TaskFlow.ai - AI-Powered Workflow Management',
  description: 'Revolutionize your workflow with AI-powered project management. Streamline tasks, boost productivity, and achieve more with intelligent automation and real-time insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-inter`}>{children}</body>
    </html>
  )
} 