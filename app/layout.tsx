import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { caES } from '@clerk/localizations';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Converso',
  description: 'Real-time AI Teaching Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider
          afterSignOutUrl={'/'}
          localization={caES}
        >
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
